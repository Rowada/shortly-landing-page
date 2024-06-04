import React from "react";

import { useState } from "react";
import useCleanURI from "../../hooks/useCleanURI";
import { UrlCard } from "./UrlCard";

export const CleanForm = () => {
  const [localLongUrl, setLocalLongUrl] = useState("");

  const { shortenedUrl, longUrl, loading, error, shortenUrl } = useCleanURI();

  const handleShortenUrl = async (e) => {
    e.preventDefault();
    await shortenUrl(localLongUrl);

    setLocalLongUrl("");
  };

  return (
    <>
      <div className=" flex h-32 w-full items-center justify-center rounded-md bg-background bg-[url('src/assets/images/bg-shorten-desktop.svg')] bg-cover bg-center bg-no-repeat text-center ">
        <form
          onSubmit={handleShortenUrl}
          className="m-auto flex size-full flex-col items-center justify-center gap-y-3 px-3 md:flex-row md:gap-x-3 md:px-10"
        >
          <input
            className="w-full rounded-md p-3 md:w-4/5"
            type="text"
            placeholder="Shorten a link here..."
            value={localLongUrl}
            onChange={(e) => setLocalLongUrl(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-md bg-primary p-3 font-semibold text-white md:w-1/5"
          >
            Shorten it!
          </button>
        </form>

        {error && <p>Erreur : {error}</p>}
      </div>

      <div>{loading && <p>Chargement en cours...</p>}</div>

      <div className="">
        <UrlCard longUrl={longUrl} shortUrl={shortenedUrl} />
      </div>
    </>
  );
};
