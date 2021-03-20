package main

import (
	"strings"
	"testing"
)

func TestNewLinkedList(t *testing.T) {
	list := NewLinkedList()
	if list.String() != "[]" {
		t.Errorf("Init list function is error. The Result of fuction is %s,and the right should be %s.\n", list.String(), "[]")
	}
}

func TestLinkedList_GetLength(t *testing.T) {
	want := 4
	list := NewLinkedList()
	if list.GetLength() != 0 {
		t.Error("GetLength error when list is [].")
	}
	list.AddAtHead(3)
	if list.GetLength() != 1 {
		t.Error("GetLength error when list is first add head.")
	}
	list.AddAtHead(5)
	list.AddAtHead(4)
	list.AddAtHead(10)
	if list.GetLength() != want {
		t.Errorf("GetLength function is error.\n The Result of GetLength = %d,\nand the right should be %d.\n", list.GetLength(), want)
	}
}

func TestLinkedList_AddAtHead(t *testing.T) {
	want := "[{0,10},{1,4},{2,5},{3,3}]"
	list := NewLinkedList()
	list.AddAtHead(3)
	list.AddAtHead(5)
	list.AddAtHead(4)
	list.AddAtHead(10)
	if strings.Compare(list.String(), want) != 0 {
		t.Errorf("AddAtHead function is error.\n The Result of fuction is %s,\nand the right should be %s.\n", list.String(), want)
	}
}

func TestLinkedList_AddAtTail(t *testing.T) {
	want := "[{0,3},{1,5},{2,4},{3,10}]"
	list := NewLinkedList()
	list.AddAtTail(3)
	list.AddAtTail(5)
	list.AddAtTail(4)
	list.AddAtTail(10)
	if strings.Compare(list.String(), want) != 0 {
		t.Errorf("AddAtTail function is error.\n The Result of fuction is %s,\nand the right should be %s.\n", list.String(), want)
	}
}

func TestLinkedList_AddAtIndex(t *testing.T) {
	want := "[{0,3},{1,4},{2,51},{3,5}]"
	list := NewLinkedList()
	list.AddAtTail(5)
	list.AddAtIndex(0, 3)
	t.Log(list.String())
	list.AddAtIndex(1, 4)
	t.Log(list.String())
	list.AddAtIndex(2, 51)
	t.Log(list.String())
	if strings.Compare(list.String(), want) != 0 {
		t.Errorf("AddAtTail function is error.\n The Result of fuction is %s,\nand the right should be %s.\n", list.String(), want)
	}
}

func TestLinkedList_DeleteAtIndex(t *testing.T) {
	want := "[{0,3},{1,5},{2,4},{3,10}]"
	list := NewLinkedList()
	list.AddAtTail(3)
	list.AddAtTail(5)
	list.AddAtTail(4)
	list.AddAtTail(10)
	list.AddAtTail(10)
	list.DeleteAtIndex(3)
	list.AddAtHead(3)
	list.DeleteAtIndex(0)
	if strings.Compare(list.String(), want) != 0 {
		t.Errorf("AddAtTail function is error.\n The Result of fuction is %s,\nand the right should be %s.\n", list.String(), want)
	}
}

func TestLinkedList_GetByIndex(t *testing.T) {
	//"[{0,3},{1,5},{2,4},{3,10}]"
	var res int
	list := NewLinkedList()
	list.AddAtTail(3)
	list.AddAtTail(5)
	list.AddAtTail(4)
	list.AddAtTail(10)
	list.AddAtTail(10)
	list.DeleteAtIndex(3)
	list.AddAtHead(3)
	list.DeleteAtIndex(0)
	res, _ = list.GetByIndex(2)
	if res != 4 {
		t.Errorf("GetByIndex function is error.\n The Result of fuction is %d,\nand the right should be %d.\n", res, 4)
	}
	res, _ = list.GetByIndex(3)
	if res != 10 {
		t.Errorf("GetByIndex function is error.\n The Result of fuction is %d,\nand the right should be %d.\n", res, 10)
	}
}
