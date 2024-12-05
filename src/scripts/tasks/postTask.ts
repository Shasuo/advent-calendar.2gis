import axios from "axios";
export const PostTask = async (
  href: string,
  taskID: number,
  token: string,
  setPopupName: (
    name:
      | string
      | undefined
      | ((prev: string | undefined) => string | undefined),
  ) => void,
  setTaskMassive: React.Dispatch<React.SetStateAction<number[]>>,
  taskMassive: number[],
) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      "https://newyear-advent2025-be.api.2gis.ru/v1/tasks",
      { task_id: taskID },
      config,
    );

    if (response.status === 200) {
      const message = response.data.meta?.message || response.data.message;

      if (message === "401") {
        console.log("Ошибка Bearer Token");
        setPopupName("error-popup");
      } else {
        console.log("Редирект на:", href);
        setTaskMassive([...taskMassive, taskID]);
        console.log([...taskMassive, taskID]);
        window.location.href = href;
      }
    } else {
      console.log("Ошибка post запроса. Статус:", response.status);
      setPopupName("error-popup");
    }
  } catch (error) {
    console.error("Ошибка в клиентском запросе:", error);
    setPopupName("error-popup");
  }
};
