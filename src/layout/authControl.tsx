import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { BearerToken } from "@/globalState/token";
import Cookies from "js-cookie";
import { TasksMassive } from "@/globalState/tasksMassive";
import { InitialGetStatus } from "@/globalState/initialGetStatus";
export const AuthControl = () => {
  const setToken = useAtom(BearerToken)[1];
  const setTaskMassive = useAtom(TasksMassive)[1];
  const setInitialGetStatus = useAtom(InitialGetStatus)[1];

  useEffect(() => {
    Cookies.set(
      "auth_access_token",
      "56a70cfbc86604fbbf9ca0cca7259a6d51d08aa3",
      { expires: 7 },
    );
    const token = Cookies.get("auth_access_token");
    if (token) {
      const fetchTasks = async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          // Прямой запрос к внешнему API
          const response = await axios.get(
            "https://newyear-advent2025-be.api.2gis.ru/v1/tasks",
            config,
          );

          if (response.status === 200) {
            if (response.data.message === "401") {
              console.log("401");
              setInitialGetStatus(false);
            } else {
              setToken(token);
              setTaskMassive(response.data.result.finished_task_ids);
              setInitialGetStatus(true);
              console.log(response.data.result.finished_task_ids);
            }
          } else {
            console.log("error");
            setInitialGetStatus(false);
          }
        } catch (error) {
          // Обработка ошибок
          if (axios.isAxiosError(error)) {
            setInitialGetStatus(false);
            console.error(
              "Axios error:",
              error.response?.data || error.message,
            );
          } else {
            setInitialGetStatus(false);
            console.error("Unexpected error:", error);
          }
        }
      };

      fetchTasks();
    } else {
      setInitialGetStatus(false);
    }
    console.log(token);
  }, []);

  return undefined;
};
