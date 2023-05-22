import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { useEffect, useState } from "react";

import Menu from "./components/Menu";
import CanvasComponent from "./components/CanvasComponent";
import DialogState from "./dataType/DialogState";

import styled from "styled-components";

const Navbar = styled.div`
  position: absolute;
  top: 10px;
  left: 47%;
  color: white;
  user-select: none;
`;

export const App = () => {
  const {
    components: { Counter, Ammo },
    systemCalls: { increment, decrease },
    network: { singletonEntity },
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);
  const ammo = useComponentValue(Counter, singletonEntity);

  // Menu dialog state.
  const [dialogState, setDialogState] = useState<DialogState>(DialogState.MENU);
  const setMenuState = () => {
    setDialogState(DialogState.MENU);
  };
  const setStartState = () => {
    setDialogState(DialogState.START);
    setScore(0);
  };
  const setEndState = () => {
    setDialogState(DialogState.END);
  };
  useEffect(() => {
    // Set the initial dialog state to START when the component mounts.
    setMenuState();
  }, []);

  // Calculate score.
  const [score, setScore] = useState(0);
  const increaseScoreByHit = () => {
    setScore(score + 10);
  };
  const increaseScoreByDefeat = () => {
    setScore(score + 50);
  };

  return (
    <>
      <div>
        Counter: <span>{counter?.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button>

      {dialogState !== DialogState.START ? (
        <Menu
          dialogState={dialogState}
          onSetMenuState={setMenuState}
          onSetStartState={setStartState}
        ></Menu>
      ) : (
        <>
          <Navbar>
            <span>Score: </span>
            <span>{score}</span>
          </Navbar>
          <CanvasComponent
            onIncreaseScoreByHit={increaseScoreByHit}
            onIncreaseScoreByDefeat={increaseScoreByDefeat}
            onSetEndState={setEndState}
          ></CanvasComponent>
        </>
      )}
    </>
  );
};
