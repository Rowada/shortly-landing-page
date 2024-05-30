import React from "react";

export const UrlCard = ({ longUrl, shortUrl }) => {
  return (
    <div className="mt-3 flex items-center justify-between rounded-md bg-white p-2">
      <p>{longUrl}</p>

      <div className="flex items-center justify-center gap-3">
        <span>{shortUrl}</span>

        <button className="rounded-md bg-red-600 px-4 py-2 text-white">
          Copy
        </button>
      </div>
    </div>
  );
};
