import { useState, memo } from "react";
import { Box } from "@mui/material";
import { useDroppable } from "@dnd-kit/core";
import type {
  Column as ColumnType,
  Order,
  OrderStatus,
} from "../../model/board.types";
import { DECLINED, COMPLETED } from "../../model/board.constants";
import { columnBoxSx } from "./column.styles";
import OrderCard from "../OrderCard/OrderCard";
import ColumnHeader from "./ColumnHeader";

type ColumnProps = {
  column: ColumnType;
  orders: Order[];
  handleChangeOrderStatus: (id: number, status: OrderStatus) => void;
};

function Column({ column, orders, handleChangeOrderStatus }: ColumnProps) {
  const [expanded, setExpanded] = useState(
    column.id !== COMPLETED && column.id !== DECLINED,
  );
  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <Box sx={columnBoxSx(column.color, expanded)} ref={setNodeRef}>
      <ColumnHeader
        expanded={expanded}
        handleExpandCol={handleClick}
        column={column}
        ordersCount={orders.length}
      />

      <>
        {orders.map((order) => {
          return (
            <OrderCard
              key={order.id}
              order={order}
              color={column.color}
              handleChangeOrderStatus={handleChangeOrderStatus}
              expanded={expanded}
            />
          );
        })}
      </>
    </Box>
  );
}

export default memo(Column);
