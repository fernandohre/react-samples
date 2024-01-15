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

function UserList(props) {
  const userList = props.userList;
  console.log(props);
  if (!userList) {
    return(<p>no data to show</p>)
  }
  return(
    <div>
      <ul>
        {
          userList.map((user, key) => {
            return (<li key={key}>
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                    <p>{user.phone}</p>
                  </li>)
          })
        }
      </ul>
    </div>
  )
}


function App() {
  const [userList, setUserList] = useState([
    {
      firstName: "Aryanne",
      lastName: "Callata",
      phone: 123
    }
  ]);

  const onSubmitButton = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value
    }

    setUserList([...userList, newUser]);
  }

  return (
    <div className="App">
      <UserForm onSubmitButton={onSubmitButton}/>
      <UserList userList={userList}/>
    </div>
  );
}

export default App;
