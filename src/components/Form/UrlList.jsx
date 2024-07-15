// @ts-nocheck

import { UrlCard } from "./UrlCard";
import { useUrlStore } from "../../stores/useUrlStore";

export const UrlList = () => {
  const urlList = useUrlStore((state) => state.urlList);
  return (
    <div>
      {urlList.map((url, index) => (
        <UrlCard key={index} longUrl={url.longUrl} shortUrl={url.shortUrl} />
      ))}
    </div>
  );
};
