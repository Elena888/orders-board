import { Box, Typography } from "@mui/material";
import { useDraggable } from "@dnd-kit/core";
import { formatOrderDate } from "../../utils/date";
import { orderCardHeaderSx } from "./orderCard.styles";
import type { Order } from "../../model/board.types";
import { DECLINED, COMPLETED } from "../../model/board.constants";

type OrderHeaderProps = {
  order: Order;
};

function OrderCardHeader({ order }: OrderHeaderProps) {
  const isDraggable = order.status !== COMPLETED && order.status !== DECLINED;

  const { attributes, listeners } = useDraggable({
    id: order.id,
    disabled: !isDraggable,
  });

  return (
    <Box {...listeners} {...attributes} sx={orderCardHeaderSx(isDraggable)}>
      <Typography variant="h5" fontSize="1.2rem" fontWeight={600}>
        #{order.id}
      </Typography>
      <Typography fontSize="0.8rem">{formatOrderDate(order.date)}</Typography>
    </Box>
  );
}

export default OrderCardHeader;
