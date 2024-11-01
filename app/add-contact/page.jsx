"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function AddContact() {
    const [phoneContact, setPhoneContact] = useState("");
    const [phoneDescription, setPhoneDescription] = useState("");
    const router = useRouter();
    //Note: Above nextRouter is no longer on but it is on next/ navigation so make that change above when you use it.

    //1.)function handling submit
     async function handleSubmit(e){
        e.preventDefault()
        const newContact = {
            phoneContact,
            phoneDescription
        };    
        //console.log(newCourse)
        const api_url=process.env.NEXT_PUBLIC_BASE_URL
        const response = await fetch(`${api_url}/api/contacts`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(newContact)
        })

        if(response.status==201){
            router.push("/") //Send us to the home page
        }
     }

     //2.)after we have to do 2 things the state for storing the title and the state for storing the description
     //1 storing the title
    //  const [title, setTitle] = useState("")//by default it is going to be empty
    //2 storing the description
    // const [description, setDescription] = useState("");//by default it is going to be empty

    //3.)After set the values to onchange. When someone types in something in that input it captures that event,targets that value typed in and finally completely changes the value to that value set.
    // onChange={(e)=>setTitle(e.target.value)} value={title}
    //onChange={(e)=>setDescription(e.target.value)} value={description}

    //4.)After doing this we can then access the changed data from the newCourse
     //function handling submit
    //  async function handleSubmit(e){
    //     e.preventDefault()
    //     const newCourse = {
    //         title,
    //         description
    //     }
        //console.log(newCourse)
    //  }


    //5.)working on the response.
//     const response = await fetch("http://localhost:3000/api/courses",{
//         method:"POST",
//         headers:{
//             'Content-Type':"application/json"
//         },
//         body:JSON.stringify(newCourse)
        //  }




     //6.) We want when someone creates a new course he should not stay on that page but he should be automatically redirected back to the all courses page.
     //const router = useRouter();
    //  if(response.status==201){
    //     router.push("/") //Send us to the home page
    // }







  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter phone contact' onChange={(e)=>setPhoneContact(e.target.value)} value={phoneContact}/>
        <input type='text' placeholder='Enter phone description' onChange={(e)=>setPhoneDescription(e.target.value)} value={phoneDescription}/>
        <button type='submit'>Add Phone Contact</button>
    </form>
  )
}
