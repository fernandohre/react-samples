import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserResults from "./components/UserResults";

function App() {
  const [userList, setUserList] = useState([]);

  const onSubmitButton = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
    };

    setUserList([...userList, newUser]);
  };

  return (
    <div className="App">
      <UserForm onSubmitButton={onSubmitButton} />
      <UserResults userList={userList} />
    </div>
  );
}

export default App;
