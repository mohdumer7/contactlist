import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./Contact";
import axios from "axios";

function App() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    async function getdata() {
      const contacts = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(contacts.data);
      setContact(contacts.data);
    }
    getdata();
  }, []);

  const deleteContact = (id) => {
    setContact((contact) => contact.filter((contact) => contact.id !== id));
  };

  return (
    <div className="w-full h-full bg-slate-300 app">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-slate-600 mt-10 text-5xl ">Contact List</h1>
        <ul>
          {contact.map((con) => (
            <li key={con.id}>
              <Contact contacts={con} deleteContact={deleteContact} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
