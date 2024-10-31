import Link from "next/link";
export default function Header() {
  return (
    <header>
      <Link className="logo" href="/">
        <h2>Clancy Contact Management System (CCMS)</h2>
      </Link>
      <Link href="/add-contact" className="add-new-contact-container">
        <h2>Add New Contact</h2>
      </Link>
    </header>
  );
}
