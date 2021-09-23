import React from "react";
import { uuidv4 } from 'uuid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {

        '& .super-app-theme--header': {

            // backgroundColor: "red"
        },

    },
});

const columns = [
    {
        field: 'Title',
        headerClassName: 'super-app-theme--header',
        width: 200,
        description: "Title"
    },
    {
        field: 'Priority',
        headerClassName: 'super-app-theme--header',
        width: 200,
        description: "Priority"
    },
    {
        field: 'Reporter',
        headerClassName: 'super-app-theme--header',
        width: 200,
        description: "Reporter"
    },
    {
        field: 'Assigned to',
        headerClassName: 'super-app-theme--header',
        width: 200,
        description: "Assigned to"
    },
    {
        field: 'Status',
        headerClassName: 'super-app-theme--header',
        width: 200,
        description: "Workflow Status"
    },
]
const rows = [
    {
        id: 1,
        Title: 'Change CSS',
        Priority: 'Medium',
        Reporter: "asd",
        'Assigned to': "asd",
        Status: "In Progress",
    },]

let data = { columns, rows }

export default function ColumnSelectorGrid() {
    // const { data } = useDemoData({
    //   dataSet: 'Commodity',
    //   rowLength: 10,
    //   maxColumns: 10,
    // });
    let classes = useStyles()

    return (
        <div style={{ height: 650, width: '66%' }}>
            <DataGrid className={classes.root}
                // columns={columns}
                // rows={rows}
                {...data}
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </div>
    );
}