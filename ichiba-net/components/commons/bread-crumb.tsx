"use client";
import React from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  ariaLabel?: string;
  id?: string | number;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  navAriaLabel?: string;
  renderItem?: (item: BreadcrumbItem, defaultElement: React.ReactNode) => React.ReactNode;
};

export default function Breadcrumb({
  items,
  separator = "/",
  className = "",
  navAriaLabel = "Breadcrumb",
  renderItem,
}: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label={navAriaLabel} className={`w-full ${className}`}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const key = item.id ?? `${index}-${item.label}`;

          const defaultElement = item.href && !isLast ? (
            <a
              href={item.href}
              aria-label={item.ariaLabel}
              className="text-gray-600 hover:text-primary-7 transition-colors duration-150"
            >
              {item.label}
            </a>
          ) : (
            <span
              aria-current={isLast ? "page" : undefined}
              aria-label={item.ariaLabel}
              className={isLast ? "text-gray-900 font-medium" : ""}
            >
              {item.label}
            </span>
          );

          const rendered = renderItem ? renderItem(item, defaultElement) : defaultElement;

          return (
            <li key={key} className="flex items-center">
              {rendered}
              {!isLast && (
                <span aria-hidden="true" className="mx-2 text-gray-400 select-none">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
