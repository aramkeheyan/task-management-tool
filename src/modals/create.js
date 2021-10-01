import { useState } from "react";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/control";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Switch, Route, useHistory } from "react-router-dom";
import { CREATE } from "../constants/paths";

const Values = {
  id: 0,
  title: "",
  description: "",
  assignee: "",
  reporter: "",
  priority: "low",
  status: "draft",
};

export const priorityOptions = () => [
  { id: "1", title: "low" },
  { id: "2", title: "medium" },
  { id: "3", title: "high" },
];

export default function Create() {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };

  const validate = (Values = values) => {
    let temp = { ...errors };
    if ("title" in Values)
      temp.title = Values.title ? "" : "This field is required.";
    if ("description" in Values)
      temp.description =
        Values.description.length > 9 ? "" : "Minimum 10 words required.";
    if ("assignee" in Values)
      temp.assignee = Values.assignee ? "" : "This field is required.";
    if ("reporter" in Values)
      temp.reporter = Values.reporter ? "" : "This field is required.";
    if ("status" in Values)
      temp.status = Values.status ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (Values === values) return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(Values, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setValues();
      resetForm();
    }
  };

  return (
    <>
      <Switch>
        <Route path={CREATE}>
          <div>
            <Button variant="primary" onClick={handleClickOpen}>
              Create
            </Button>
            <Dialog
              open={true}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Create a task"}
              </DialogTitle>
              <DialogContent>
                <Form onSubmit={handleSubmit}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Controls.Input
                        name="title"
                        label="Title"
                        value={values.title}
                        onChange={handleInputChange}
                        error={errors.title}
                      />
                      <Controls.Input
                        label="Description"
                        name="description"
                        value={values.description}
                        onChange={handleInputChange}
                        error={errors.description}
                      />
                      <Controls.Input
                        label="Assignee"
                        name="assignee"
                        value={values.assignee}
                        onChange={handleInputChange}
                        error={errors.assignee}
                      />
                      <Controls.Input
                        label="Reporter"
                        name="reporter"
                        value={values.reporter}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Controls.Select
                      name="priroity"
                      label="Priroity"
                      value={values.priority}
                      onChange={handleInputChange}
                      options={priorityOptions}
                      error={errors.priority}
                    />
                  </Grid>
                </Form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Route>
      </Switch>
    </>
  );
}
