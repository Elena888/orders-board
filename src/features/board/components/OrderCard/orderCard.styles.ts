import type { ButtonProps } from "@mui/material";

export const orderCardBoxSx = (expanded: boolean) => ({
  bgcolor: "white",
  boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.05)",
  mb: 2,
  borderRadius: 2,
  zIndex: 100,
  position: "relative",
  transform: expanded ? "translateY(0)" : "translateY(-20px)",
  opacity: expanded ? 1 : 0,
  transition: "transform 0.45s ease",
});

export const orderCardHeaderSx = (isDraggable: boolean) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 1,
  borderBottom: "1px solid #d1d1d1",
  cursor: isDraggable ? "grab" : "inherit",
});
export const orderNotesBoxSx = (color: ButtonProps["color"]) => ({
  display: "flex",
  alignItems: "center",
  bgcolor: `${color}.light`,
  color: `${color}.main`,
  m: 1,
  borderRadius: 2,
  p: 1,
});
