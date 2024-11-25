import Image from "next/image";
import { MainImage } from "./mainImage/mainImage";
import { MainLinksList, NormalTextP } from "@/components/reused/public";
import { YellowButton } from "@/components/reused/public";
import { YellowButtonType } from "@/components/reused/yellowButton/yellowButton";
import Link from "next/link";
export const MainFirstScreen = ({
  text,
  href,
  mt,
  anchorTargetId,
  readRules,
}: YellowButtonType) => {
  return (
    <section className={"relative text-center"}>
      <Link href={MainLinksList["home"]}>
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

      <NormalTextP
        text={
          "Открывайте карточки каждый день, заряжайтесь праздничным настроением\n" +
          "        и получайте сюрпризы под ёлочку"
        }
        mt={28}
        mxAuto
        maxW={288}
      />
      <YellowButton
        text={text}
        mt={mt ? mt : 16}
        href={href}
        anchorTargetId={anchorTargetId}
      />
      {readRules ? (
        <YellowButton
          text={"Читать правила"}
          mt={8}
          href={MainLinksList["home"]}
          color={"white"}
          bg={"#004F2C"}
        />
      ) : undefined}
    </section>
  );
};
