import React from "react";

export const UrlCard = ({ longUrl, shortUrl }) => {
  return (
    <div className=" mt-4 flex items-center justify-between rounded-md bg-white p-4">
      {longUrl && <p>{longUrl}</p>}

      <div className="flex items-center justify-center gap-3">
        {shortUrl && <span className="text-primary">{shortUrl}</span>}

        <button className="w-full rounded-md bg-primary px-4 py-2 font-semibold text-white">
          Copy
        </button>
      </div>
    </div>
  );
};
