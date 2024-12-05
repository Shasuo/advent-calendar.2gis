import { PopupWrapper } from "@/components/reused/popupWrapper/popupWrapper";
import { YellowButton } from "@/components/reused/public";
import { useAtom } from "jotai/index";
import { PreRedirectPopup } from "@/globalState/preRedirectPopup";
import { ActivePopupName__secondLevel } from "@/globalState/popups_secondlevel";

export const TaskPromoCodeConditionsPopup = () => {
  const [popupState] = useAtom(PreRedirectPopup);
  const setPopupNameState = useAtom(ActivePopupName__secondLevel)[1];
  if (popupState.promo) {
    return (
      <PopupWrapper popupName={"conditions-promoCode-popup"} secondLevel>
        <p
          className={"text-sm text-white leading-5 font-normal"}
          dangerouslySetInnerHTML={{ __html: popupState.promo.conditions }}
        />
        <YellowButton
          text={"Хорошо"}
          mt={16}
          onClick={() => setPopupNameState(() => undefined)}
        />
      </PopupWrapper>
    );
  }
};
