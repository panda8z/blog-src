package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("%b\n", 1)                    // 1
	fmt.Printf("%b\n", 1<<20)                // 1 0000 0000 0000 0000 0000
	fmt.Printf("%v\n", 1<<20)                // 1048576
	fmt.Printf("%v\n", int(math.Pow(2, 20))) // 1048576
}
