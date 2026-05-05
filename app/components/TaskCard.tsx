"use client";
import { useState } from "react";

type Duty = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export default function TaskCard() {
  const [duties, setDuties] = useState<Duty[]>([]);
  const [dutyInput, setDutyInput] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [noteInput, setNoteInput] = useState("");

  const handleAddDuty = () => {
    if (!dutyInput.trim()) return;
    setDuties([
      ...duties,
      {
        id: crypto.randomUUID(),
        text: dutyInput.trim(),
        isCompleted: false,
      },
    ]);
    setDutyInput("");
  };

  const handleToggleDuty = (id: any) => {
    setDuties(
      duties.map((d) =>
        d.id === id ? { ...d, isCompleted: !d.isCompleted } : d,
      ),
    );
  };

  const renderDuties = duties.map((duty) => (
    <div key={duty.id}>
      <input
        type="checkbox"
        checked={duty.isCompleted}
        onChange={() => handleToggleDuty(duty.id)}
      />
      <span className={duty.isCompleted ? "line-through" : ""}>
        {duty.text}
      </span>
    </div>
  ));

  const handleAddNote = () => {
    if (!noteInput.trim()) return;
    setNotes([...notes, noteInput.trim()]);
    setNoteInput("");
  };

  console.log(duties);
  console.log(notes);

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        {/** Duties input **/}
        <label>What's needs to be done?</label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Presentation e.g."
            className="border border-gray-300 rounded-md p-2 w-[300px] shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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

        {/** Notes texarea **/}
        <div className="flex flex-col mt-10 gap-3">
          <label>Take your note:</label>
          <textarea
            placeholder="I should't use phone before sessions to keep my focus sharp."
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            rows={4}
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddNote()}
          />
          <button
            className="m-auto bg-emerald px-4 py-2 rounded-xl hover:cursor-pointer shrink-0"
            onClick={handleAddNote}
          >
            Save to notes
          </button>
        </div>

        {/** Render Duties **/}
        <div>{renderDuties}</div>
      </div>
    </main>
  );
}
