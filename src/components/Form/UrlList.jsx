// @ts-nocheck

import { UrlCard } from "./UrlCard";
// import { useState, useEffect } from "react";
import { useUrlStore } from "../../stores/useUrlStore";

export const UrlList = () => {
  // const [urlList, setUrlList] = useState([]);

  // useEffect(() => {
  //   const savedUrls = JSON.parse(sessionStorage.getItem("urlList"));
  //   if (savedUrls) {
  //     setUrlList(savedUrls);
  //   }
  // }, []);

  const urlList = useUrlStore((state) => state.urlList);
  return (
    <div>
      {urlList.map((url, index) => (
        <UrlCard key={index} longUrl={url.longUrl} shortUrl={url.shortUrl} />
      ))}
    </div>
  );
};
