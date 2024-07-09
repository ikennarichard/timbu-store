import Logo from "../Logo";
import FooterList from "./footer-list";
import FooterListItem from "./footer-list-item";
import Socials from "./socials";
import Subscribe from "./subscribe";

export default function Footer() {
  return (
    <footer className="bg-dark_cyan px-8 py-12 flex flex-col gap-8 mt-5">
      <Subscribe />
      <Logo textColor="white" />

      <div className="flex justify-between">
        <FooterList heading="Products">
          <FooterListItem>
            <p>Protein Powder</p>
            <p>Glutamine</p>
            <p>Fat Burners</p>
            <p>Nitric</p>
          </FooterListItem>
        </FooterList>
        <FooterList heading="About us">
          <FooterListItem>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Pages</p>
          </FooterListItem>
        </FooterList>
        <div className="x-sm:hidden">
          <FooterList heading="Contact">
            <FooterListItem>
              <p>Email: vault@customersupport.com</p>
              <p>Phone: +1 856-873-008</p>
            </FooterListItem>
          </FooterList>
        </div>
      </div>
      <Socials />
    </footer>
  );
}
