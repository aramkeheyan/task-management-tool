import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
} from "@material-ui/core";

export default function Select(props) {
  const { name, label, value, error = null, onChange } = props;

  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>Prioraity</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="low">low</MenuItem>
        <MenuItem value="medium">medium</MenuItem>
        <MenuItem value="high">high</MenuItem>
      </MuiSelect>
    </FormControl>
  );
}
