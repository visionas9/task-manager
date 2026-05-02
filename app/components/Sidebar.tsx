"use client";
import { useState } from "react";
import { harcodedSidebar } from "@/app/hardcodeddata";

export default function Sidebar() {
  const [open, isOpen] = useState(false);

  const handleToggle = () => {
    isOpen((prev) => !prev);
  };

  return (
    <>
      <aside
        className={`flex flex-col h-screen ${open ? "w-[20%]" : "hidden"}`}
      >
        <ul>
          {harcodedSidebar.map((i) => (
            <li key={i.id}>{i.id}</li>
          ))}
        </ul>
      </aside>
      <button
        className="flex flex-col items-start"
        onClick={() => handleToggle()}
      >
        toggle
      </button>
    </>
  );
}
