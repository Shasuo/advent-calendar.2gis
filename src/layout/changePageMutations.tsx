import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { PageChangeCounter } from "@/globalState/pageChangeCounter";

export const ChangePageMutations = () => {
  const router = useRouter();
  const setRoutCount = useAtom(PageChangeCounter)[1];

  useEffect(() => {
    const handleRouteChange = () => {
      setRoutCount((prevCount) => {
        const newRouteCount = prevCount + 1;
        console.log(newRouteCount);
        return newRouteCount;
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};
