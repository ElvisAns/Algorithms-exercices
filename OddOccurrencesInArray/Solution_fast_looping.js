// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let track = {}
    let odd_queue = {}
    
    if(A.length==1) return A[0];
    const len = A.length;
    for(i in A){
        
        j = len-i-1;
        
        if(j<i) break;

        value = A[i]
        value_mirror = A[j]

        if(track[value]!==undefined){
            track[value] = track[value] + 1;
            let occurence = track[value];
            if(occurence %2 != 0 ){
                odd_queue[value]  = value
            }
            else{
                delete odd_queue[value]
            }
        }
        else{
            track[value]=1
            odd_queue[value] = value;
        }
        
        //mirror loop
        if(j>i){
            if(track[value_mirror]!==undefined){
                track[value_mirror] = track[value_mirror] + 1;
                let occurence = track[value_mirror];
                if(occurence %2 != 0 ){
                    odd_queue[value_mirror]  = value_mirror
                }
                else{
                    delete odd_queue[value_mirror]
                }
            }
            else{
                track[value_mirror]=1
                odd_queue[value_mirror] = value_mirror;
            }
        }

    }
    const [remain,...other] = Object.values(odd_queue)
    return remain
}