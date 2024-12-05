import { useState } from "react";
import { YellowButton } from "@/components/reused/public";
import { useAtom } from "jotai";
import { BearerToken } from "@/globalState/token";
import axios from "axios";
import { ActivePopupName } from "@/globalState/popups";
import { MailUserStatus } from "@/globalState/mailUserStatus";

export const Form = () => {
  const token = useAtom(BearerToken)[0];
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [mailStatus, setMailStatus] = useAtom(MailUserStatus);
  const setPopupName = useAtom(ActivePopupName)[1];

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const sendMail = async () => {
    try {
      const response = await axios.post(
        "https://newyear-advent2025-be.api.2gis.ru/v1/feedback",
        {
          email: email,
        },
        config,
      );
      if (response.status === 200) {
        const message = response.data.meta?.message || response.data.message;

        if (message === "401") {
          console.log("Ошибка Bearer Token");
          setPopupName("error-popup");
        } else {
          console.log("Успешно!");
          setMailStatus(true);
        }
      } else {
        console.log("Ошибка post запроса. Статус:", response.status);
        setPopupName("error-popup");
      }
    } catch (error) {
      console.log("Ошибка отправки почты:" + error);
      setPopupName("error-popup");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  if (!mailStatus) {
    return (
      <form className="mt-4">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`
          outline-none w-full box-border rounded-[16px] pt-[13px] pb-[11px] 
          bg-[#005731] text-white leading-6 font-normal text-base px-3 
          whitePlaceholder focus:outline-2 ${
            !isValid && email
              ? "focus:outline-[#FF4548]"
              : "focus:outline-[#1AA86A]"
          }
        `}
          placeholder="Введите почту"
          style={{ outlineOffset: "-1px" }}
        />
        {!isValid && email ? (
          <span className="block text-xs leading-4 font-normal text-[#FF4548] ml-3 mt-1 text-left">
            Неверный формат почты
          </span>
        ) : undefined}
        <YellowButton
          text="Отправить"
          mt={16}
          inactive={!(isValid && email)}
          onClick={() => {
            if (isValid && email) {
              sendMail();
            } else {
              setIsValid(false);
            }
          }}
        />
        <p className={"text-xs leading-4 font-normal opacity-70 mt-4"}>
          Условия и обработка персональных данных определены{" "}
          <span className={"underline"}>Политикой конфиденциальности</span>
        </p>
      </form>
    );
  } else {
    return (
      <YellowButton text="Вернуться в календарь" mt={16} href={"/tasks"} />
    );
  }
};
