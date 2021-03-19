package main

import (
	"fmt"
	"strconv"
	"strings"
)

type Node struct {
	Val  int
	Next *Node
}

type MyLinkedList struct {
	List   *Node
	Length int
}

func (this *MyLinkedList) String() string {
	str := "["
	cur := this.List
	for cur != nil {
		str = fmt.Sprintf("%s%d,", str, cur.Val)
		cur = cur.Next
	}
	if len(str) > 1 {
		str = str[:len(str)-1]
	}
	return str + "]"
}

/** Initialize your data structure here. */
func Constructor() MyLinkedList {
	return MyLinkedList{}
}

/** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
func (this *MyLinkedList) Get(index int) int {
	if index < 0 || index > this.Length-1 {
		return -1
	}
	cur := this.List
	if cur == nil {
		return -1
	}
	for i := 0; i < this.Length; i++ {
		if index == i {
			break
		}
		cur = cur.Next
	}
	return cur.Val
}

/** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
func (this *MyLinkedList) AddAtHead(val int) {
	n := &Node{val, this.List}
	this.List = n
	this.Length++
}

/** Append a node of value val to the last element of the linked list. */
func (this *MyLinkedList) AddAtTail(val int) {
	head := &Node{0, this.List}
	cur := head
	for cur.Next != nil {
		cur = cur.Next
	}
	cur.Next = &Node{val, nil}
	this.Length++
	this.List = head.Next
}

/** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
func (this *MyLinkedList) AddAtIndex(index int, val int) {

	if index < 0 || index > this.Length {
		return
	}
	if index == this.Length {
		this.AddAtTail(val)
		return
	}
	head := &Node{0, this.List}
	pre, cur := head, head.Next
	count := 0
	for cur != nil {
		if count == index {
			pre.Next = &Node{val, cur}
			this.Length++
			this.List = head.Next
			break
		}
		count++
		cur = cur.Next
		pre = pre.Next
	}
}

/** Delete the index-th node in the linked list, if the index is valid. */
func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index < 0 || index > this.Length-1 {
		return
	}
	head := &Node{0, this.List}
	pre, cur := head, head.Next
	count := 0
	for cur != nil {
		if count == index {
			pre.Next = cur.Next
			this.Length--
			this.List = head.Next
			break
		}
		count++
		cur = cur.Next
		pre = pre.Next
	}
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* obj := Constructor();
* param_1 := obj.Get(index);
* obj.AddAtHead(val);
* obj.AddAtTail(val);
* obj.AddAtIndex(index,val);
* obj.DeleteAtIndex(index);
 */

