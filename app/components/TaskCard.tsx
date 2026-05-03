"use client";
import { useState } from "react";

export default function TaskCard() {
  const [id, setId] = useState("");
  const [duties, setDuties] = useState<string[]>([]);
  const [dutyInput, setDutyInput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [notes, setNotes] = useState("");

  const handleAddDuty = () => {
    if (!dutyInput.trim()) return;
    setDuties([...duties, dutyInput.trim()]);
    setDutyInput("");
  };

  console.log(duties);

  return (
    <main>
      <div className="flex flex-col items-center">
        <label>What's needs to be done?</label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Presentation e.g."
            className="w-[300px] py-2 shadow-sm"
            value={dutyInput}
            onChange={(e) => setDutyInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddDuty()}
          />

          <button
            className="bg-emerald px-4 py-2 rounded-xl hover:cursor-pointer shrink-0"
            onClick={handleAddDuty}
          >
            +Add
          </button>
        </div>
      </div>
    </main>
  );
}
