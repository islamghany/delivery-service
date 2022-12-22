import Navigations from "@/navigations";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import client from "./hooks";
function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Navigations />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
