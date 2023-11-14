import { useState } from "react";
export default function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { name, username, mail, age };
    resetForm();

    await fetch("http://localhost:3333/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };
  function resetForm() {
    setName("");
    setUsername("");
    setMail("");
    setAge("");
  }
  return (
    <div>
      <h1>Create User</h1>
      <form style={{ display: "grid", gap: "1em" }} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(event)=> setName(event.target.value)} />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        <label htmlFor="mail">Email</label>
        <input type="mail" id="mail" value={mail} onChange={(event) => setMail(event.target.value)} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={age} onChange={(event) => setAge(event.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
