import { MainFirstScreen } from "@/components/main/public";
import { Content } from "./content/content";
import { BearerToken } from "@/globalState/token";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { ActivePopupName } from "@/globalState/popups";
export const Tasks = () => {
  const [token, setToken] = useAtom(BearerToken);
  const [inputValue, setInputValue] = useState<string>("");

  const setPopupName = useAtom(ActivePopupName)[1];
  useEffect(() => {
    if (!token) {
      setPopupName("no-auth");
    }
  }, [token]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setToken(inputValue);
    setInputValue("");
  };

  return (
    <main>
      <div className="mb-4">
        <h2 className="font-semibold text-base">Текущий токен:</h2>
        <div className={"text-xs"}>{token ? token : "Не задан"}</div>
      </div>
      <div className={"mb-10"}>
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border p-2 rounded-md w-full max-w-xs text-black pt-3"
            placeholder="Введите новый токен"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition pt-3 w-full"
        >
          Обновить токен
        </button>
      </div>

      <MainFirstScreen
        text={"К заданиям"}
        anchorTargetId={"tasks-id"}
        readRules
      />
      <Content />
    </main>
  );
};
