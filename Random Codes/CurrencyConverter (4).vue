<template>
  <div class="app">
      <h1>Currency Converter</h1>
      <div :class="{'d-none':noResponse}">
        <div class="conversion-result">
          <span :class="{
                        'text-danger': hasError,
                        'text-success': !hasError
                       }">{{result}}</span>
        </div>
      </div>
      <div class="inputgroup">
        <label>Source symbol</label>
        <input placeholder="USD" v-model="source" class="currency-source" />
      </div>
      <div class="inputgroup">
        <label>Destination symbol</label>
        <input placeholder="CAD" v-model="destination" class="currency-destination" />
      </div>
      <div class="inputgroup">
        <label>Date</label>
        <input placeholder="YYYY-MM-DD" v-model="date" class="currency-date" />
      </div>
      <div>
        <button @click="submit" class="find-rate">Find Rate</button>
        <button @click="reset_fields" class="reset-fields">Reset Field</button>
      </div>
  </div>
</template>

<style scoped>
  *{
    font-family:Courier;
  }
  .app{
    background-color:#eee;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:30px 0px;
    justify-content:space-evenly;
    width:100%;
  }
  h1{
    font-size:1.4em;
  }
  label,.conversion-result{
    font-size:.9em
  }
  .app > div{
    margin:10px;
  }
  
  .app > div.inputgroup{
    display:flex;
    justify-content:space-between;
    width:50%
  }
  .app > div > button{
    margin:20px;
    height:40px;
  }
  .app > div > label{
    padding-right:10px;
  }
  .app > div > input{
    border-radius:10px;
    padding:5px 10px;
  }
  .d-none{
    display:none;
  }
  
  .currency-date{
    width:90px;
  }
  
  .currency-source,.currency-destination{
    width:40px;
  }
  
  .text-danger{
    color:red;
  }
  button{
    border-radius: 5px;
    background-image: linear-gradient(to top, rgb(207, 207, 207) 16%, rgb(252, 252, 252) 79%); 
    padding: 3px;
    border: 1px solid #000;
    color: black;
    text-decoration: none;
    cursor:pointer;
  }
  .text-success{
    color:green;
  }
</style>

<script>
import axios from "axios";

// https://us-east1-serverless-306422.cloudfunctions.net/exchangerates

export default {
  data(){
    return{
      noResponse:true,
      hasError:false,
      result:"fff",
      source:"",
      destination:"",
      date:""
    }
  },
  watch:{
    date(){
      let str = this.date.toUpperCase()
      let last = str.slice(-1)
      const pattern = /([0-9]|[-])/g
       if(!pattern.test(last)){
         str = str.slice(0,-1)
       }
      if(str.length==10){
        const pattern_final = /([0-9]{4}-[0-9]{2}-[0-9]{2})/g
        if(!pattern_final.test(str)){
          //alert("Your date doesnt respect the format YYYY-MM-DD")
          str=""
        }
      }
      str = str.slice(0,10)
      this.date=str
    },
    destination(){
      let str = this.destination.toUpperCase()
      let last = str.slice(-1)
      const pattern = /([A-Z])/g
       if(!pattern.test(last)){
         str = str.slice(0,-1)
       }
      str = str.slice(0,3)
      this.destination=str
    },
    source(){
      let str = this.source.toUpperCase()
      let last = str.slice(-1)
      const pattern = /([A-Z])/g
       if(!pattern.test(last)){
         str = str.slice(0,-1)
       }
      str = str.slice(0,3)
      this.source=str
    }
  },
  methods:{
    reset_fields(){
      this.date=""
      this.destination=""
      this.source=""
    },
    validate(str,req_length){
      return str.length==req_length?true:false
    },
    submit(){
      if(
        !this.validate(this.date,10) || 
        !this.validate(this.source,3) || 
        !this.validate(this.destination,3) 
      ){
        this.noResponse=false,
        this.hasError=true,
        this.result="Please complete each field"
      }
      else{
        axios.get(`https://us-east1-serverless-306422.cloudfunctions.net/exchangerates/historical?base=${this.source}&date=${this.date}&symbols=${this.destination}`)
        .then((res)=>{
          this.noResponse=false
          this.hasError=false
          this.result=res.data.rates[this.destination]
          console.log(res)
        })
        .catch((err)=>{ 
          this.noResponse=false
          this.hasError=true
          if(err.response){
            this.result=err.response.data.error
            console.log(err.response)
          }
          else{
            this.result="Something went wrong"
            console.log(err)
          }
        })
      }
    }
  }
}
</script>