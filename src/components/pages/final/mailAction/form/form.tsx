import { YellowButton } from "@/components/reused/public";

export const Form = () => {
  return (
    <form className={"mt-4"}>
      <input
        type="email"
        className={
          "w-full box-border rounded-[16px] pt-[13px] pb-[11px] border-none outline-none bg-[#005731] text-white leading-6 font-normal text-base px-3 whitePlaceholder"
        }
        placeholder={"Введите почту"}
      />
      <YellowButton text={"Отправить"} mt={16} onClick={() => {}} />
    </form>
  );
};
