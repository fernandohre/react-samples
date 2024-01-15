import React from "react";

export default function UserResults(props) {
    const userList = props.userList;

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