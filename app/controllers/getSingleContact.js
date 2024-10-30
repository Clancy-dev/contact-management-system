export default async function getSingleCourse(id){
    const api_url =process.env.NEXT_PUBLIC_BASE_URL
    console.log(api_url)

    try {
        const response = await fetch(`${api_url}/api/contacts/${id}`,{cache:"no-store"});
        const contact = await response.json();
        return contact.data; 
    } catch (error) {
        console.log(error)
          
    }
}