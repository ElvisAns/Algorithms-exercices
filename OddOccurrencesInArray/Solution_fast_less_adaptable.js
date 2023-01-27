// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let remain = 0
    
    for(value of A){
        remain =  remain ^ value
    }
    
    return remain
}