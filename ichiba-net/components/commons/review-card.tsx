"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Star from "@/public/images/commons/icon-star.svg";
import Like from "@/public/images/commons/icon-like.svg";
import Verify from "@/public/images/commons/icon-verify-primary.svg";
import Translate from "@/public/images/commons/icon-translate.svg";
import { getContentfulImageUrl } from "@/contentful/common";

export interface ReviewItem {
  thumnail: { fields: { file: { url: string } } };
  star: number;
  avatarUser: { fields: { file: { url: string } } };
  country: { fields: { file: { url: string } } };
  userName: string;
  career: string;
  comment: string;
  originalComment: string;
}

interface ReviewCardProps {
  data: ReviewItem;
  className?: string
}

export default function ReviewCard({ data, className }: ReviewCardProps) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div
      className={clsx(
        "rounded-2xl overflow-hidden w-full max-w-[360px] lg:max-w-[384px]",
        "bg-white flex flex-col shadow-[0_8px_16px_0_rgba(0,_0,_0,_0.05)]",
        "transition-all hover:shadow-[0_10px_20px_rgba(0,0,0,0.08)] duration-300",
        "h-full", // ✅ giúp card full chiều cao trong grid
        className
      )}
    >
      <Image
        src={getContentfulImageUrl(data.thumnail?.fields?.file.url)}
        width={384}
        height={282}
        alt={data.userName}
        className="w-full object-cover mb-5 h-full max-h-[282px]"
        loading="lazy"
      />

      <div className="px-4 pb-4 flex flex-col gap-4">
        {/* --- Star & Like --- */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(data.star)].map((_, i) => (
              <Image key={i} src={Star} width={20} height={20} alt={`star-${i}`} loading="lazy" />
            ))}
          </div>
          <div className="flex items-center gap-1 py-[3px] px-[6px] rounded-3xl bg-green-500 text-white">
            <Image src={Like} width={16} height={16} alt="icon-like" loading="lazy" />
            <span className="text-xs font-medium">Satisfied</span>
          </div>
        </div>

        {/* --- User Info --- */}
        <div className="flex items-center gap-4">
          <div className="relative w-[56px] h-[56px]">
            <Image
              src={getContentfulImageUrl(data.avatarUser?.fields?.file.url)}
              width={56}
              height={56}
              alt={`${data.userName} avatar`}
              className="w-full h-full rounded-full"
              loading="lazy"
            />
            <Image
              src={getContentfulImageUrl(data.country?.fields?.file.url)}
              width={22}
              height={14}
              alt="country"
              className="absolute bottom-0 right-0 rounded-sm"
              loading="lazy"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-bold text-sm lg:text-base">{data.userName}</p>
              <div className="flex items-center gap-1">
                <Image src={Verify} width={18} height={18} alt="verify" loading="lazy" />
                <span className="text-xs text-ic-ink-5">Verified</span>
              </div>
            </div>
            <p className="text-xs lg:text-sm text-gray-600">{data.career}</p>
          </div>
        </div>

        {/* --- Review Content --- */}
        <p className="text-sm text-gray-700 leading-relaxed">
          “{showOriginal ? data.originalComment : data.comment}”
        </p>

        {/* --- Actions --- */}
        <div className="flex items-center gap-3 mt-2">
          <button
            className={clsx(
              "px-3 text-sm hover:underline",
              showOriginal ? "text-gray-400" : "text-gray-900"
            )}
            onClick={() => setShowOriginal(true)}
          >
            View original
          </button>
          <button
            className={clsx(
              "px-3 text-sm flex items-center gap-1 hover:underline",
              !showOriginal ? "text-gray-400" : "text-gray-900"
            )}
            onClick={() => setShowOriginal(false)}
          >
            <Image src={Translate} width={18} height={18} alt="translate" loading="lazy" />
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}
