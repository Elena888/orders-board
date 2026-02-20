import { ThemeProvider } from "@mui/material/styles";
import Board from "./features/board/index";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Board />
    </ThemeProvider>
  );
}

export default App;
