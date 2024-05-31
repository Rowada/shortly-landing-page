// @ts-nocheck

import { useState, useEffect } from "react";

const useCleanURI = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const savedShortenedUrl = sessionStorage.getItem("shortenedUrl");
    const savedLongUrl = sessionStorage.getItem("longUrl");
    if (savedShortenedUrl && savedLongUrl) {
      setShortenedUrl(savedShortenedUrl);
      setLongUrl(savedLongUrl);
    }
  }, []);

  const shortenUrl = async (longUrl) => {
    setLoading(true);

    try {
      const apiUrl = "https://api.rebrandly.com/v1/links";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apiKey,
        },
        body: JSON.stringify({ destination: longUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortenedUrl(data.shortUrl);
        setLongUrl(longUrl); // Mettre à jour longUrl avec la valeur actuelle

        sessionStorage.setItem("shortenedUrl", data.shortUrl);
        sessionStorage.setItem("longUrl", longUrl);
      } else {
        setError(
          data.message ||
            "Une erreur s'est produite lors du raccourcissement de l'URL."
        );
      }
    } catch (error) {
      setError("Une erreur s'est produite lors de la requete.");
    } finally {
      setLoading(false);
    }
  };

  return { shortenedUrl, longUrl, loading, error, shortenUrl };
};
export default useCleanURI;
