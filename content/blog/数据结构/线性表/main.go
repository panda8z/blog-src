package main

var (
	OK       = 1
	ERROR    = 0
	OVERFLOW = -2
)

const MaxSize = 1000

type Status int

type SqList struct {
	Elem   []int
	Length int
}

// InitList 构造一个空的顺序表L
func (l SqList) InitList() Status {
	l.Elem = make([]int, MaxSize, MaxSize)
	if l.Elem == nil {
		return Status(OVERFLOW)
	}
	l.Length = 0
	return Status(OK)
}

// GetElem 取值操作。根据指定的位置序号i，获取顺序表中第i个数据元素的值
func (l SqList) GetElem(i int, e *int) Status {
	if i < 1 || i > l.Length {
		return Status(OVERFLOW)
	}
	e = &l.Elem[i-1]
	return Status(OK)
}

// LocateElem 在顺序表L中查找值为e的数据元素，返回其序号
func (l SqList) LocateElem(e int) int {
	for i := 0; i < l.Length; i++ {
		if e == l.Elem[i] {
			return i + 1 // success
		}
	}
	return -1 // fail
}

// ListInsert 在顺序表L中第i个位置插入新的元素e，i值的合法范围是1≤i≤L.length+1
func (l SqList) ListInsert(i int, e int) Status {
	if i < 1 || i > l.Length {
		return Status(ERROR)
	}
	if l.Length == MaxSize {
		return Status(OVERFLOW)
	}

	for j := l.Length - 1; j >= i-1; j-- {
		l.Elem[j+1] = l.Elem[j]
	}
	l.Elem[i-1] = e
	l.Length++
	return Status(OK)
}

func (l SqList) ListDelet(i int) Status {
	if i < 1 || i > l.Length {
		return Status(ERROR)
	}

	for j := i - 1; j < l.Length; j++ {
		l.Elem[j] = l.Elem[j+1]
	}
	l.Length--
	return Status(OK)
}

func main() {

}
