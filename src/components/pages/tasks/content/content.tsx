import { useEffect, useState } from "react";
import axios from "axios";
import { Indicator } from "./indicator/indicator";
import { TaskCards } from "./taskCards/taskCards";
import { BearerToken } from "@/globalState/token";
import { useAtom } from "jotai";

export const Content = () => {
  const [token, setToken] = useAtom(BearerToken);
  interface InitialPageState {
    state: "initial" | "success" | "error";
  }

  const [tasksState, setTasksState] = useState<InitialPageState>({
    state: "initial",
  });
  const [tasksMassive, setTasksMassive] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      setTasksState({ state: "initial" });
      if (token) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get("/api/tasks", config);

          if (response.status === 200) {
            if (response.data.message === "401") {
              setTasksState({ state: "error" });
              setToken(() => undefined);
            } else {
              setTasksMassive(response.data.result.finished_task_ids);
              setTasksState({ state: "success" });
              console.log(response.data.result.finished_task_ids);
            }
          } else {
            setToken(() => undefined);
            setTasksState({ state: "error" });
          }
        } catch (error) {
          console.error("Ошибка при запросе:", error);
          setToken(() => undefined);
          setTasksState({ state: "error" });
        }
      } else {
        setToken(() => undefined);
        setTasksState({ state: "error" });
      }
    };

    fetchTasks();
  }, [token]);

  if (tasksState.state === "initial") {
    return <div className="loader"></div>;
  }

  if (tasksState.state === "success" && token) {
    return (
      <section
        className={"bg-white w-full box-border p-4 rounded-[24px] mt-10 mb-20"}
        id={"tasks-id"}
      >
        <div className={"flex items-center justify-between text-[#1A1A1A]"}>
          <div>
            <h4 className={"font-semibold text-[10px] leading-[7px] mt-2"}>
              Прогресс выполнения
            </h4>
            <span className={"block mt-2 font-semibold text-base"}>
              Выполнено заданий {tasksMassive.length}/14
            </span>
          </div>
          <Indicator completeTasksCount={tasksMassive.length} />
        </div>
        <TaskCards finishedTasks={tasksMassive} token={token} />
      </section>
    );
  }
  return (
    <div className={"text-center font-semibold text-base mt-10"}>
      Ошибка авторизации!
    </div>
  );
};
