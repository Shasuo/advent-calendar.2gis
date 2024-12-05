import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { BearerToken } from "@/globalState/token";
import Cookies from "js-cookie";
import { TasksMassive } from "@/globalState/tasksMassive";
import { InitialGetStatus } from "@/globalState/initialGetStatus";
import { PageChangeCounter } from "@/globalState/pageChangeCounter";
import { useRouter } from "next/router";
import { ActivePopupName } from "@/globalState/popups";
import { MailUserStatus } from "@/globalState/mailUserStatus";
import { FinalPageState } from "@/globalState/finalPageState";
export const AuthControl = () => {
  const setToken = useAtom(BearerToken)[1];
  const setTaskMassive = useAtom(TasksMassive)[1];
  const setInitialGetStatus = useAtom(InitialGetStatus)[1];
  const setPopupName = useAtom(ActivePopupName)[1];
  const setMailStatus = useAtom(MailUserStatus)[1];
  const routCount = useAtom(PageChangeCounter)[0];
  const setFinalPageState = useAtom(FinalPageState)[1];

  const router = useRouter();

  const now = new Date();
  const moscowTime = new Date(
    now.getTime() + now.getTimezoneOffset() * 60000 + 3 * 3600000,
  );

  useEffect(() => {
    if (window.innerWidth <= 600) {
      /*Cookies.set(
        "auth_access_token",
        "4e2e698ab26ffda4a0077f22d14930ff75eb357d",
        { expires: 7 },
      ); */

      const token = Cookies.get("auth_access_token");
      if (token) {
        const fetchTasks = async () => {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          try {
            const response = await axios.get(
              "https://newyear-advent2025-be.api.2gis.ru/v1/tasks",
              config,
            );

            if (response.status === 200) {
              if (response.data.message === "401") {
                console.log("401");
                setInitialGetStatus(false);
              } else {
                const taskMassive = response.data.result.finished_task_ids;
                const locationHref = window.location.href;
                setToken(token);
                setTaskMassive(taskMassive);
                setInitialGetStatus(true);
                console.log(taskMassive);
                console.log(window.location.href);
                if (new Date("2024-12-27T00:00:00+03:00") <= moscowTime) {
                  setFinalPageState(2);
                  if (!locationHref.includes("final")) {
                    await router.push("/final");
                  }
                } else {
                  if (
                    moscowTime < new Date("2024-12-27T00:00:00+03:00") &&
                    taskMassive.length < 14 &&
                    moscowTime > new Date("2024-12-24T00:00:00+03:00")
                  ) {
                    setFinalPageState(0);
                    if (!locationHref.includes("final")) {
                      await router.push("/final");
                    }
                  } else {
                    if (
                      taskMassive &&
                      taskMassive.length > 0 &&
                      routCount < 1
                    ) {
                      if (
                        taskMassive.length > 0 &&
                        taskMassive.length < 14 &&
                        !locationHref.includes("tasks") &&
                        !locationHref.includes("final")
                      ) {
                        await router.push("/tasks");
                      }

                      if (taskMassive.length >= 14) {
                        try {
                          const response = await axios.get(
                            "https://newyear-advent2025-be.api.2gis.ru/v1/feedback",
                            config,
                          );
                          if (response.data.message === "401") {
                            console.log("401 ошибка");
                            setPopupName("error");
                          } else {
                            console.log(response.data);
                            if (response.data.result.email) {
                              console.log("+");
                              setMailStatus(true);
                              setFinalPageState(1);
                              if (
                                !locationHref.includes("tasks") &&
                                !locationHref.includes("final")
                              ) {
                                await router.push("/tasks");
                              }
                            } else {
                              setMailStatus(false);
                              setFinalPageState(1);
                              if (!locationHref.includes("final")) {
                                await router.push("/final");
                              }
                            }
                          }
                        } catch (error) {
                          console.error("Ошибка при запросе:", error);
                          setPopupName("error" + error);
                        }
                      }
                    }
                  }
                }
              }
            } else {
              console.log("error");
              setInitialGetStatus(false);
            }
          } catch (error) {
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
    }
  }, []);

  return undefined;
};
