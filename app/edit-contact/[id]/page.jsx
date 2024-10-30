import getSingleContact from '@/app/controllers/getSingleContact'
import EditForm from '@/components/EditForm';
import React from 'react'

export default async function EditCourse({params:{id}}) {
    const contact = await getSingleContact(id);
  return (
    <div>
        <EditForm contact = {contact}/>
      
    </div>
  )
}
