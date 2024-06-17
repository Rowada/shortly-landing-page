// @ts-nocheck

import { useState, useEffect } from "react";
import useCleanURI from "../../hooks/useCleanURI";

export const CleanForm = () => {
  const [localLongUrl, setLocalLongUrl] = useState("");
  const [urlList, setUrlList] = useState([]);
  const { shortenedUrl, longUrl, loading, error, shortenUrl } = useCleanURI();

  useEffect(() => {
    if (shortenedUrl) {
      const newUrl = { longUrl: longUrl, shortUrl: shortenedUrl };
      const updatedUrlList = [...urlList, newUrl];
      setUrlList(updatedUrlList);
      sessionStorage.setItem("urlList", JSON.stringify(updatedUrlList));
    }
  }, [shortenedUrl, longUrl, urlList]);

  const handleShortenUrl = async (e) => {
    e.preventDefault();
    await shortenUrl(localLongUrl);

    setLocalLongUrl("");
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
      </div>

      <div
        className="my-3
      "
      >
        {error && <p className="rounded-md bg-secondary p-3">{error}</p>}

        {loading && (
          <p className="rounded-md bg-primary p-3 font-semibold text-white">
            Loading...
          </p>
        )}
      </div>
    </>
  );
};
