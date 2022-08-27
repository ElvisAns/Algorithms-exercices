/*
String Challenge
Have the function StringChallenge(str) take the str parameter being passed and determine if it is a valid serial number with the following constraints:

1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
2. The first set of digits must add up to an even number.
3. The second set of digits must add up to an odd number.
4. The last digit in each set must be larger than the two previous digits in the same set.

If all the above constraints are met within the string, the your program should return the string true, 
otherwise your program should return the string false. 

For example: if str is "224.315.218" then your program should return "true".
*/
function StringChallenge(str) { 
    const arr = str.split(".");
  
      if(arr.length!==3){
        return "false";
      } 
  
      let pos = 0;
      for(val of arr){
          let number = Array.from(val,x=>parseInt(x));
          //console.log(number);
          if(number.includes(0)) return false;
          if(number.length<3) return false;
          if(number[2]<=number[0] || number[2]<=number[1]) return false;
          
          
        let s=0;
        switch(pos){
            case 0:
              s=number.reduce((a,b)=>a+b)
              if(s%2!==0)return false;
            break;
  
            case 1:
              s=number.reduce((a,b)=>a+b)
              if(s%2===0) return false;
            break;
        }
      pos++;
    }
    return true;
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));