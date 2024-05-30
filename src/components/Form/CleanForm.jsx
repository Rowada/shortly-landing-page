import React from "react";

import { useState, useEffect } from "react";
import useCleanURI from "../../hooks/useCleanURI";
import { UrlCard } from "./UrlCard";
import {
  saveToSessionStorage,
  getFromSessionStorage,
} from "../../utils/sessionStorage";

export const CleanForm = () => {
  const [longUrl, setLongUrl] = useState("");
  const [storedData, setStoredData] = useState({
    longUrl: "",
    shortenedUrl: "",
  });
  const { shortenedUrl, loading, error, shortenUrl } = useCleanURI();

  useEffect(() => {
    const data = getFromSessionStorage("shortenedUrl");
    if (data) {
      setStoredData(data);
    }
  }, []);

  const handleShortenUrl = async (e) => {
    e.preventDefault();

    await shortenUrl(longUrl);

    if (shortenedUrl) {
      saveToSessionStorage("shortenedUrl", { longUrl, shortenedUrl });
      setStoredData({ longUrl, shortenedUrl });
    }

    setLongUrl("");
  };

  return (
    <>
      <div className="flex h-32 w-full items-center justify-center rounded-md bg-background bg-[url('src/assets/images/bg-shorten-desktop.svg')] bg-cover bg-center bg-no-repeat text-center ">
        <form
          onSubmit={handleShortenUrl}
          className="m-auto flex size-full flex-col items-center justify-center gap-y-3 px-3 md:flex-row md:gap-x-3 md:px-10"
        >
          <input
            className="w-full rounded-md p-3 md:w-4/5"
            type="text"
            placeholder="Shorten a link here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-md bg-primary p-3 font-semibold text-white md:w-1/5"
          >
            Shorten it!
          </button>
        </form>
      </div>

      {/* <div>
        {loading && <p>Chargement en cours...</p>}
        {error && <p>Erreur : {error}</p>}
        {shortenedUrl && (
          <p>{longUrl ? `${longUrl} : ${shortenedUrl}` : shortenedUrl}</p>
        )}
      </div> */}
      <div>
        {loading && <p>Chargement en cours...</p>}
        {error && <p>Erreur : {error}</p>}
      </div>

      {storedData.shortenedUrl && (
        <UrlCard
          longUrl={storedData.longUrl}
          shortUrl={storedData.shortenedUrl}
        />
      )}

      {/* 
      
      @Tester avec la valeur --destination-- pour avoir le longUrl 
      

      @Création du composant UrlCard a chaque submit du formulaire.
      
      
      */}
      <UrlCard longUrl={longUrl} shortUrl={shortenedUrl} />
    </>
  );
};
