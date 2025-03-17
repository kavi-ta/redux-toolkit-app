import React, { useEffect, useState } from "react";
export const User = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) {
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.log("error", error));
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
