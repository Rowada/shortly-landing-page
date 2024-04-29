// @ts-nocheck

import { useState } from "react";

const useCleanURI = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

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
        setShortenedUrl(data.shortenUrl);
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

  return { shortenedUrl, loading, error, shortenUrl };
};
export default useCleanURI;
