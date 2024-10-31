import ContactList from "@/components/ContactList";
import SearchBar from "@/components/SearchBar";
import getContacts from "./controllers/getContacts";

export default async function Home() {
  const contacts = await getContacts();
  console.log(contacts)
  return (
    <>
    {/* <SearchBar/> */}
    <ContactList contacts={contacts}/>
    </>
  );
}






            
