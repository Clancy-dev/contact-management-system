import mongoose from 'mongoose'
import React from 'react'


export default async function mongoDBConnect() {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
    }catch(error){
        console.log(error)
    }
  return (
    <div>
      
    </div>
  )
}
