function StringChallenge(str) { 
  const reg = /(zero)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|(plus)|(minus)/g;
  let result = ""
  const replacer = {
    "zero" : 0,
    "one" : 1,
    "two" : 2,
    "three": 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven": 7,
    "eight": 8,
    "nine" : 9,
    "plus" : "+",
    "minus" : "-",
  }
  const number_string = ["zero","one","two","three","four","five","six","seven","eight","nine"]

  const safe = str.replace(reg,(match,offest)=>{
    result+=replacer[match]
  })

  const comp = eval(result)

  const array_numbers = comp.toString().split("");
  const sol = array_numbers.map(number=> {
    if(number=="-") return "negative";
    return number_string[number]
  })
  
  return sol.join(""); 

}
   
// keep this function call here 
console.log(StringChallenge(readline()));