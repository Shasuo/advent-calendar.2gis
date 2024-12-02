import Image from "next/image";
export const MainImage = () => {
  return (
    <Image
      src={"/images/illustrations/mainFirstImage/main.png"}
      alt={"Адвент-календарь 2ГИС"}
      width={288}
      height={224}
      className={"max-w-[288px] w-full h-auto mt-4"}
    />
  );
};
