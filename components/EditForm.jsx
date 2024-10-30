"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
export default function EditForm({contact}) {
  const router = useRouter();
  const [newPhoneContact,setNewPhoneContact] = useState(contact.phoneContact);
  const [newPhoneDescription,setNewPhoneDescription] = useState(contact.phoneDescription);
  async function handleSubmit(e){
    e.preventDefault()
    const newContact = {
        newPhoneContact,
        newPhoneDescription
    };    
    const api_url=process.env.NEXT_PUBLIC_BASE_URL  
    const response = await fetch(`${api_url}/api/contacts/${contact._id}`,{
        method:"PUT",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(newContact)
    })

    if(response.status==201){
        router.push("/") //Send us to the home page
        router.refresh();
    }
 }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Phone Contact" onChange={(e)=>setNewPhoneContact(e.target.value)} value={newPhoneContact}/>
      <input type="text" placeholder="Enter Contact description" onChange={(e)=>setNewPhoneDescription(e.target.value)} value={newPhoneDescription}/>
      <button type="submit">Update Contact</button>
    </form>
  )
}
