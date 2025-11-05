"use client";
import { useEffect, useState } from "react";
import Breadcrumb, { BreadcrumbItem } from "@/components/commons/bread-crumb";
import Link from "next/link";
import BoxReviews from "./box-reviews";
import NoSubscription from "./no-subscription";
import { listReviews } from "@/contentful/reviews";
import { ReviewEntry } from "@/contentful/reviews/types";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Review", href: "/reviews" },
];

// js server 1 chạy 1 lần
// js client trả về mới chạy

export default function ReviewsComponent({
  lang,
  locale,
}: {
  lang: string;
  locale: string;
}) {
  const [reviews, setReviews] = useState<ReviewEntry[]>([]);

  useEffect(() => {
    (async () => {
      try {
        console.log(listReviews, 'listReviews');
        
        const response = await listReviews({ language: "en" });
        setReviews(response.items);
      } catch (err) {
        console.error("Error loading reviews:", err);
      }
    })();
  }, []);

  return (
    <div>
      <div className="container p-4">
        <Breadcrumb
          items={breadcrumbItems}
          separator="›"
          renderItem={(item, defaultEl) =>
            item.href ? (
              <Link
                href={item.href}
                aria-label={item.ariaLabel ?? item.label}
                className="text-gray-600 hover:text-primary transition-colors duration-150"
              >
                {item.label}
              </Link>
            ) : (
              defaultEl
            )
          }
        />
      </div>
      <BoxReviews lang={lang} locale={locale} data={reviews}/>
      <NoSubscription lang={lang} />
    </div>
  );
}
