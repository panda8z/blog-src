package main

import "fmt"

func main() {
	fmt.Println(f(1))
}

func f(x int) (_, __ int) {
	return x, x
}

// 请选择正确的输出
// A：11 正确
// B：01
// C：00
// D：10
// 命名返回值会被return 语句赋值
