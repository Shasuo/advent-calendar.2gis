import Image from "next/image";
import { MainHeadline, NormalTextP } from "@/components/reused/public";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const WantAHolidayNow = () => {
  interface prizeCard {
    img: string;
    text: string;
    mt: number;
  }

  const prizesImagesLink = "/images/illustrations/homePage/prizes";

  const prizeCards: prizeCard[] = [
    {
      img: `${prizesImagesLink}/1.png`,
      text: "Смартфон Apple iPhone <br/>16 Pro 128 ГБ",
      mt: 22,
    },
    {
      img: `${prizesImagesLink}/2.png`,
      text: "Игровая приставка<br/> Sony PlayStation 5",
      mt: 14,
    },
    {
      img: `${prizesImagesLink}/3.png`,
      text: "Путешествие на двоих:<br/> сертификат на авиабилеты<br/> и промокод Отелло на 50 000 ₽",
      mt: 49,
    },
  ];

  return (
    <section className={"mt-[60px] text-center"}>
      <div className={"max-w-contentWrapper mx-auto"}>
        <MainHeadline text={"Выполните все задания"} />
        <NormalTextP
          text={
            "Получите награду «Новогодняя звезда» в 2ГИС и шанс выиграть суперподарок! Победителя выберем случайным образом и объявим 27 декабря на сайте."
          }
          mt={8}
        />
      </div>
      <div className={"mt-6 max-w-contentWrapper mx-auto h-[290px] "}>
        <div className={"absolute left-0 overflow-hidden w-full "}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={8}
            grabCursor={true}
            className={"w-fit"}
            style={{
              overflow: "unset",
              marginLeft: "calc(50vw - 144px)",
              marginRight: "10px",
            }}
          >
            {prizeCards.map((el: prizeCard, index: number) => (
              <SwiperSlide
                className={"relative"}
                style={{ width: "fit-content" }}
                key={index}
              >
                <Image
                  src={"/images/illustrations/homePage/allTasksCardBg_2.png"}
                  alt={"Карточка задания"}
                  width={259.2}
                  height={289.8}
                  className={"relative z-0"}
                />
                <Image
                  src={el.img}
                  alt={"Приз!"}
                  className={"w-fit block mx-auto absolute z-10 absoluteCenter"}
                  width={200}
                  height={200}
                  style={{
                    top: `${el.mt}px`,
                  }}
                />
                <div
                  className={
                    "font-normal text-sm leading-5 absolute bottom-[10px] absoluteCenter w-full"
                  }
                  dangerouslySetInnerHTML={{ __html: el.text }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
