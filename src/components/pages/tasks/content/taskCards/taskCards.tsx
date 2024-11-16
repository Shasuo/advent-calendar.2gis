import { Card } from "./card/card";
import { useEffect, useState } from "react";
import { InitialTasks } from "./cards";
import { updateTaskStatus } from "@/scripts/public";

export interface taskCard {
  id: number;
  type: "full" | "short";
  status: "available" | "completed" | "notAvailable";
  title: string;
  image: string;
  activationDate: string;
  target_task_href: string;
  demonstration?: boolean;
}

export const TaskCards = ({
  finishedTasks,
  token,
}: {
  finishedTasks: number[];
  token: string;
}) => {
  const initialTasks: taskCard[] = InitialTasks;

  const [tasks, setTasks] = useState<taskCard[]>([]);

  useEffect(() => {
    const setTasksState = () =>
      setTasks(updateTaskStatus(initialTasks, finishedTasks));

    setTasksState();
    const interval = setInterval(setTasksState, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={"mt-4 grid gap-2 w-full"}
      style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
    >
      {tasks.map((data: taskCard) => (
        <Card key={data.id} data={data} token={token} />
      ))}
    </section>
  );
};
