import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import type { SvgIconProps } from "@mui/material";
import type { OrderStatus } from "./board.types";
import { NEW, IN_PROGRESS, AWAITING, COMPLETED, DECLINED } from "./board.constants";

export const STATUS_ACTIONS: Partial<
  Record<
    OrderStatus,
    {
      title: string;
      next: OrderStatus;
      icon: React.ComponentType<SvgIconProps>;
    }
  >
> = {
  [NEW]: {
    title: "Start",
    next: IN_PROGRESS,
    icon: SoupKitchenIcon,
  },
  [IN_PROGRESS]: {
    title: "Awaiting Pickup",
    next: AWAITING,
    icon: AllInboxOutlinedIcon,
  },
  [AWAITING]: {
    title: "Completed",
    next: COMPLETED,
    icon: CheckCircleOutlinedIcon,
  },
};

export const COLUMN_ICONS: Record<
  OrderStatus,
  React.ComponentType<SvgIconProps>
> = {
  [NEW]: AlarmOnIcon,
  [IN_PROGRESS]: SoupKitchenIcon,
  [AWAITING]: AllInboxOutlinedIcon,
  [COMPLETED]: CheckCircleOutlinedIcon,
  [DECLINED]: CancelOutlinedIcon,
};
