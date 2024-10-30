
import getSingleContact from '@/app/controllers/getSingleContact';
import React from 'react'

export default async function ViewCourse({params:{id}}) {
    const contact = await getSingleContact(id);
    // const courseData=course.data
    console.log(contact)
  return (
    <div className="detail-page">
              <h1>Contact Detail Page</h1>

        <div className="course-details">
             <h2>{contact.phoneContact}</h2>
            <p>{contact.phoneDescription}</p>  
            <p>{contact.createdAt}</p>

            
        </div> 
           
    </div>
  )
}



