import React from "react";

function UserRecord({ data }) {
  return (
    <ol>
      {data.map((user, index) => (
        <li key={index}>
          {user.name.title} {user.name.first} {user.name.last}
        </li>
      ))}
    </ol>
  );
}

export default UserRecord;
