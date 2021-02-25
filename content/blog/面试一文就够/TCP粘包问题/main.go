package main

import (
	"bufio"
	"bytes"
	"encoding/binary"
	"fmt"
	"net"
	"strconv"
	"sync"

	"io"
)

type Package struct {
	Size uint16
	Body []byte
}

// data -> io.Writer
func writePacket(dataWriter io.Writer, data []byte) error {
	buf := new(bytes.Buffer)
	// write size to buf
	if err := binary.Write(buf, binary.LittleEndian, uint16(len(data))); err != nil {
		return err
	}

	// write data to buf
	if _, err := buf.Write(data); err != nil {
		return err
	}

	// write package to data-writer
	out := buf.Bytes()
	if _, err := dataWriter.Write(out); err != nil {
		return err
	}
	return nil
}

func Connector(address string, times int) {
	conn, err := net.Dial("tcp", address)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	for i := 0; i < times; i++ {
		if err := writePacket(conn, []byte(strconv.Itoa(i))); err != nil {
			fmt.Println(err.Error())
			break
		}
	}

}

type Acceptor struct {
	l             net.Listener
	wg            sync.WaitGroup
	OnSessionData func(net.Conn, []byte) bool
}

func (a *Acceptor) Start(address string) {
	a.listen(address)
}

func (a *Acceptor) listen(address string) {
	a.wg.Add(1)
	defer a.wg.Done()
	var err error
	a.l, err = net.Listen("tcp", address)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	for {
		conn, err := a.l.Accept()
		if err != nil {
			break
		}
		go handleSession(conn, a.OnSessionData)
	}
}

func (a *Acceptor) stop() {
	a.l.Close()
}

func (a *Acceptor) wait() {
	a.wg.Wait()
}

func NewAcceptor() *Acceptor {
	return &Acceptor{}
}

func handleSession(conn net.Conn, callback func(net.Conn, []byte) bool) {
	reader := bufio.NewReader(conn)

	for {
		pkt, err := readPacket(reader)
		if err != nil || !callback(conn, pkt.Body) {
			conn.Close()
			break
		}
	}
}

func readPacket(dataReader io.Reader) (pkt Package, err error) {
	// read size
	var sizeBuf = make([]byte, 2)
	_, err = io.ReadFull(dataReader, sizeBuf)
	if err != nil {
		return
	}
	sizeReader := bytes.NewReader(sizeBuf)
	err = binary.Read(sizeReader, binary.LittleEndian, &pkt.Size)
	if err != nil {
		return
	}
	// read body
	pkt.Body = make([]byte, pkt.Size)
	_, err = io.ReadFull(dataReader, pkt.Body)
	return
}

func main() {
	fmt.Println("Hello!")
}
