import type { ButtonProps } from "@mui/material";

export type OrderStatus =
  | "New"
  | "In_Progress"
  | "Awaiting_Pickup"
  | "Completed"
  | "Declined";

export type Order = {
  id: number;
  status: OrderStatus;
  products: {
    name: string;
    count: number;
  }[];
  date: string;
  notes?: string;
};

export type Column = {
  id: OrderStatus;
  title: string;
  color: ButtonProps["color"];
};