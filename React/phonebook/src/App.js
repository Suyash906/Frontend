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
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook}) {

  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const userFirstnameChangeHandler = (e) => {
    setUserFirstname(e.target.value);
  }

  const userLastnameChangeHandler = (e) => {
    setUserLastname(e.target.value)
  }

  const userPhoneChangeHandler = (e) => {
    setUserPhone(e.target.value)
  }

  const addEntry = () => {
    addEntryToPhoneBook(userFirstname, userLastname, userPhone)
  }

  return (
    <form onSubmit={e => { e.preventDefault(); addEntry();}} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        onChange={userFirstnameChangeHandler}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        onChange={userLastnameChangeHandler} 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        onChange={userPhoneChangeHandler}
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

function InformationTable({information}) {
  const informationItems = information.map( (info, index) => 
    <tr key={index}>
        <td>{info.userFirstname}</td>
        <td>{info.userLastname}</td>
        <td>{info.userPhone}</td>
    </tr>
  );
  
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
        {informationItems}
      </tbody> 
    </table>
  );
}

function Application(props) {

  const [information, setInformation ] = useState([])

  const addEntryToPhoneBook = (userFirstname, userLastname, userPhone) => {
    setInformation([...information, {'userFirstname':userFirstname, 'userLastname':userLastname, 'userPhone':userPhone}])
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable information={information}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);

export default Application;
