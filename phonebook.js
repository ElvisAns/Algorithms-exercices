import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px',
      padding:'5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
      cursor:'pointer',
      color:'white',
      width:'100%',

    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  return (
    <form onSubmit={e => { e.preventDefault(); addEntryToPhoneBook(e.target[0].value,e.target[1].value,e.target[2].value) }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        defaultValue='Coder'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        defaultValue='Byte'
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        defaultValue='888555999'
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function Displaydatas(props){
  const value=props.value
  return (<tr><td style={style.tableCell}>{value.First_name}</td><td style={style.tableCell}>{value.Last_name}</td><td style={style.tableCell}>{value.Phone}</td></tr>)
}

function InformationTable({users}) {
//console.log(users);
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((value,index)=>{
            return <Displaydatas key={index} value={value}/>
        })}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [users,addUsers] = useState([]);
  
  const saveUser=function(fname,lname,phone){
    let cur = [...users]
    cur.push({First_name: fname,Last_name:lname,Phone:phone})
    cur.sort(function(left,right){
      return left.Last_name.localeCompare(right.Last_name)
    })
    addUsers(cur);
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={saveUser} />
      <InformationTable users={users}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);