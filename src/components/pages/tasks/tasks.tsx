import { MainFirstScreen } from "@/components/main/public";
import { Content } from "./content/content";
import { PreTaskPopup } from "@/components/main/popups/preTaskPopup/preTaskPopup";
import { WillComebackWhenDone } from "@/components/main/popups/willComebackWhenDone/willComebackWhenDone";
import { TaskPromoCodeConditionsPopup } from "@/components/main/popups/taskPromoCodeConditionsPopup/taskPromoCodeConditionsPopup";

export const Tasks = () => {
  return (
    <main>
      <>
        <PreTaskPopup />
        <WillComebackWhenDone />
        <TaskPromoCodeConditionsPopup />
      </>
      <MainFirstScreen
        text={"К заданиям"}
        anchorTargetId={"tasks-id"}
        readRules
      />
      <Content />
    </main>
  );
};
