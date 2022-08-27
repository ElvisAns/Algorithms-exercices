<template>
  <div id="app">
    <p><strong class="title">Add a new contact</strong></p>
    <form @submit="recordEntry">
      <div class="form_gr"><label>First Name: </label><input type="text" v-model="fname" name="fname" class="userFirstname"  /></div> 
      <div class="form_gr"><label>Last Name: </label><input type="text" v-model="lname" name="lname" class="userLastname" /></div> 
      <div class="form_gr"><label>Phone: </label><input type="tel" v-model="phone" name="phone" class="userPhone" /></div>
      <button class="submitButton">Add New Contact</button>
    </form>
    <table id="phoneBookItems" class="informationTable">
      <thead>
        <tr>
          <td>First name</td>
          <td>Last name</td>
          <td>Phone</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values,index) in items" :key="index">
          <th>{{values.fname}}</th>
          <th>{{values.lname}}</th>
          <th>{{values.phone}}</th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">{{msg}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        items: [],
        fname:"Coder",
        lname:"Byte",
        phone:"8885559999",
        msg:"Your datas will appear here!"
      }
    },
    methods:{
      recordEntry(e){
        e.preventDefault()

          if(!this.fname){
            alert("Please specify the first name");
            return;
          }

          if(!this.lname){
            alert("Please specify a last name");
            return;
          }

          if(this.phone.length<6){
            alert("Please specify a valid phone number");
            return;
          }

          const itemsss = [...this.items]

          itemsss.push({fname:this.fname,lname:this.fname,phone:this.phone})

          itemsss.sort((a,b)=>{
            return a.lname.localeCompare(b.lname)
          })

          this.items = itemsss;
          this.msg="You currently have "+itemsss.length+" saved contact(s)"
          this.lname=""
          this.fname=""
          this.phone=""
      }
    }
  };
</script>

<style scoped>
  #app{
    width:80vw;
    margin-left:10vw;
  }

  @media (max-width:400px){
    #app{
      width:50vw;
      margin-left:25vw;
    }
  }

  .form_gr{
    display:flex;
    flex-direction:column;
  }
  input,label{
    margin:3px 0px;
  }
  input{
    max-width:220px;
    padding:6px;
    box-shadow: 4px 1px purple;
  }

  .title{
    color:purple;
    text-transform:uppercase;
  }
  .submitButton{
    background-color:purple;
    margin:8px 0px;
    padding:6px;
    color:white;
    border-radius:5px;
    border-color:transparent;
  }
   
  table{
    width:100%;
    border-collapse:collapse;
  }

  tfoot td{
    border-right:none;
    boder-left:none;
  }

  tfoot tr{
    background-color:#eee;
  }

  th,td{
    padding:15px;
    text-align:left;
  }

  thead{
    background-color:purple;
  }

  thead td{
    color:white;
  }
  
  table,th,td{
    border-style:solid;
    border-color:black;
    border-width:1px;
  }
</style>

