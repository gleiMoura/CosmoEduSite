import { FC } from "react";
import { Presentation } from "./pages/PresentationPage";
import { Stack } from "./pages/StackPage";
import "./app.css";
import { Portfolio } from "./pages/PortfolioPage";


const App: FC = () => {
  return (
    <>
      <Presentation />
      <Stack />
      <Portfolio />
    </>
  )
}

export default App
