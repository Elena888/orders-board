import { formatDistanceToNow } from "date-fns";

export const formatOrderDate = (value: string) =>
  formatDistanceToNow(new Date(value), { addSuffix: true });