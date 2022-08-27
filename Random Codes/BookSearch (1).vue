<template>
  <div class="app">
    <div class="inputgroup">
      <label>Author</label>
       <input @input="filter" v-model="author" class="author" type="text" name="author"/>
      
       <label>Title</label>
       <input @input="filter" v-model="title" class="title" type="text" name="title"/>
      
       <label>Country</label>
       <input @input="filter" v-model="country" class="country" type="text" name="country"/>
      
       <label>Language</label>
       <input @input="filter" v-model="language" class="language" type="text" name="language"/>
      
       <label>Year</label>
       <input @input="filter" v-model="year" class="year" type="text" name="year"/>
      
    </div>
    <div class="result" :class="{'hide':!searchResult.length}">
      <h2>Result ({{searchResult.length}}) : </h2>
      <div v-for="(val,index) in searchResult" :key="index" class="book">
        <table style="width:100%">
          <tr>
            <th>Author:</th>
            <td>{{val.author}}</td>
          </tr>
          <tr>
            <th>Country:</th>
            <td>{{val.country}}</td>
          </tr>
          <tr>
            <th>Language:</th>
            <td>{{val.language}}</td>
          </tr>
          <tr>
            <th>Pages:</th>
            <td>{{val.pages}}</td>
          </tr>
          
          <tr>
            <th>Title:</th>
            <td>{{val.title}}</td>
          </tr>
          
          <tr>
            <th>Year:</th>
            <td>{{val.year}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    books : Array
  },
  data(){
    return{
      searchResult:this.books,
      author:"",
      title:"",
      country:"",
      language:"",
      year:""
    }
  },
  mounted(){
    console.log(this.books)
  },
  methods:{
    filter(){
      const result = this.books.filter((book,index)=>{
        if(this.author.length){
          if(book.author.toLowerCase().indexOf(this.author.trim().toLowerCase())==-1)
            return false;
        }
        
        if(this.title.length){
          if(book.title.toLowerCase().indexOf(this.title.trim().toLowerCase())==-1)
            return false;
        } 
        
        if(this.country.length){
          if(book.country.toLowerCase().indexOf(this.country.trim().toLowerCase())==-1)
            return false;
        }
        
        if(this.language.length){
          if(book.language.toLowerCase().indexOf(this.language.trim().toLowerCase())==-1)
            return false;
        }
        
        if(this.year.toString().length){
          if(book.year.toString().toLowerCase().indexOf(this.year.trim().toLowerCase())==-1)
            return false;
        }
        
        return true;
        
      })
      
      this.searchResult=result
    }
  }
}
</script>

<style>
  .app{
    display:flex;
    justify-content:space-between;
    font-size:12px;
  }
  @media (max-width:500px){
    .app{
      flex-direction:column;
    }
  }
  label {
    padding: 5px 5px 0 0;
    display: inline-block;
  }
  input[type=text] {
    width: 150px;
    padding: 4px 4px;
    margin: 8px 0;
    display:block;
    box-sizing: border-box;
  }
  input[type=text] {
    transition: width 0.4s ease-in-out;
  }
  input[type=text]:focus{
    border:solid 2px red;
  }
  input[type=text]:focus {
    width: 180px;
  }
  .hide{
    display:none;
  }
  .result{
    display:flex;
    flex-direction:column;
    align-items:left;
    width:60vw;
  }
  table, th, td {
    border: 1px solid #eee;
    border-collapse: collapse;
  }
  th, td {
    padding: 5px;
  }

  th{
    text-align:left;
    width:30%;
  }
  td{
    text-align:right;
    width:30%;
  }
  table{
    margin:20px 0px;
  }
</style>