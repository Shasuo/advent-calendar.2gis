import { MailAction } from "./mailAction/mailAction";
import { ToClose } from "./toClose/toClose";
import { TheEnd } from "./theEnd/theEnd";
import { useAtom } from "jotai";
import { FinalPageState } from "@/globalState/finalPageState";
export const Final = () => {
  const [finalPage, setFinalPage] = useAtom(FinalPageState);
  return (
    <main>
      <div className={"mb-10"}>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition pt-3 w-full"
          onClick={() => setFinalPage(0)}
        >
          Осталось 3 дня
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition pt-3 w-full mt-2"
          onClick={() => setFinalPage(1)}
        >
          Все задания сделаны
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition pt-3 w-full mt-2"
          onClick={() => setFinalPage(2)}
        >
          Финал
        </button>
      </div>
      {finalPage === 0 ? (
        <ToClose />
      ) : finalPage === 1 ? (
        <MailAction />
      ) : (
        <TheEnd />
      )}
    </main>
  );
};
