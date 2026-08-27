import "./App.css";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

function App() {
  return (
    <>
      <Button>Default</Button>
      <Button>
        <SendIcon /> Send
      </Button>
    </>
  );
}

export default App;
