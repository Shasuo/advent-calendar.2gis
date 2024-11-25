import { taskCard } from "@/components/pages/tasks/content/taskCards/taskCards";

export const updateTaskStatus = (
  initialTasks: taskCard[],
  finishedTasks: number[],
) => {
  const now = new Date();
  const moscowTime = new Date(
    now.getTime() + now.getTimezoneOffset() * 60000 + 3 * 3600000,
  );

  return initialTasks.map((task): taskCard => {
    if (finishedTasks.includes(task.id)) {
      return { ...task, status: "completed" };
    }
    if (task.status === "completed") {
      return task;
    }
    if (
      task.activationDate === "active" ||
      new Date(task.activationDate) <= moscowTime
    ) {
      return { ...task, status: "available" };
    }
    return { ...task, status: "notAvailable" };
  });
};
