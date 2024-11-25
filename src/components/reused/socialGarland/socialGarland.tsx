import Image from "next/image";
import { NormalTextP } from "@/components/reused/normalTextP/normalTextP";

export const SocialGarland = ({ mt }: { mt?: number }) => (
  <section
    className={"bg-[#013C22] box-border px-4 py-8 rounded-[24px]"}
    style={{ marginTop: mt ? `${mt}px` : undefined }}
  >
    <div className={"relative text-center"}>
      <Image
        src={"/images/illustrations/final/garland__snowflake-1.png"}
        alt={"Подпишитесь на телеграм-канал"}
        width={59}
        height={61}
        className={"absolute top-0 -left-[9px]"}
      />
      <Image
        src={"/images/illustrations/final/garland__snowflake-2.png"}
        alt={"Подпишитесь на телеграм-канал"}
        width={116}
        height={107}
        className={"absolute -top-5 -right-[11px]"}
      />
      <Image
        src={"/images/illustrations/final/garland.png"}
        alt={"Подпишитесь на телеграм-канал"}
        width={271.15}
        height={161.74}
        className={"max-w-fit h-auto"}
      />
      <NormalTextP
        text={
          "Подпишитесь на телеграм-канал 2ГИС, там мы напомним о розыгрыше и расскажем о результатах."
        }
        mt={16}
      />
    </div>
  </section>
);
