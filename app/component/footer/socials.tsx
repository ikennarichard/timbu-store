import Facebook from "@/public/icons/facebook";
import Instagram from "@/public/icons/instagram";
import Pinterest from "@/public/icons/pinterest";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex items-center gap-5 mx-auto">
      <Link href="#">
        <Pinterest />
      </Link>
      <Link href="#">
        <Instagram />
      </Link>
      <Link href="#">
        <Facebook />
      </Link>
    </div>
  );
}
