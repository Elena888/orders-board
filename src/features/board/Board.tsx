import { useState } from "react";
import { Container, Box } from "@mui/material";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import type { Order, OrderStatus } from "./model/board.types";
import { COMPLETED, DECLINED, COLUMNS } from "./model/board.constants";
import Column from "./components/Column/Column";
import OrderCard from "./components/OrderCard/OrderCard";

const INITIAL_ORDERS: Order[] = [
  {
    id: 11,
    status: "New",
    products: [
      {
        name: "avocado",
        count: 1,
      },
      {
        name: "apples",
        count: 5,
      },
      {
        name: "Americano",
        count: 2,
      },
    ],
    notes: "Important notes",
    date: "2026-02-13T10:25:00.000Z",
  },
  {
    id: 12,
    status: "New",
    products: [
      {
        name: "Free Americano",
        count: 2,
      },
    ],
    date: "2026-02-13T11:20:00.000Z",
  },
  {
    id: 13,
    status: "In_Progress",
    products: [
      {
        name: "Free Americano",
        count: 3,
      },
    ],
    date: "2026-02-13T09:00:00.000Z",
  },
  {
    id: 15,
    status: "Awaiting_Pickup",
    products: [
      {
        name: "Pizza Margatita",
        count: 2,
      },
    ],
    date: "2026-02-15T09:00:00.000Z",
  },
  {
    id: 25,
    status: "Declined",
    products: [
      {
        name: "Pizza Peperonni",
        count: 2,
      },
    ],
    date: "2026-02-16T09:00:00.000Z",
  },
  {
    id: 41,
    status: "Completed",
    products: [
      {
        name: "Banana",
        count: 5,
      },
    ],
    date: "2026-02-16T09:00:00.000Z",
  },
];

function Board() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as number);
  };

  const handleChangeOrderStatus = (orderId: number, newStatus: OrderStatus) => {
    setOrders((prev) => {
      return prev.map((order) => {
        if (
          order.id === orderId &&
          order.status !== DECLINED &&
          order.status !== COMPLETED
        ) {
          return { ...order, status: newStatus };
        } else {
          return order;
        }
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const orderId = active.id as number;
    const newStatus = over.id as Order["status"];

    const currentOrder = orders.find((o) => o.id === orderId);
    if (!currentOrder) return;

    if (isValidMove(currentOrder.status, newStatus)) {
      handleChangeOrderStatus(orderId, newStatus);
    }
  };

  const isValidMove = (from: OrderStatus, to: OrderStatus) => {
    if (to === DECLINED) return true;

    const fromIndex = COLUMNS.findIndex((c) => c.id === from);
    const toIndex = COLUMNS.findIndex((c) => c.id === to);

    return Math.abs(fromIndex - toIndex) === 1;
  };

  const activeOrder = orders.find((o) => o.id === activeId);

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        my: 5,
      }}
    >
      <Box
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
          m: 2,
        }}
      >
        <Box
          display="flex"
          alignItems="stretch"
          sx={{
            minHeight: "calc(100vh - 80px)",
            flexWrap: "nowrap",
          }}
        >
          <DndContext
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            autoScroll={false}
          >
            {COLUMNS.map((col) => {
              return (
                <Column
                  key={col.id}
                  column={col}
                  orders={orders.filter((order) => order.status === col.id)}
                  handleChangeOrderStatus={handleChangeOrderStatus}
                />
              );
            })}

            <DragOverlay>
              {activeOrder ? (
                <OrderCard
                  order={activeOrder}
                  expanded={true}
                  color={
                    COLUMNS.find((c) => c.id === activeOrder.status)?.color ??
                    "orange"
                  }
                  handleChangeOrderStatus={handleChangeOrderStatus}
                />
              ) : null}
            </DragOverlay>
          </DndContext>
        </Box>
      </Box>
    </Container>
  );
}

export default Board;
