import Image from "next/image";
export const MainImage = () => {
  return (
    <>
      <Image
        src={"/images/illustrations/mainFirstImage/snowflake-1.png"}
        alt={"Снежинка"}
        width={32}
        height={29}
        className={"absolute top-[104px] left-[38px] z-10"}
      />
      <Image
        src={"/images/illustrations/mainFirstImage/snowflake-2.png"}
        alt={"Снежинка"}
        width={60}
        height={61}
        className={"absolute top-[126px] right-[25px] z-10"}
      />
      <Image
        src={"/images/illustrations/mainFirstImage/snowflake-3.png"}
        alt={"Снежинка"}
        width={26}
        height={26}
        className={"absolute top-[276px] right-0 z-10"}
      />
      <Image
        src={"/images/illustrations/mainFirstImage/snowflake-4.png"}
        alt={"Снежинка"}
        width={32}
        height={29}
        className={"absolute top-[313px] left-[38px] z-10"}
      />
      <img
        src={"/images/illustrations/mainFirstImage/tree.png"}
        alt={"Новогодняя ёлка"}
        className={"mt-4 mx-auto max-w-[288px] w-full h-auto"}
      />
      <Image
        src={"/images/illustrations/mainFirstImage/snow.png"}
        alt={"Снег"}
        width={272}
        height={41}
        className={"absolute top-[332px] left-4 z-10"}
      />
    </>
  );
};
