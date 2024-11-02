import ContactList from "@/components/ContactList";
import SearchBar from "@/components/SearchBar";
import getContacts from "./controllers/getContacts";
import Header from "@/components/Header";

export default async function Home() {
  const contacts = await getContacts();
  console.log(contacts)
  return (
    <>
    <Header/>
    {/* <SearchBar/> */}
    <ContactList contacts={contacts}/>
    
    </>
  );
}






            
