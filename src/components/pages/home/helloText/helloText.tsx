import Image from "next/image";
import styles from "./helloText.module.css";
export const HelloText = () => (
  <section className={"mt-[60px] max-w-contentWrapper w-full mx-auto relative"}>
    <p className={"text-base font-semibold leading-[20px]"}>
      До Нового года осталась всего пара недель, но добавить немного волшебства
      и радости можно уже сейчас
    </p>
    <p className={"mt-4 text-xs leading-4"}>
      Мы сделали адвент-календарь, который принесёт вам то самое новогоднее
      настроение и порадует приятными подарками.
    </p>
    <Image
      src={"/images/illustrations/homePage/snowflake-1.png"}
      alt={"Снежинка"}
      width={116}
      height={107}
      className={`absolute top-[119px] right-[-57px] ${styles.item}`}
    />
  </section>
);
