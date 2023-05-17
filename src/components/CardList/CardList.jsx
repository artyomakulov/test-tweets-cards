import React from "react";
import users from "data/users";
import Card from "components/Card/Card";


const CardList = () => {
  return (
    
    <div>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardList