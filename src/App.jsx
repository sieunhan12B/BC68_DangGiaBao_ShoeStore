import "./App.css";
import ShoesStore from "./components/ShoesStore";
import { useRoutes } from "react-router-dom";

function App() {
  let routes = useRoutes([
    {
      index: true,
      element: <ShoesStore />,
    },
  ]);

  return <div className="">{routes}</div>;
}

export default App;
