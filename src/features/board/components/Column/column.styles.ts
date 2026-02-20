import type { ButtonProps } from "@mui/material";

export const columnBoxSx = (
  color: ButtonProps["color"],
  expanded: boolean,
) => ({
  m: 1,
  p: 1,
  width: expanded ? 400 : 50,

  borderRadius: 2,
  bgcolor: `${color}.light`,
  borderColor: `${color}.dark`,
  borderWidth: 2,
  borderStyle: "solid",
  transition: "width 0.3s ease",
});

export const counterBoxSx = (color: ButtonProps["color"]) => ({
  my: 1,
  minWidth: 40,
  minHeight: 40,
  borderRadius: 2,
  bgcolor: `${color}.dark`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: `${color}.main`,
});
