import { NoAuthPopup } from "@/components/main/popups/noAuthPopup/noAuthPopup";
import { TaskDone } from "./taskDone/taskDone";
import { ErrorPopup } from "./errorPopup/errorPopup";
import { ThreeDaysLeft } from "./threeDaysLeft/threeDaysLeft";

export const Popups = () => {
  return (
    <>
      <NoAuthPopup />
      <TaskDone />
      <ThreeDaysLeft />
      <ErrorPopup />
    </>
  );
};
