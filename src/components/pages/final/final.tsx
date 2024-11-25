import { MailAction } from "./mailAction/mailAction";
import { ToClose } from "./toClose/toClose";
import { TheEnd } from "./theEnd/theEnd";
import { useState } from "react";
export const Final = () => {
  const [showState, setShowState] = useState(2);
  return (
    <main>
      <div className={"mb-10"}>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition pt-3 w-full"
          onClick={() => setShowState(0)}
        >
          Осталось 3 дня
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition pt-3 w-full mt-2"
          onClick={() => setShowState(1)}
        >
          Все задания сделаны
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition pt-3 w-full mt-2"
          onClick={() => setShowState(2)}
        >
          Финал
        </button>
      </div>
      {showState === 0 ? (
        <ToClose />
      ) : showState === 1 ? (
        <MailAction />
      ) : (
        <TheEnd />
      )}
    </main>
  );
};
