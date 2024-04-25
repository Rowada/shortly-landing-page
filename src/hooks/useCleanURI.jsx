// @ts-nocheck
import { useState } from "react";

const useCleanURI = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const shortenUrl = async (longUrl) => {
    setLoading(true);

    try {
      const apiUrl = "https://cleanuri.com/api/v1/shorten";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `url=${encodeURIComponent(longUrl)}`,
      });

      const data = await response.json();

      if (response.ok) {
        setShortenedUrl(data.result_url);
      } else {
        setError(data.error);
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
