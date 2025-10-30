import Faq from "@/components/common/faq";
import { linkFAQ } from "@/utils/utils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const FAQs = () => {
  const router = useRouter();

  const { t } = useTranslation("digital-features");

  return (
    <section className="lg:tw-py-16 tw-py-4 tw-px-4 lg:tw-px-0">
      <Faq
        items={(
          t(`faq.contents`, {
            returnObjects: true,
          }) as { title: string; des: string[] }[]
        ).map((x) => ({
          title: x.title,
          content: x.des,
        }))}
        link={
          <Link
            href={linkFAQ(router?.locale as string)}
            passHref
            className="tw-text-sm lg:tw-text-base tw-no-underline hover:tw-underline tw-font-medium"
          >
            {t("cta.viewMore")}
            <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
          </Link>
        }
      />
    </section>
  );
};

export default FAQs;
