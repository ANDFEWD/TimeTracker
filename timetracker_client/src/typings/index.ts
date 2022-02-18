export type Children = JSX.Element | JSX.Element[];

export interface TaskCreate {
  desc: string;
  timeValue: string | number;
  userName: string;
  userEmail: string;
  title: string;
  isComplete: boolean;
}

export interface TaskModel {
  id: string;
  title: string;
  desc: string;
  timeValue: string;
  userName: string;
  userEmail: string;
  isComplete: boolean;
}
