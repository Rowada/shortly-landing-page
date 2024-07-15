// @ts-nocheck
import { create } from "zustand";

export const useUrlStore = create((set) => ({
  urlList: JSON.parse(sessionStorage.getItem("urlList")) || [],
  addUrl: (newUrl) =>
    set((state) => {
      const updatedUrlList = [...state.urlList, newUrl];
      sessionStorage.setItem("urlList", JSON.stringify(updatedUrlList));
      return { urlList: updatedUrlList };
    }),
}));
