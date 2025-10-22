import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../../types/User";

export default function UsersList() {
  const [users, setUser] = useState<User[]>([]);

  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const data = await res.json();
    setUser(data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      UsersList
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name}
            <img src={u.avatar[0]} alt={u.name} width={"200px"} />
            <Link to={`/users/${u.id}`}>To user</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
