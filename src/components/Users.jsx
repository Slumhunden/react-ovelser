import { useState, useEffect } from "react";
import Table from "./Table";

export default function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("http://localhost:3333/users");
        const data = await response.json();
        setUsers(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(users);
  return (
    <>
      <Table data={users} />
    </>
  );
}
