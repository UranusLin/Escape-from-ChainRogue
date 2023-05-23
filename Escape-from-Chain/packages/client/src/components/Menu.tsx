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

const Menu: React.FC<{
  dialogState: DialogState;
  onSetMenuState: () => void;
  onSetStartState: () => void;
}> = ({ dialogState, onSetMenuState, onSetStartState }) => {
  return (
    <DialogContainer>
      {dialogState === DialogState.MENU ? (
        <Dialog open={true}>
          <DialogTitle>GAME MENU</DialogTitle>
          <DialogContent>
            <p>000</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={onSetStartState}>⚔️⚔️ Escape Now ⚔️⚔️</Button>
          </DialogActions>
        </Dialog>
      ) : dialogState === DialogState.END ? (
        <Dialog open={true}>
          <DialogTitle>GAME OVER</DialogTitle>
          <DialogContent>
            <p>222</p>
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
