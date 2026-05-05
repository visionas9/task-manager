"use client";
import TaskCard from "@/app/components/TaskCard";
import { useState } from "react";

export default function TaskPage() {
  const [id, setId] = useState("");
  return (
    <main
      className="flex flex-col items-center
  bg-slate text-light"
    >
      <TaskCard />
    </main>
  );
}
