import {
  MainHeadline,
  NormalTextP,
  SocialGarland,
} from "@/components/reused/public";
import Image from "next/image";
import { Form } from "./form/form";

export const MailAction = () => {
  return (
    <section className={"text-center"}>
      <div className={"max-w-contentWrapper mx-auto"}>
        <MainHeadline text={"Вы самая яркая снежинка на ёлке!"} />
        <Image
          src={"/images/illustrations/final/mailAction.png"}
          alt={"Вы выполнили все задания!"}
          width={288}
          height={197}
          className={"w-full h-auto mt-4"}
        />
        <NormalTextP
          text={
            "Выполнили все задания и стали участником розыгрыша! Результаты — 27 декабря. Укажите вашу почту — мы напишем, если вы победите!"
          }
          mt={16}
        />
        <Form />
      </div>
      <SocialGarland mt={60} />
    </section>
  );
};
