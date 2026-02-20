import { memo } from "react";
import { Box, Typography } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useDraggable } from "@dnd-kit/core";
import type { Order, OrderStatus } from "../../model/board.types";
import { DECLINED, COMPLETED } from "../../model/board.constants";
import OrderCardHeader from "./OrderCardHeader";
import OrderCardActions from "./OrderCardActions";
import { orderCardBoxSx, orderNotesBoxSx } from "./orderCard.styles";

type OrderCardProps = {
  order: Order;
  color: ButtonProps["color"];
  handleChangeOrderStatus: (id: number, status: OrderStatus) => void;
  expanded: boolean
};

function OrderCard({ order, color, handleChangeOrderStatus, expanded }: OrderCardProps) {
  const { setNodeRef } = useDraggable({
    id: order.id,
  });

  const isActive = order.status !== DECLINED && order.status !== COMPLETED;

  return (
    <Box ref={setNodeRef} sx={orderCardBoxSx(expanded)}>
      <OrderCardHeader order={order} />

      {order.products.map((product, index) => {
        return (
          <Box key={`${product.name}-${index}`} sx={{ p: 1 }}>
            <Typography>
              <Box component="span" fontWeight={600} mr={1}>
                {product.count}x
              </Box>
              {product.name}
            </Typography>
          </Box>
        );
      })}

      {isActive && (
        <>
          {order.notes && (
            <Box sx={orderNotesBoxSx("warning")}>
              <WarningAmberIcon sx={{ mr: 1 }} />
              <Typography color="warning.contrastText">
                {order.notes}
              </Typography>
            </Box>
          )}

          <Box sx={orderNotesBoxSx("gray")}>
            <AllInboxOutlinedIcon sx={{ mr: 1 }} />
            <Typography>Pickup</Typography>
          </Box>

          <OrderCardActions
            order={order}
            color={color}
            handleChangeOrderStatus={handleChangeOrderStatus}
          />
        </>
      )}
    </Box>
  );
}

export default memo(OrderCard);
