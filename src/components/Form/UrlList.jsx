// @ts-nocheck

import { UrlCard } from "./UrlCard";
import { useState, useEffect } from "react";
export const UrlList = () => {
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    const savedUrls = JSON.parse(sessionStorage.getItem("urlList"));
    if (savedUrls) {
      setUrlList(savedUrls);
    }
  }, []);

  return (
    <div>
      {urlList.map((url, index) => (
        <UrlCard key={index} longUrl={url.longUrl} shortUrl={url.shortUrl} />
      ))}
    </div>
  );
};
