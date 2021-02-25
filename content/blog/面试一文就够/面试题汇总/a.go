package main

import "fmt"

func main() {
	fmt.Println(f(1))
}

func f(x int) (_, __ int) {
	_, __ = x, x
	return
}

// 请选择正确的输出
// A：11
// B：01 正确
// C：00
// D：10
// 单个下划线是忽略符 两个下划线是正常的标识符。
