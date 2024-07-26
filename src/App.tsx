import { FC } from "react";
import { Presentation } from "./pages/PresentationPage";
import { Stack } from "./pages/StackPage";
import "./app.css";


const App: FC = () => {
  return (
    <>
      <Presentation />
      <Stack />
    </>
  )
}

export default App
