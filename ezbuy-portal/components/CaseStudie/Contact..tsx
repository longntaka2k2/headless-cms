import bgContact from "@/public/images/bg-contact.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Contact({ lang }: { lang: any }) {
  return (
    <div className="container px-4 py-6 lg:py-15 text-white">
      <div className="bg-[url('https://strapi-ezbuy.ichiba.net/uploads/bg_contact_23b824f23c.svg')] container py-15 px-5 lg:px-14 rounded-xl overflow-hidden">
        <p className="mb-6 text-2xl lg:text-4xl font-bold">
          {lang.contact.title}
        </p>
        <Link
          href={"/contact-sales"}
          target="_blank"
          className="bg-brand-primary text-sm font-medium px-4 py-3 rounded-lg"
        >
          {lang.contact.btnText}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-3 h-3 pl-1 text-white"
          />
        </Link>
      </div>
    </div>
  );
}
