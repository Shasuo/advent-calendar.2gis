import { NoAuthPopup } from "@/components/main/popups/noAuthPopup/noAuthPopup";
import { TaskDone } from "./taskDone/taskDone";
import { PreTaskPopup } from "./preTaskPopup/preTaskPopup";
import { WillComebackWhenDone } from "./willComebackWhenDone/willComebackWhenDone";
import { TaskPromoCodeConditionsPopup } from "./taskPromoCodeConditionsPopup/taskPromoCodeConditionsPopup";
import { ErrorPopup } from "./errorPopup/errorPopup";
import { ThreeDaysLeft } from "./threeDaysLeft/threeDaysLeft";

export const Popups = () => {
  return (
    <>
      <NoAuthPopup />
      <TaskDone />
      <PreTaskPopup />
      <WillComebackWhenDone />
      <TaskPromoCodeConditionsPopup />
      <ThreeDaysLeft />
      <ErrorPopup />
    </>
  );
};
