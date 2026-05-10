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
      { id: crypto.randomUUID(), text: dutyInput.trim(), isCompleted: false },
    ]);
    setDutyInput("");
  };

  const handleToggleDuty = (id: string) => {
    setDuties(
      duties.map((d) =>
        d.id === id ? { ...d, isCompleted: !d.isCompleted } : d,
      ),
    );
  };

  const deleteDuty = (id: string) => {
    setDuties((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddNote = () => {
    if (!noteInput.trim()) return;
    setNotes([...notes, noteInput.trim()]);
    setNoteInput("");
  };

  return (
    <main className="max-w-md mx-auto p-4 flex flex-col gap-8">
      {/* Duties input */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">
          What needs to be done?
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Presentation e.g."
            className="flex-1 border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            value={dutyInput}
            onChange={(e) => setDutyInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddDuty()}
          />
          <button
            className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 cursor-pointer shrink-0 transition"
            onClick={handleAddDuty}
          >
            + Add
          </button>
        </div>
      </div>

      {/* Render Duties */}
      {duties.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="font-medium text-gray-700">Active tasks:</p>
          <ul className="flex flex-col border border-gray-200 rounded-md divide-y divide-gray-200">
            {duties.map((duty) => (
              <li key={duty.id} className="flex items-center gap-3 p-3">
                <input
                  type="checkbox"
                  checked={duty.isCompleted}
                  onChange={() => handleToggleDuty(duty.id)}
                  className="w-4 h-4 accent-emerald-500 cursor-pointer"
                />
                <span
                  className={`flex-1 ${duty.isCompleted ? "line-through text-gray-400" : ""}`}
                >
                  {duty.text}
                </span>
                <button
                  onClick={() => deleteDuty(duty.id)}
                  className="text-gray-400 hover:text-red-500 cursor-pointer transition"
                  aria-label="Delete duty"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Notes */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-700">Take your note:</label>
        <textarea
          placeholder="I shouldn't use phone before sessions to keep my focus sharp."
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
          rows={4}
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
        />
        <button
          className="self-end bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 cursor-pointer transition"
          onClick={handleAddNote}
        >
          Save note
        </button>
      </div>
    </main>
  );
}
