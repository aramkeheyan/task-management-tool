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

const taskValues = {
  id: 0,
  title: "",
  description: "",
  assignee: "",
  reporter: "",
  priority: "",
  status: "",
};

export default function Create() {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };

  const validate = (values = taskValues) => {
    let temp = { ...errors };
    if ("title" in values)
      temp.title = values.title ? "" : "This field is required.";
    if ("description" in values)
      temp.description =
        values.description.length > 9 ? "" : "Minimum 10 words required.";
    if ("assignee" in values)
      temp.assignee = values.assignee ? "" : "This field is required.";
    if ("reporter" in values)
      temp.reporter = values.reporter ? "" : "This field is required.";
    if ("status" in values)
      temp.status = values.status ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (values === taskValues)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(taskValues, true, validate);

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
                        error={errors.reporter}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controls.Select
                        name="priority"
                        label="Priority"
                        value={values.priority}
                        onChange={handleInputChange}
                        options={taskValues}
                        error={errors.priority}
                      />

                      <Controls.Multiline
                        label="Description"
                        name="description"
                        id="filled-multiline-static"
                        value={values.description}
                        onChange={handleInputChange}
                        error={errors.description}
                      />
                    </Grid>
                  </Grid>
                </Form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Create</Button>
                <Button onClick={handleClose} autoFocus>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Route>
      </Switch>
    </>
  );
}
