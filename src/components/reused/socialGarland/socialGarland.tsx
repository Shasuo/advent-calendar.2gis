import Image from "next/image";
import { NormalTextP } from "@/components/reused/normalTextP/normalTextP";

export const SocialGarland = ({ mt }: { mt?: number }) => (
  <section
    className={"bg-[#013C22] box-border px-4 py-8 rounded-[24px]"}
    style={{ marginTop: mt ? `${mt}px` : undefined }}
  >
    <div className={"relative text-center"}>
      <Image
        src={"/images/illustrations/final/garland.png"}
        alt={"Подпишитесь на телеграм-канал"}
        width={288}
        height={150}
        className={"max-w-fit h-auto"}
      />
      <NormalTextP
        text={
          "Подпишитесь на <a href='https://t.me/twogis' style='text-decoration: underline'>телеграм-канал</a> 2ГИС, там мы напомним о розыгрыше и расскажем о результатах."
        }
        mt={16}
      />
    </div>
  </section>
);
