import mongoDBConnect from "@/libs/mongodb";
import Contact from "@/models/contact";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request){  
    try {
        await mongoDBConnect();
        const contacts = await Contact.find();
        revalidatePath("/");
        return NextResponse.json(
            {
                message:"Ok",
                data:contacts,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
            message: "Failed to fetch contacts",
            error    
        },{            
            status:500
        });     
    } 
}


//step 3
// In real life we don't create the courses the we are doing above for example const courses = [...and so on], The courses have to come from a database ie mongodb.

//step 4
//Install mongoose in our project ie npm i mongoose and sign in into mongodb. login into mongodb and create a new project, don't create any deployment. 
//create a database instead(build a database/cluster)
//choose the free one.

//step 5
//copy the password and put it in the folder called .env.local ie MONGODB_URL=mongodb+srv://clancyro1789:PWoJHAJVlJQLnk2d@cluster0.cmqqb.mongodb.net/next-crud-app

//step 6
//outside create a folder called libs. Inside libs create a file called mongodb.jsx

//step 7
//Create a model
//This the one responsible for helping us create the crud operations.
//To be able to create a model you should be able to also know a schema. A Schema defines the structure of the model. Forexample let me say you want to create for courses. A course has a title which is a string, slug which is also a string and many more.
//go outside and create a folder called models. Inside this folder create a file called course.js


//step 8
//We now do the crud operations as below
//Create a Course(CREATE)
//create a route for it.
export async function POST(request){
    try{
        //get the data from this very request which afterwards t we want to send it to the database.
        //data being obtained
        //the data is the title and the description which people are trying to send from the form.
        const {phoneContact,phoneDescription} = await request.json();
        //afterwards create a new coarse.
        const newContact = {
            phoneContact,
            phoneDescription
        }
        // then connect to the database
        await mongoDBConnect() //import mongoDBConnect above
        // use the model to create the coarse.
        await Contact.create(newContact); //import Course above
        //alternatively if you didn't want to create the new coarse you could simply   await Coarse.create({title,description});
        return NextResponse.json(
            {
                message: "Contact created successfully",          
                data: newContact,
            },{status:201}
        )

    }catch (error){
        return NextResponse.json(
            {
                //Argument 1
            message: "Failed to create a contact",
            error
            
        },{
               //Argument 2
            status:500
        }
           
        )

    }
}

//Note:
//After this step 8 we can use postman to simulate what we are talking about.
//Duplicate the other title you had already in postman using the 3 dots and rename it as Create a Coarse.
//use the same link though change from get to post
//Go to body on postman. By default there is no body but we are sending data.
//Change from none to raw and from text to JSON format.
//raw
//json
// {
//     "title":"Html, CSS and Javascript courses",
//     "description":"This is a fundamental course that we teach at Desishub"
// }
// we are trying to attach the body to the request because this is where the data is being received.

//After check Mongodb 
//Database
//Browse Collections
//You will see all our results and they even created for us the id already.



//Step 9
//Instead of us putting the data manually in the try method like this below.
// const courses = [
//             {
//                 id:1,
//                 title:"HTML Css coarse",
//                 description:"This is a fundamental Course"
//             },
//             {
//                 id:2,
//                 title:"Python Coarse",
//                 description:"This is a backend course"
//             }
    
//         ]
//The data has to come from the  database like the way i have made some improvements above.


//Step 10
//Go back to the postman of our original get.
//The new request before you made a copy


//Step 11
//Getting a single course (location :api then courses then [id] then route.js)

//DELETE A COURSE
export async function DELETE(request){
    try {
        //Get the id of the coarse we want to delete
        const id = request.nextUrl.searchParams.get("id");
        //console.log(id);

        //After connect to the db
        await mongoDBConnect();

        //use the the model to delete
        await Contact.findByIdAndDelete(id)

        //return the response
        return NextResponse.json({
            message:"Contact Deleted successfully",
        },
        {status:200}
    )
        
    } catch (error) {
        return NextResponse.json(
            {
                //Argument 1
            message: "Failed to Delete a contact",
            error
            
        },{
               //Argument 2
            status:500
        }
           
        )
    }
}
