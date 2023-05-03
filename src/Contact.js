import React from "react";

const Contact = ({ contacts, deleteContact }) => {
  return (
    <>
      <div className="w-3/4 bg-white h-[50px] p-5 flex gap-10 justify-between items-center m-10">
        <img src="/user.png" alt="user" className="h-[30px]" />
        <p>{contacts.name}</p>
        <p>{contacts.email}</p>
        <p>{contacts.phone}</p>
        <p>{contacts.company.name}</p>
        <button
          onClick={() => deleteContact(contacts.id)}
          className="bg-red-500 p-2 rounded-md text-white hover:bg-red-800"
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Contact;
