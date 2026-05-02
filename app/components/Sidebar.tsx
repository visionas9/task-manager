"use client";
import { useState } from "react";
import { harcodedSidebar } from "@/app/hardcodeddata";

export default function Sidebar() {
  const [open, isOpen] = useState(false);

  return (
    <aside className="flex flex-col h-screen">
      <ul>
        {harcodedSidebar.map((i) => (
          <li>{i.id}</li>
        ))}
      </ul>
    </aside>
  );
}
