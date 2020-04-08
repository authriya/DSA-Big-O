//1. What is Big O
//1) O(1)
//2) O(n)

//2. Even or odd
//O(1)- regardless of how big value is, you're performing one check basically

//3.Where are you
//O(n^2) - two levels of looping over input

//4.Doubler
//O(n)- one for loop, one function for every item in array

//5. Naive search
//O(n) function once per item

//6. Creating pairs
//O(n^2) nested for loops

//7. Compute the sequence
//Generates array with n numbers in Fibonacci sequence. Runtime complexity is O(n) because you do one operation per number size

//8. Efficient search
//O(logn) - array gets smaller with each iteration

//9. Random element
//O(1) - regardless of how big array is youre performing one check

//10. What Am I?
//O(n) - checks to see if input is not a prime number

//11. Tower of Hanoi

let towerOfHanoi = function(n, from_rod, to_rod, aux_rod) {
    if(n === 1) {
        console.log(`Move disk 1 from rod ${from_rod} to rod ${to_rod}`)
    } else {
        towerOfHanoi(n-1, from_rod, aux_rod, to_rod)
        console.log(`Move disk ${n} from rod ${from_rod} to rod ${to_rod}`)
        //run(1, A, C, B) move 1 from A to C
        //run(2, A, B, C) move 2 from A to B
        //run(1, C, B, A) move 1 from C to B
        //run(3, A, C, B) move 3 from A to C
        //run(1, B, A, C) move 1 from B to A
        //run(2, B, C, A) move 2 from B to C
        //run(1, A, C B) move 1 from A to C
        //move disk 4 from rod A to Rod B
        //run(1, C, B, A) move 1 froom C to B
        //run(2, C, A, B) move 2 from C to A
        //run(1, B, A, C) move 1 from B to A
        //run(3, C, B, A) move 3 from C to B
        //run(1, A, C, B) move 1 from A to C
        //run(2, A, B, C) move 2 from A to B
        //run(1, C, B, A) move 1 from C to B
        towerOfHanoi(n-1, aux_rod, to_rod, from_rod)
    }
}
//Runtime- O(n^2), exponentially increases with n

//12. 