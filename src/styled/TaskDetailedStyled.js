import TextField from "@mui/material/TextField";
import styled from "styled-components";

import ModalUnstyled from "@mui/core/ModalUnstyled";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
export const Boxstyle = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};
export const SummaryField = styled(TextField)({
  backgroundColor: "yellow",
  width: "90%",
  display: "flex",
  margin: "10px",
});
export const DescriptonField = styled(TextField)({
  backgroundColor: "grey",
  margin: "10px",
  float: "left",
  height: "60%",
  width: "40%",
  flexWrap: "wrap",
  padding: "1%",
  borderRadius: "12px",
});
export const AssigeeField = styled(TextField)({
  margin: "10px",
  height: "20%",
  width: "10%",
  float: "left",
  flexDirection: "column ",
  flexWrap: "wrap",
});
export const ReporterField = styled(TextField)({
  margin: "10px",
  height: "20%",
  width: "10%",
  float: "left",
});
export const PriorityField = styled(Select)({
  margin: "10px",
  height: "8%",
  width: "8%",
  float: "left",
});
export const AssigneeModalField = styled(Select)({});
export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonReassign = styled(Button)({
  margin: "10px",
  height: "10",
  width: "10",
  padding: "10px",
  float: "left",
  fontSize: "small",
  size: "small",
});

export const TaskContainer = styled.div({
  color: "red",
  backgroundColor: "yellow",
  border: "1px solid",
  height: "600px",
  width: "600px",
  display: "flex",
  justifyContent: "centre",
});
