import Link from "next/link";
export default function Header() {
  return (
    <header>
      <Link className="title" href="/">
        <h2>Clancy Contact Management System (CCMS)</h2>
      </Link>
      <Link href="/add-contact" className="new-contact-section">
        <h3>Add New Contact</h3>
      </Link>
    </header>
  );
}
