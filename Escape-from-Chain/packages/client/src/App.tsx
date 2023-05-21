import { useComponentValue } from "@latticexyz/react";
import CanvasComponent from "./components/CanvasComponent";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    components: { Counter },
    systemCalls: { increment },
    network: { singletonEntity },
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);

  return (
    <>
      <CanvasComponent></CanvasComponent>
    </>
  );
};
