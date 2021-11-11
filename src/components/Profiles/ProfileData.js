import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
////////////////////////////////////////Dialog's dependencies
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

/////////////////////////////////////FireStore dependencies
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default function DescriptionTable() {
   ///////////////////////// Edit button dialog - start
    const FormDialog = ()=> {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseSave = () => {
      setOpen(false);
    };
    const handleCloseCancel = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit profile information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To edit profile information, please enter appropriate information here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSave}>Save</Button>
            <Button onClick={handleCloseCancel}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  ///////////////////////// Edit button dialog - end

    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(
      () => 
      onSnapshot(collection(db, "users"), (snapshot)=> 
        setUsers(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))
      ),
      []
    )
////////////////////////// Main return 
    return (
    <TableContainer
     component={Paper}>
      <Table sx={{ minWidth: 400 }} size="medium" aria-label="a dense table">
        <TableBody>
        {users.map((user) => 
          <TableRow hover="true" key={user.uid}>
            <TableCell>First Name: </TableCell>
            <TableCell align="left">{user.firstName}</TableCell>
            <FormDialog />
          </TableRow>
          )
        }
        {users.map((user) => 
          <TableRow hover="true" key={user.id} >
            <TableCell>Last Name: </TableCell>
            <TableCell align="left">{user.lastName}</TableCell>
            <FormDialog />
          </TableRow>
          )
        }
        {users.map((user) => 
          <TableRow hover="true" key={user.id}>
            <TableCell>Email: </TableCell>
            <TableCell align="left">{user.email}</TableCell>
            <FormDialog />
          </TableRow>
         )
        }
        {users.map((user) => 
          <TableRow hover="true" key={user.id}>
            <TableCell>Password: </TableCell>
            <TableCell align="left">{user.password}</TableCell>
            <FormDialog />
          </TableRow>
          )
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}