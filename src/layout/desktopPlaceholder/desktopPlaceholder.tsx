import Image from "next/image";
import styles from "./desktopPlaceholder.module.css";

export const DesktopPlaceholder = () => {
  const imgSrc = "/images/illustrations/desktopPlaceholder";
  return (
    <section className={styles.desktopPlaceholder}>
      <a href="https://2gis.ru/">
        <Image
          src={`${imgSrc}/logo.png`}
          alt={"2GIS"}
          width={136}
          height={39}
        />
      </a>
      <h1 className={styles.title}>Маршрут в Новый год</h1>
      <p className={styles.text}>
        Открывайте карточки каждый день, заряжайтесь праздничным настроением
        и получайте сюрпризы под ёлочку
      </p>
      <Image
        src={`${imgSrc}/QR.png`}
        alt={"QR"}
        width={88}
        height={88}
        className={styles.QR}
      />
      <a href="https://2gis.onelink.me/nw2S/ldpeh4ys" className={styles.link}>
        Скачать 2ГИС
      </a>
      <img
        src={`${imgSrc}/event.webp`}
        alt="Евент"
        className={styles.bigImage}
      />
    </section>
  );
};
