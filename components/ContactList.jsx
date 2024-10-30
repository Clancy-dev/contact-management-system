import React from "react";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import DeleteBtn from "./DeleteBtn";
import getContacts from "@/app/controllers/getContacts";
export default async function ContactList() {
  //bring in our controller
  const contacts = await getContacts();
   console.log(contacts)

  return (
    <div className="courses-list">
      {/* map through this below */}

      {/* <div className="course">
        <div className="course-details">
          <h2 className="course-title">HTML and Css Course</h2>
          <p className="description">This is the fundamental course</p>
        </div>
        <div className="course-actions">
          <DeleteBtn />
          <Link className="edit" href="/edit-course/123" title="Edit">
            {/* <HiPencilAlt size={32} /> */}
          {/* </Link> */}
           {/* <Link href="/courses/12" title="View "> */}
            {/* <AiOutlineEye size={32} /> */}
          {/* </Link> */}
         {/* </div> */}
      {/* </div> */} 


      {
        contacts?.map((contact)=>{
          return(
              <div className="course" key={contact.id}>
        <div className="course-details">
          <h2 className="course-title">{contact.phoneContact}</h2>
          <p className="description">{contact.phoneDescription}</p>
        </div>
        <div className="course-actions">
          <DeleteBtn id={contact._id}/>
          <Link className="edit" href={`/edit-contact/${contact._id}`} title="Edit">
           <HiPencilAlt size={32} /> 
           </Link> 
            <Link href={`/contacts/${contact._id}`} title="View "> 
             <AiOutlineEye size={32} /> 
          </Link> 
          </div> 
       </div> 



          )


        })

      }


     



     
    </div>
  );
}










// {
//   courses?.map((course)=>{
//     return(
//      <div className="course"  key={course.id}> 
//   <div className="course-details">
//     <h2 className="course-title">{course.title}</h2>
//     <p className="description">{course.description}</p>
//   </div>
//   <div className="course-actions">
//     <DeleteBtn />
//     <Link className="edit" href={`/edit-course/${course.id}`} title="Edit"> 
//       <HiPencilAlt size={32} />
//     </Link>
//     <Link href="/courses/12" title="View ">
//       <AiOutlineEye size={32} />
//     </Link>
//   </div>
// </div>
//     )
//   })



// }