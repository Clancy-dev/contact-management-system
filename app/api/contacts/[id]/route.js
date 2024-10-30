import mongoDBConnect from "@/libs/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}){

    //U see those params you can get an id from those params by destructuring the id

    try {
       

        //a) Connect to the DataBase
        await mongoDBConnect()
        //b) Get the data
        const contact = await Contact.findOne({_id:id});
        //We use find one instead of just find because it is only one id.
        //find one where id in the database is equal to id we have passed in above.

        return NextResponse.json(
            {
                message:"Ok",
                data:contact,
            }
            //in postman it will show that the data is successfully shown.


        );
        
    } catch (error) {
        return NextResponse.json(
            {
                //Argument 1
            message: "Failed to fetch contacts",
            error
            
        },{
               //Argument 2
            status:500
        });
     
    }
    
}


//Update a single course(UPDATE/EDIT)
export async function PUT(request,{params:{id}}){
    try{
       
        const {newPhoneContact:phoneContact,newPhoneDescription:phoneDescription} = await request.json();
        //why do we use newTitle or newDescription becase we want to differentiate it in or form.
        //afterwards create a new coarse.
        const newContact = {
            phoneContact,
            phoneDescription
        }
        // then connect to the database
        await mongoDBConnect() //import mongoDBConnect above
        // use the model to update the coarse
        await Contact.findByIdAndUpdate(id,newContact); //import Course above
        
        return NextResponse.json(
            {
                message: "Contact Updated successfully",          
                data: newContact,
            },{status:201}
        )

    }catch (error){
        return NextResponse.json(
            {
                //Argument 1
            message: "Failed to update contact",
            error
            
        },{
               //Argument 2
            status:500
        }
           
        )

    }
}