func main() {

	var f []string = []string{"MyLinkedList", "addAtHead", "addAtTail", "addAtTail", "addAtTail", "addAtTail", "addAtTail", "addAtTail", "deleteAtIndex", "addAtHead", "addAtHead", "get", "addAtTail", "addAtHead", "get", "addAtTail", "addAtIndex", "addAtTail", "addAtHead", "addAtHead", "addAtHead", "get", "addAtIndex", "addAtHead", "get", "addAtHead", "deleteAtIndex", "addAtHead", "addAtTail", "addAtTail", "addAtIndex", "addAtTail", "addAtHead", "get", "addAtTail", "deleteAtIndex", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtTail", "addAtHead", "addAtHead", "addAtTail", "addAtTail", "get", "get", "addAtHead", "addAtTail", "addAtTail", "addAtTail", "addAtIndex", "get", "addAtHead", "addAtIndex", "addAtHead", "addAtTail", "addAtTail", "addAtIndex", "deleteAtIndex", "addAtIndex", "addAtHead", "addAtHead", "deleteAtIndex", "addAtTail", "deleteAtIndex", "addAtIndex", "addAtTail", "addAtHead", "get", "addAtIndex", "addAtTail", "addAtHead", "addAtHead", "addAtHead", "addAtHead", "addAtHead", "addAtHead", "deleteAtIndex", "get", "get", "addAtHead", "get", "addAtTail", "addAtTail", "addAtIndex", "addAtIndex", "addAtHead", "addAtTail", "addAtTail", "get", "addAtIndex", "addAtHead", "deleteAtIndex", "addAtTail", "get", "addAtHead", "get", "addAtHead", "deleteAtIndex", "get", "addAtTail", "addAtTail"}
	var p []string = []string{"[]", "[38]", "[66]", "[61]", "[76]", "[26]", "[37]", "[8]", "[5]", "[4]", "[45]", "[4]", "[85]", "[37]", "[5]", "[93]", "[10,23]", "[21]", "[52]", "[15]", "[47]", "[12]", "[6,24]", "[64]", "[4]", "[31]", "[6]", "[40]", "[17]", "[15]", "[19,2]", "[11]", "[86]", "[17]", "[55]", "[15]", "[14,95]", "[22]", "[66]", "[95]", "[8]", "[47]", "[23]", "[39]", "[30]", "[27]", "[0]", "[99]", "[45]", "[4]", "[9,11]", "[6]", "[81]", "[18,32]", "[20]", "[13]", "[42]", "[37,91]", "[36]", "[10,37]", "[96]", "[57]", "[20]", "[89]", "[18]", "[41,5]", "[23]", "[75]", "[7]", "[25,51]", "[48]", "[46]", "[29]", "[85]", "[82]", "[6]", "[38]", "[14]", "[1]", "[12]", "[42]", "[42]", "[83]", "[13]", "[14,20]", "[17,34]", "[36]", "[58]", "[2]", "[38]", "[33,59]", "[37]", "[15]", "[64]", "[56]", "[0]", "[40]", "[92]", "[63]", "[35]", "[62]", "[32]"}
	var a []string = []string{"null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "61", "null", "null", "61", "null", "null", "null", "null", "null", "null", "85", "null", "null", "37", "null", "null", "null", "null", "null", "null", "null", "null", "23", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "-1", "95", "null", "null", "null", "null", "null", "31", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "8", "null", "null", "null", "null", "null", "null", "null", "null", "null", "6", "47", "null", "23", "null", "null", "null", "null", "null", "null", "null", "93", "null", "null", "null", "null", "48", "null", "93", "null", "null", "59", "null", "null"}
	Test(f, p, a)
	// str := "{1,2}"
	// str = str[1 : len(str)-1]
	// fmt.Println(str)
	// strList := strings.Split(str, ",")
	// a, _ := strconv.Atoi(strList[0])
	// b, _ := strconv.Atoi(strList[1])
	// fmt.Println(a, b)

	// ["MyLinkedList","addAtIndex","addAtIndex","deleteAtIndex","addAtIndex","deleteAtIndex"]
	// [[0,1],[0,2],[0],[1,3],[1]]
	// 0 addIndex
	// list := Constructor()
	// list.AddAtIndex(0, 1)
	// fmt.Println(list.String())
	// list.AddAtIndex(1, 1)
	// fmt.Println(list.String())
	// list.AddAtIndex(2, 2)
	// fmt.Println(list.String())
	// list.AddAtIndex(3, 3)
	// list.AddAtIndex(2, 6)
	// fmt.Println(list.String())
	// list.AddAtIndex(4, 4)
	// list.AddAtIndex(5, 5) //6
	// fmt.Println(list.String())
	// // 0 delete
	// list.DeleteAtIndex(0) //5
	// fmt.Println(list.String())
	// // tail delete
	// list.DeleteAtIndex(4)
	// fmt.Println(list.String())
	// a := 0
	// 	["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get"]
	// [[],[7],[2],[1],[3,0],[2],[6],[4],[4]]
	// list := Constructor()
	// fmt.Println(list.String())
	// list.AddAtHead(7)
	// list.AddAtHead(2)
	// list.AddAtHead(1)
	// fmt.Println(list.String())
	// list.AddAtIndex(3, 0)
	// fmt.Println(list.String())
	// list.DeleteAtIndex(2)
	// fmt.Println(list.String())
	// list.AddAtHead(6)
	// fmt.Println(list.String())
	// list.AddAtTail(4)
	// fmt.Println(list.String())
	// a = list.Get(4)
	// fmt.Println(list.String(), a)

	// list.DeleteAtIndex(1)
	// fmt.Println(list.String())

	// a = list.Get(1)
	// fmt.Println(list.String(), a)

	// list.AddAtHead(6)
	// fmt.Println(list.String())

	// list.AddAtTail(4)
	// fmt.Println(list.String())

	// 	list.AddAtHead(4)
	// 	fmt.Println(list.String())

	// 	list.AddAtIndex(5, 0)
	// 	fmt.Println(list.String())

	// 	list.AddAtHead(6)
	// 	fmt.Println(list.String())

}

func Test(f []string, p []string, anwser []string) {

	getTwoParam := func(index int) (a, b int) {
		str := p[index]
		str = str[1 : len(str)-1]
		strList := strings.Split(str, ",")
		a, _ = strconv.Atoi(strList[0])
		b, _ = strconv.Atoi(strList[1])
		return a, b
	}

	getOneParam := func(index int) int {
		str := p[index]
		str = str[1 : len(str)-1]
		strList := strings.Split(str, ",")
		a, _ := strconv.Atoi(strList[0])
		return a
	}

	var list MyLinkedList
	for i, v := range f {
		switch v {
		case "addAtIndex":
			a, b := getTwoParam(i)
			list.AddAtIndex(a, b)
		case "addAtHead":
			list.AddAtHead(getOneParam(i))
		case "addAtTail":
			list.AddAtTail(getOneParam(i))
		case "deleteAtIndex":
			list.DeleteAtIndex(getOneParam(i))
		case "get":
			v := list.Get(getOneParam(i))
			fmt.Println(v, anwser[i])
		case "MyLinkedList":
			list = Constructor()
		}
	}
}
