import React from "react";
import { Highlight } from "react-instantsearch";

function Hit({ hit }: { hit: any }) {
  return (
    <div className="tw-w-full">
      <div className="tw-text-xl tw-font-bold hover:tw-underline">
        <a
          href={hit.link}
          target="_blank"
          rel="noreferrer nofollow"
          className="tw-no-underline tw-text-black"
        >
          <Highlight attribute="title" hit={hit} />
        </a>
      </div>
      <div className="tw-text-sm tw-line-clamp-2">{hit.description}</div>
    </div>
  );
}
