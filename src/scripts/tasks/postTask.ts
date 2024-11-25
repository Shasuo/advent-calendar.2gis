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
) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      "/api/post_task",
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
