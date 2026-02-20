import type { Column } from "./board.types";

const NEW = "New";
const IN_PROGRESS = "In_Progress";
const AWAITING = "Awaiting_Pickup";
const COMPLETED = "Completed";
const DECLINED = "Declined";

const COLUMNS: Column[] = [
  { id: NEW, title: "New", color: "orange" },
  { id: IN_PROGRESS, title: "In Progress", color: "violet" },
  { id: AWAITING, title: "Awaiting Pickup", color: "gray" },
  { id: COMPLETED, title: "Completed", color: "green" },
  { id: DECLINED, title: "Declined", color: "red" },
];

export { NEW, IN_PROGRESS, AWAITING, COMPLETED, DECLINED, COLUMNS };
