import { Portals } from "@/components/dome";
import "./App.css";

import ViewMapsVr from "./layout/ViewMapsVr";

function App() {
  return (
    <section className="w-screen h-screen">
      <ViewMapsVr>
        <Portals />
      </ViewMapsVr>
    </section>
  );
}

export default App;
