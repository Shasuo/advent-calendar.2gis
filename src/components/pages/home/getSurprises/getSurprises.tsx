import Image from "next/image";

export const GetSurprises = () => (
  <section className={"mt-[60px] text-center max-w-contentWrapper mx-auto"}>
    <h3 className={"text-[22px] font-semibold leading-[28px]"}>
      Получайте сюрпризы
    </h3>
    <Image
      src={"/images/illustrations/homePage/surprise.png"}
      alt={"Сюрпризы"}
      width={288}
      height={211}
      className={"w-full h-auto"}
    />
    <p className={"mt-4 text-sm font-normal leading-[22px]"}>
      В некоторых карточках мы спрятали сюрпризы — полезные промокоды, которые
      точно пригодятся на новогодних каникулах. Найдите их все!
    </p>
  </section>
);
