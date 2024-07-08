import Facebook from "@/public/icons/facebook";
import Instagram from "@/public/icons/instagram";
import Pinterest from "@/public/icons/pinterest";

export default function Socials() {
  return (
    <div className="flex items-center gap-5 mx-auto">
      <Pinterest />
      <Instagram />
      <Facebook />
    </div>
  );
}
