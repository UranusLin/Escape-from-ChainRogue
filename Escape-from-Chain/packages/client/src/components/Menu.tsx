import DialogState from "../dataType/DialogState";

import PropTypes from "prop-types";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import styled from "styled-components";

const DialogContainer = styled.div`
  color: white;
`;

const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu: React.FC<{
  dialogState: DialogState;
  onSetMenuState: () => void;
  onSetStartState: () => void;
  score: number;
}> = ({ dialogState, onSetMenuState, onSetStartState, score }) => {
  return (
    <DialogContainer>
      {dialogState === DialogState.MENU ? (
        <Dialog open={true}>
          <DialogTitle>GAME MENU</DialogTitle>
          <DialogContent>
            <p>Current Status</p>
            <StatusBox>
              <span>Score: 0</span>
              <span>Ammo: 10</span>
            </StatusBox>
          </DialogContent>
          <DialogActions>
            <Button onClick={onSetStartState}>⚔️⚔️ Escape Now ⚔️⚔️</Button>
          </DialogActions>
        </Dialog>
      ) : dialogState === DialogState.END ? (
        <Dialog open={true}>
          <DialogTitle>GAME OVER</DialogTitle>
          <DialogContent>
            <p>Final Score: {score}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={onSetMenuState}>🚀🚀 Retry 🚀🚀</Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </DialogContainer>
  );
};

Menu.propTypes = {
  dialogState: PropTypes.number.isRequired,
  onSetMenuState: PropTypes.func.isRequired,
  onSetStartState: PropTypes.func.isRequired,
};

export default Menu;
