// import { revalidatePath } from "next/cache";

//this function can be called from any where because it is the one responsible for getting the raw object data
export default async function getContacts(){
    const api_url=process.env.NEXT_PUBLIC_BASE_URL
    console.log(api_url)
    
    try {
        const response = await fetch(`${api_url}/api/contacts`,{cache:"no-store",});
        
        const contacts = await response.json();
        // revalidatePath("/")
        
        return contacts.data;
    } catch (error) {
        console.log(error)
        
    }
}