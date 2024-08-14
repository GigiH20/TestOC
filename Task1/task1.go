package main

import (
	"fmt"
)

func MostFrequentStringLength(strings []string) []string {
	lengthCounts := make(map[int]int)
	for _, s := range strings {
		length := len(s)
		lengthCounts[length]++
	}

	maxFrequency := 0
	for _, count := range lengthCounts {
		if count > maxFrequency {
			maxFrequency = count
		}
	}

	mostFrequentLengths := make(map[int]bool)
	for length, count := range lengthCounts {
		if count == maxFrequency {
			mostFrequentLengths[length] = true
		}
	}

	var result []string
	for _, s := range strings {
		if mostFrequentLengths[len(s)] {
			result = append(result, s)
		}
	}
	return result
}

func main() {
	arrayString1 := []string{"a", "ab", "abc", "cd", "def", "gh"}
	arrayString2 := []string{"hello", "word", "hi", "OCTech", "hi"}
	arrayString3 := []string{"ac", "afcds", "sdasdas", "adas", "aaaa"}
	fmt.Println("String1", MostFrequentStringLength(arrayString1))
	fmt.Println("String2", MostFrequentStringLength(arrayString2))
	fmt.Println("String3", MostFrequentStringLength(arrayString3))

}
