import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Boxstyle,
  SummaryField,
  DescriptonField,
  AssigeeField,
  ReporterField,
  PriorityField,
  AssigneeModalField,
  StyledModal,
  ButtonReassign,
  TaskContainer,
} from "../styled/TaskDetailedStyled";

const data = {
  userList: ["Gevorg Burnuchyan", "Sevak Santuryan", "Petros Ghazaryan"],
  assignee: "robert ivanov",
  reporter: "hayk",
  status: ["to do", "Not Actual"],
  descripton:
    "Please Add Icon and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaa and change sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa footer menusssssd Icon and cnusssssd Icon and change foon and change footer menusssssd Icon and change footer menusssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
  priority: ["low"],
  summary: "Please Add Icon",
  admin: false,
};
function TaskDetailed() {
  const [assignee, setAssignee] = useState(data.assignee);
  const [summary, setSummary] = useState(data.summary);
  const [descripton, setDescripton] = useState(data.descripton);
  const [reporter, setReporter] = useState(data.reporter);
  const [priority, setPriority] = useState(data.priority);
  const [status, setStatus] = useState(data.status[0]);
  const [open, setOpen] = useState(false);

  const assigneeSelect = data.userList.map((item) => (
    <MenuItem value={item}>{item}</MenuItem>
  ));
  const statusSelect = data.status.map((item) => (
    <MenuItem value={item}>{item}</MenuItem>
  ));
  const onChangeStatusUsers = (event) => {
    const oldFirstStatus = data.status;
    //////////////
  };
  const onAssigneeChange = (event) => {
    data.assignee = event.target.value;
    // useEffect(() => {
    //   data.assigne = event.target.value;
    // }, [setAssignee()]);
  };
  const onChangeSummaryValue = (event) => {
    setSummary((data.summary = event.target.value));
  };
  const onChangeDescriptionValue = (event) => {
    setSummary((data.descripton = event.target.value));
  };

  const onPriorityChange = (event) => {
    setPriority((data.priority = event.target.value));
  };
  const openAssigneeModal = () => {
    setOpen(true);
  };
  const closeAssigneeModal = () => {
    setOpen(false);
  };
  if (data.admin === true) {
    return (
      <div>
        <SummaryField
          id="outlined-read-only-input"
          defaultValue={summary}
          InputProps={{
            readOnly: true,
          }}
        ></SummaryField>

        <DescriptonField
          id="outlined-multiline-flexible"
          label="Descrition"
          multiline
          maxRows={40}
          defaultValue={descripton}
          InputProps={{
            readOnly: true, // When login === Admin (false)
          }}
        ></DescriptonField>
        <div>
          <AssigeeField
            id="outlined-read-only-input"
            label="Assigne"
            defaultValue={assignee}
            InputProps={{
              readOnly: true,
            }}
          ></AssigeeField>

          <ReporterField
            id="outlined-read-only-input"
            label="Reporter"
            defaultValue={reporter}
            InputProps={{
              readOnly: true,
            }}
          ></ReporterField>
          <PriorityField onChange={onPriorityChange} value={priority}>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="critical">Critical</MenuItem>
          </PriorityField>
          <PriorityField onChange={onChangeStatusUsers} value="Default">
            <MenuItem value="Default" disabled selected>
              {status}
            </MenuItem>
            {statusSelect}
          </PriorityField>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <TaskContainer>
          <SummaryField
            id="outlined-read-only-input"
            defaultValue={summary}
            InputProps={{
              readOnly: false,
            }}
            onChange={onChangeSummaryValue}
          ></SummaryField>

          <DescriptonField
            id="outlined-multiline-flexible"
            label="Descrition"
            multiline
            maxRows={40}
            defaultValue={descripton}
            InputProps={{
              readOnly: false,
            }}
            onChange={onChangeDescriptionValue}
          ></DescriptonField>

          <AssigeeField
            id="outlined-read-only-input"
            label="Assigne"
            defaultValue={assignee}
            InputProps={{
              readOnly: true,
            }}
          ></AssigeeField>
          <ButtonReassign onClick={openAssigneeModal} variant="Re-assign">
            Re-Assign
          </ButtonReassign>
          <ReporterField
            id="outlined-read-only-input"
            label="Reporter"
            defaultValue={reporter}
            InputProps={{
              readOnly: true,
            }}
          ></ReporterField>
          <PriorityField onChange={onPriorityChange} value={priority}>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="critical">Critical</MenuItem>
          </PriorityField>

          <PriorityField value="Default">
            <MenuItem value="Default" disabled selected>
              {status}
            </MenuItem>
          </PriorityField>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}

            // onClose={handleClose}
            // BackdropComponent={Backdrop}
          >
            <Box sx={Boxstyle}>
              {" "}
              <AssigneeModalField onChange={onAssigneeChange} value={assignee}>
                {assigneeSelect}
              </AssigneeModalField>
              <Button onClick={closeAssigneeModal}>Close</Button>
            </Box>
          </StyledModal>
        </TaskContainer>
      </div>
    );
  }
}
export default TaskDetailed;
