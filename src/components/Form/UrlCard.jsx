import React from "react";
import { useState } from "react";

export const UrlCard = ({ longUrl, shortUrl }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="mt-4 flex w-full flex-col items-center gap-2 rounded-md bg-white p-4 md:flex-row md:justify-between">
      {longUrl && (
        <p className="w-full border-b border-primary p-1 md:w-auto md:border-none">
          {longUrl}
        </p>
      )}

      <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center md:justify-center md:gap-3">
        {shortUrl && <span className="text-primary">{shortUrl}</span>}

        <button
          onClick={copyToClipboard}
          className={`w-full rounded-md px-4 py-2 font-semibold text-white transition duration-300 md:w-auto ${
            copied ? "bg-background" : "bg-primary"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};
