const most_repeated_world = str =>{	
    const arr = str.split("");
    const mapp = {};
    let maxCount = 0
    let maxChar = ""
    
    arr.map(val=>{
        mapp[val] = mapp[val]+1 | 1;
    })
    
    for (let key in mapp) {
        if (mapp[key] > maxCount) {
          maxCount = mapp[key]
          maxChar = key
        }
    }
    
    return maxChar
}

const str = "Hello World";

console.log(most_repeated_world(str))