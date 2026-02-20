import { Box, Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import type { Order, OrderStatus } from "../../model/board.types";
import { STATUS_ACTIONS } from "../../model/board.config";
import { DECLINED } from "../../model/board.constants";

type OrderActionsProps = {
  order: Order;
  handleChangeOrderStatus: (id: number, status: OrderStatus) => void;
  color: ButtonProps["color"];
};

function OrderCardActions({
  order,
  handleChangeOrderStatus,
  color,
}: OrderActionsProps) {
  const btnData = STATUS_ACTIONS[order.status];

  return (
    btnData && (
      <Box sx={{ p: 1 }}>
        <Button
          variant="outlined"
          color="red"
          sx={{ width: "100%", my: 1 }}
          endIcon={<CancelOutlinedIcon />}
          onClick={() => handleChangeOrderStatus(order.id, DECLINED)}
        >
          Decline
        </Button>

        <Button
          variant="contained"
          color={color}
          sx={{ width: "100%", my: 1 }}
          endIcon={<btnData.icon />}
          onClick={() => handleChangeOrderStatus(order.id, btnData.next)}
        >
          {btnData.title}
        </Button>
      </Box>
    )
  );
}

export default OrderCardActions;
