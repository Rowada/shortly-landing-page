import React from "react";

export const UrlCard = ({ longUrl, shortUrl }) => {
  return (
    <div className="mt-4 flex w-full flex-col items-center gap-2 rounded-md bg-white p-4 md:flex-row md:justify-between">
      {longUrl && (
        <p className="w-full border-b border-primary p-1 text-center md:w-auto md:border-none">
          {longUrl}
        </p>
      )}

      <div className="flex w-full flex-col items-center gap-2 md:w-auto md:flex-row md:justify-center md:gap-3">
        {shortUrl && <span className="text-primary">{shortUrl}</span>}

        <button className="w-full rounded-md bg-primary px-4 py-2 font-semibold text-white md:w-auto">
          Copy
        </button>
      </div>
    </div>
  );
};
