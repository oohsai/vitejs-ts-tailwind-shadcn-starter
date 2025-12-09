import "./App.css";
import Home from "./components/Home";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider>
      <Home></Home>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
