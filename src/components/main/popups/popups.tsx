import { NoAuthPopup } from "@/components/main/popups/noAuthPopup/noAuthPopup";
import { TaskDone } from "./taskDone/taskDone";
import { useAtom } from "jotai";
import { BearerToken } from "@/globalState/token";
import { ActivePopupName } from "@/globalState/popups";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const Popups = () => {
  const [token] = useAtom(BearerToken);
  const setPopupName = useAtom(ActivePopupName)[1];
  const pathname = usePathname();
  useEffect(() => {
    if (!token) {
      setPopupName("no-auth");
    }
  }, [pathname]);

  return (
    <>
      <NoAuthPopup />
      <TaskDone />
    </>
  );
};
