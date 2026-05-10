export interface Duty {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface Task {
  id: string;
  duties: Duty[];
  note: string;
  createdAt: string;
}

export interface Day {
  id: string; // "10-05-2026"
  tasks: Task[];
}
