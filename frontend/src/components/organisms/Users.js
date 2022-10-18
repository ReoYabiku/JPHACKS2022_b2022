import React, { useState } from "react";
import User from "../atoms/User";
import db from "../../database/firebase";

export default function Users() {
  const [users, setUsers] = useState([]);

  var usersRef = db.collection("users");
  usersRef.get().then(querySnapshot => {
    setUsers(querySnapshot.docs.map(doc => doc.data()));
  });

  return (
    <div>
      <h1>[GetAllUsers]</h1>
      <div style={{display: "flex"}}>
        {users.map(user => <User key={user.id} name={user.name} age={user.age} sex={user.sex} />)}
      </div>
    </div>
  );
}