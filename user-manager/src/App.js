import './App.css';
import React, {useState} from 'react';
function UserForm({ onSubmitButton }) {
  return (<form onSubmit={onSubmitButton}>
    <input name="firstName" />
    <input name="lastName" />
    <input name="phone" />
    <button>add</button>
  </form>)
}

function UserList({ userList }) {
  console.log(userList);
  if (!userList) {
    return(<p>no data to show</p>)
  }
  return(
    <>
      {
        userList.map((user) => {
          return (
            <li>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.phone}</p>
            </li>
          )
        })
      }
    </>
  )
}


function App() {
  const [userList, setUserList] = useState([]);

  const onSubmitButton = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: e.target.firstName,
      lastName: e.target.lastName,
      phone: e.target.phone
    }
    setUserList([...userList, newUser]);

    console.log(userList);
  }

  return (
    <div className="App">
      <UserForm userList={userList}/>
      <UserList onSubmitButton={onSubmitButton}/>
    </div>
  );
}

export default App;
