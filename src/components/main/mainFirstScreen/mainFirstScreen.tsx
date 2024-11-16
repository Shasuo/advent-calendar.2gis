import Image from "next/image";
import { MainImage } from "./mainImage/mainImage";

import { YellowButton } from "@/components/reused/public";
import { YellowButtonType } from "@/components/reused/yellowButton/yellowButton";
import Link from "next/link";
export const MainFirstScreen = ({
  text,
  href,
  mt,
  anchorTargetId,
}: YellowButtonType) => {
  return (
    <section className={"relative text-center"}>
      <Link href={"/"}>
        <Image
          src={"/images/icons/logo.svg"}
          alt={"2ГИС"}
          width={136}
          height={39}
          className={"block mx-auto"}
        />
      </Link>

      <h1 className={"text-[35px] font-bold mt-6 leading-[100%]"}>
        Новый год
        <br /> на карте
      </h1>
      <MainImage />
      <div className={"mt-7 max-w-[288px] font-normal text-xs mx-auto"}>
        Открывайте карточки каждый день, заряжайтесь праздничным настроением
        и получайте сюрпризы под ёлочку
      </div>
      <YellowButton
        text={text}
        mt={mt ? mt : 16}
        href={href}
        anchorTargetId={anchorTargetId}
      />
    </section>
  );
};
