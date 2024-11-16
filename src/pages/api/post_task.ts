import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { task_id } = req.body;
  if (!task_id) {
    return res.status(400).json({ message: "task_id is required" });
  }

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: req.headers.authorization,
    },
  };

  axios
    .post(
      "https://newyear-advent2025-be.api.2gis.ru/v1/tasks",
      { task_id },
      config,
    )
    .catch((error) => {
      console.error("Ошибка при отправке POST-запроса:", error);
    });
}
