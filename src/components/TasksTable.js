import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/styles";
import { Route, Switch } from "react-router";
import { MAIN_PAGE, CREATE } from "../constants/paths";

const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: "#86D3DC"
    },
    "& .medium": {
      backgroundColor: "grey",
      color: "black",
      borderRadius: 5,
    },
    "& .high": {
      backgroundColor: "red",
      color: "black",
      borderRadius: 5,
    },
    "& .low": {
      backgroundColor: "#0ff",
      color: "black",
      borderRadius: 5,
    },
  },
});

const columns = [
  {
    field: "Title",
    headerClassName: "super-app-theme--header",
    width: 200,
    description: "Title",
  },
  {
    field: "Priority",
    headerClassName: "super-app-theme--header",
    width: 200,
    description: "Priority",
  },
  {
    field: "Reporter",
    headerClassName: "super-app-theme--header",
    width: 200,
    description: "Reporter",
  },
  {
    field: "Assignee",
    headerClassName: "super-app-theme--header",
    width: 200,
    description: "Assigned to",
  },
  {
    field: "Status",
    headerClassName: "super-app-theme--header",
    width: 200,
    description: "Workflow Status",
  },
];
const rows = [
  {
    id: 1,
    Title: "Change HTML",
    Priority: "Medium",
    Reporter: "Jhon",
    Assignee: "Jack",
    Status: "Done",
  },
  {
    id: 2,
    Title: "Change CSS",
    Priority: "Low",
    Reporter: "Roger",
    Assignee: "Kim",
    Status: "In Progress",
  },
  {
    id: 3,
    Title: "Change JS",
    Priority: "High",
    Reporter: "Katy",
    Assignee: "Kim",
    Status: "Draft",
  },
];

let data = { columns, rows };

export default function ColumnSelectorGrid() {
  let classes = useStyles();

  return (
    <Switch>
      <Route exact path={[MAIN_PAGE, CREATE]}>
        <div style={{ height: 550, width: "66%" }} className={classes.root}>
          <DataGrid
            getCellClassName={(column) => {
              if (column.field === "Priority") {
                if (column.value === "Low") return "low";
                return column.value === "High" ? "high" : "medium";
              }
            }}
            {...data}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
      </Route>
    </Switch>
  );
}
