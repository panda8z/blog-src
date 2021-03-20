/*
原则：
1. 单链表 索引从零开始。
2. 如有必要，需明确返回值得错误信息。
*/
package main

import (
	"errors"
	"fmt"
)

type Linked interface {
	GetLength() int
	GetByIndex(index int) (interface{}, error)
	GetByValue(val interface{}) (int, error)

	AddAtHead(val interface{})
	AddAtTail(val interface{}) error
	AddAtIndex(index int, val interface{}) error

	DeleteAtValue(val interface{}) error
	DeleteAtHead() error
	DeleteAtTail() error
	DeleteAtIndex() error
}

type Node struct {
	Data int
	Next *Node
}

func (n *Node) PFormat() string {
	return fmt.Sprintf("{\n\tData: %d,\n\tNext:%v\n}", n.Data, n.Next)
}

func (n *Node) String() string {
	return fmt.Sprintf("{\n\tData: %d,\n\tNext:%v\n}", n.Data, n.Next)
}

type LinkedList struct {
	List   *Node
	Length int
}

func NewLinkedList() *LinkedList {
	return &LinkedList{}
}

func (l *LinkedList) PFormat() string {
	str := "[\n"
	cur := l.List
	for i := 0; i < l.Length; i++ {
		if i == l.Length-1 {
			str += fmt.Sprintf("\t{%d, %d}\n", i, cur.Data)
		} else {
			str += fmt.Sprintf("\t{%d, %d},\n", i, cur.Data)
		}
		cur = cur.Next
	}
	str += "]\n"
	return str
}

func (l *LinkedList) String() string {
	str := "["
	cur := l.List
	for i := 0; i < l.Length; i++ {
		if i == l.Length-1 {
			str += fmt.Sprintf("{%d,%d}", i, cur.Data)
		} else {
			str += fmt.Sprintf("{%d,%d},", i, cur.Data)
		}
		cur = cur.Next
	}
	str += "]"
	return str
}

func (l *LinkedList) GetLength() int {
	return l.Length
}

func (l *LinkedList) GetByIndex(index int) (int, error) {
	cur := l.List
	var count int
	if index < 0 || index > l.Length-1 {
		return -1, errors.New("Invalid index!")
	} else {
		for cur != nil {
			if count == index {
				break
			}
			count++
			cur = cur.Next
		}
		return cur.Data, nil
	}
}

func (l *LinkedList) AddAtHead(val int) {
	n := &Node{val, l.List}
	l.List = n
	l.Length++
}

func (l *LinkedList) AddAtTail(val int) {
	n := &Node{val, nil}

	var head = l.List

	if head == nil {
		l.AddAtHead(val)
		return
	}

	var cur = head

	for cur.Next != nil {
		cur = cur.Next
	}
	cur.Next = n
	l.Length++
}

func (l *LinkedList) AddAtIndex(index int, val int) error {
	var head = l.List

	if index < 0 || index > l.Length-1 {
		return errors.New("index is invalid!")
	}

	if index == 0 {
		l.AddAtHead(val)
		return nil
	}

	var pre = head
	var cur = head.Next
	for i := 1; i < l.Length; i++ {
		if index == i {
			pre.Next = &Node{val, cur}
			l.Length++
			break
		}
		pre = cur
		cur = cur.Next
	}
	return nil

}

func (l *LinkedList) DeleteAtIndex(index int) error {
	var head = l.List
	if index < 0 || index > l.Length-1 {
		return errors.New("invalid Index!")
	}

	// pre cur 的初始化必须在这个位置，
	// 因为前面的逻辑中至此才能确定 head ！= nil，即 head.Next 可以访问。
	// 不然的话，如果head == nil 会报panic。
	var pre = head
	var cur = head.Next
	if index == 0 {
		l.List = head.Next
		l.Length--
		return nil
	}
	for i := 1; i < l.Length; i++ {
		if index == i {
			pre.Next = cur.Next
			l.Length--
			break
		}
		pre = cur
		cur = cur.Next
	}
	return nil
}

func main() {
	fmt.Println("=== 节点链表单独定义 ===")

	list := NewLinkedList()
	fmt.Println(list.String())
	fmt.Println("length of the List is:", list.GetLength())

	fmt.Println("add Tail 3")
	list.AddAtTail(3)
	fmt.Printf("then the list :\n%s\n", list.String())

	fmt.Println("add Head 4")
	list.AddAtHead(4)
	fmt.Printf("then the list :\n%s\n", list.String())

	fmt.Println("add index 1, 5")
	list.AddAtIndex(1, 5)
	fmt.Printf("then the list :\n%s\n", list.String())

	fmt.Println("delete index 1")
	list.DeleteAtIndex(1)
	fmt.Printf("then the list :\n%s\n", list.String())

}
