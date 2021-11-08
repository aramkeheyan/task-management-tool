import React from "react";
import { uuidv4 } from "uuid";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { makeStyles } from "@material-ui/styles";
import { Route, Switch } from "react-router";
import { MAIN_PAGE, CREATE } from "../constants/paths";

const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      // backgroundColor: "red"
    },
    "& .medium": {
      backgroundColor: "yellow",
      color: "black",
      borderRadius: 5,
    },
    "& .high": {
      backgroundColor: "red",
      color: "black",
      borderRadius: 5,
    },
    "& .low": {
      color: "black",
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
    Title: "Change CSS",
    Priority: "Medium",
    Reporter: "asd",
    Assignee: "asd",
    Status: "In Progress",
  },
  {
    id: 2,
    Title: "Change CSS",
    Priority: "Low",
    Reporter: "asd",
    Assignee: "asd",
    Status: "In Progress",
  },
  {
    id: 3,
    Title: "Change CSS",
    Priority: "High",
    Reporter: "asd",
    Assignee: "asd",
    Status: "In Progress",
  },
];

let data = { columns, rows };

export default function ColumnSelectorGrid() {
  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 10,
  //   maxColumns: 10,
  // });
  let classes = useStyles();

  return (
    <Switch>
      <Route exact path={[MAIN_PAGE, CREATE]}>
        <div style={{ height: 650, width: "75%" }} className={classes.root}>
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
