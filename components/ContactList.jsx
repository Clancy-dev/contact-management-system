"use client"
import React, { useState } from "react";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import DeleteBtn from "./DeleteBtn";
import SearchBar from "./SearchBar";

export default function CoursesList({contacts}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts?.filter(contact =>
    contact.phoneContact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-list">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredContacts?.map((contact) => (
        <div className="course" key={contact.id}>
          <div className="course-details">
            <h2 className="course-title">{contact.phoneContact}</h2>
            <p className="description">{contact.phoneDescription}</p>
          </div>
          <div className="course-actions">
            <DeleteBtn id={contact._id} />
            <Link className="edit" href={`/edit-contact/${contact._id}`} title="Edit">
              <HiPencilAlt size={32} />
            </Link>
            <Link href={`/contacts/${contact._id}`} title="View ">
              <AiOutlineEye size={32} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
