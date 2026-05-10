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
