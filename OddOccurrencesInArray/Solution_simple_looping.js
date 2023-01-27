// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let track = {}
    let odd_queue = {}
    
    for(value of A){
        if(track[value]!==undefined){
            track[value] = track[value] + 1;
            let occurence = track[value];
            if(occurence %2 != 0 ){
                odd_queue[value]  = value
            }
            else{
                delete odd_queue[value]
            }
            continue;
        }
        track[value]=1
        odd_queue[value] = value;
    }
    const [remain,...other] = Object.values(odd_queue)
    return remain
}