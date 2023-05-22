import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { useState } from "react";

import Menu from "./components/Menu";
import CanvasComponent from "./components/CanvasComponent";
import DialogState from "./dataType/DialogState";

import styled from "styled-components";

const Navbar = styled.div`
  position: absolute;
  top: 10px;
  left: 47%;
  color: white;
`;

export const App = () => {
  const {
    components: { Counter },
    systemCalls: { increment, spawn },
    network: { singletonEntity },
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);

  // Menu dialog state.
  const [dialogState, setDialogState] = useState<DialogState>(DialogState.Menu);
  const setMenuDialog = () => {
    setDialogState(DialogState.Menu);
  };
  const setStartDialog = () => {
    setDialogState(DialogState.Start);
  };
  const setOpenEndDialog = () => {
    setDialogState(DialogState.End);
  };

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
      <Menu
        dialogState={dialogState}
        onSetMenuDialog={setMenuDialog}
        onSetStartDialog={setStartDialog}
        onSetOpenEndDialog={setOpenEndDialog}
      ></Menu>
      <Navbar>
        <span>Score: </span>
        <span>{score}</span>
      </Navbar>
      <CanvasComponent
        onIncreaseScoreByHit={increaseScoreByHit}
        onIncreaseScoreByDefeat={increaseScoreByDefeat}
      ></CanvasComponent>
    </>
  );
};
