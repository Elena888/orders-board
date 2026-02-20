import { Box, Typography, IconButton } from "@mui/material";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";

import type { Column as ColumnType } from "../../model/board.types";
import { COLUMN_ICONS } from "../../model/board.config";
import { counterBoxSx } from "./column.styles";

type ColumnHeaderProps = {
  column: ColumnType;
  ordersCount: number;
  expanded: boolean;
  handleExpandCol: () => void;
};

function ColumnHeader({
  column,
  ordersCount,
  expanded,
  handleExpandCol,
}: ColumnHeaderProps) {
  const IconComponent = COLUMN_ICONS[column.id];
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={expanded ? "row" : "column"}
      sx={{ mb: 1 }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={handleExpandCol}>
          <IconComponent sx={{ color: `${column.color}.main` }} />
        </IconButton>
        {expanded && (
          <Typography variant="h4" fontSize="1.1rem" fontWeight="600">
            {column.title}
          </Typography>
        )}
      </Box>
      {!expanded && (
        <IconButton onClick={handleExpandCol}>
          <OpenInFullOutlinedIcon />
        </IconButton>
      )}
      <Box sx={counterBoxSx(column.color)}>
        <Typography
          variant="h5"
          color={`${column.color}.main`}
          fontSize="1.2rem"
        >
          {ordersCount}
        </Typography>
      </Box>
    </Box>
  );
}

export default ColumnHeader;
