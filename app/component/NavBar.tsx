import NavLinks from "./NavLink";

export default function NavBar() {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-6">
        <NavLinks />
      </ul>
    </nav>
  );
}
