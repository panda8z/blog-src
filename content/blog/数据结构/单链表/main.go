package main

import "fmt"

// MyLinkedList 定义链表节点，此定义是合并型定义，头节点是空节点。
type MyLinkedList struct {
	Data int           `json:"data"` // data
	Node *MyLinkedList `json:"node"` // node
}

func Constructor() MyLinkedList {
	return MyLinkedList{}
}

// Print 打印整型链表的json形式
func (this *MyLinkedList) Print() {
	var str string = "[ "
	var cur = this
	for cur != nil {
		if cur.Node == nil {
			str += fmt.Sprintf("\"%d\"", cur.Data)
		} else {
			str += fmt.Sprintf("\"%d\", ", cur.Data)
		}
		cur = cur.Node
	}
	str = fmt.Sprintf("%s ]", str)
	fmt.Println(str)
}

/** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
func (this *MyLinkedList) Get(index int) int {
	count := 0
	cur := this.Node
	ret := -1

	if index < 0 || this.Node == nil {
		return -1
	}

	for cur != nil {
		if count == index {
			ret = cur.Data
			break
		}
		cur = cur.Node
		count++
	}
	return ret
}

/** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
func (this *MyLinkedList) AddAtHead(val int) {
	next := this.Node
	var n = &MyLinkedList{val, next}
	this.Node = n
}

/** Append a node of value val to the last element of the linked list. */
func (this *MyLinkedList) AddAtTail(val int) {
	var cur = this
	for cur != nil {
		if cur.Node == nil {
			cur.Node = &MyLinkedList{val, nil}
			break
		}
		cur = cur.Node
	}

}

/** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
func (this *MyLinkedList) AddAtIndex(index int, val int) {
	var pre = this
	count := 0
	for pre != nil {
		if index == count {
			next := pre.Node
			pre.Node = &MyLinkedList{val, next}
			break
		}
		pre = pre.Node
		count++
	}

}

/** Delete the index-th node in the linked list, if the index is valid. */
func (this *MyLinkedList) DeleteAtIndex(index int) {
	pre := this
	cur := this.Node
	count := 0
	for cur != nil {
		if index == count {
			if cur.Node == nil {
				pre.Node = nil
			} else {
				pre.Node = cur.Node
			}
			break
		}
		pre = cur
		cur = cur.Node
		count++
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
	obj := Constructor()
	obj.Print() // {}

	param_1 := obj.Get(0)
	fmt.Println(param_1)
	obj.Print() // -1

	obj.AddAtHead(3)
	fmt.Println("AddAtHead(3) obj:")
	obj.Print()

	obj.AddAtTail(4)
	fmt.Println("AddAtTail(4) obj:")
	obj.Print()

	obj.AddAtIndex(2, 5)
	fmt.Println("AddAtIndex(2, 5) obj:")
	obj.Print()

	obj.DeleteAtIndex(2)
	fmt.Println("DeleteAtIndex(2) obj:")
	obj.Print()
}
