import { PopupWrapper } from "@/components/reused/popupWrapper/popupWrapper";
import Image from "next/image";
import { YellowButton } from "@/components/reused/public";

export const NoAuthPopup = () => {
  return (
    <PopupWrapper popupName={"no-auth"}>
      <h3 className={"font-semibold text-center text-[22px] leading-[28px]"}>
        Совсем чуть-чуть и начнём
      </h3>
      <Image
        src={"/images/illustrations/popups/no-auth.png"}
        alt={"Авторизуйтесь в 2ГИС"}
        width={288}
        height={203}
        className={"w-full h-auto mt-4"}
      />
      <p className={"pt-4 font-normal text-sm text-center leading-[22px]"}>
        Авторизуйтесь в 2ГИС любым способом и возвращайтесь сюда, чтобы
        новогодняя сказка началась.
      </p>
      <YellowButton
        text={"Авторизоваться"}
        mt={16}
        href={"dgis://2gis.ru/mapfriends/contest"}
      />
    </PopupWrapper>
  );
};
