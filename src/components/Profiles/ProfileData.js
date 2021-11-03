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
// import Dialogs from "../Profiles/Dialogs"

///////////////////////////////FireStore dependencies
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";



export default function DescriptionTable() {
  //  const[name, setName] = useState("");
  //  const[surname, setSurname] = useState("Hamilton");
  //  const[email, setEmail] = useState("KWaca@gmail.com");


   ///////////////////////// Dialog
   const FormDialog = (props)=> {
    const [open, setOpen] = useState(false);
   /////////////////////////// Edit button dialog - start
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
            <Button onClick={handleCloseCancel}>Cancel</Button>
            <Button onClick={handleCloseSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  ///////////////////////// Edit button dialog - end

//////////////////////////////////////////// Main return 
    /////////////////////////////////////////
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(
      () => 
      onSnapshot(collection(db, "users"), (snapshot)=> 
        setUsers(snapshot.docs.map(doc => doc.data()))
      ),
      []
    )
    ///////////////////////////////////////
    return (
    <TableContainer
     component={Paper}>
      <Table sx={{ minWidth: 400 }} size="medium" aria-label="a dense table">
        <TableBody>
        {users.map((user) => 
          <TableRow hover="true" key={user.id}>
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

          <TableRow hover="true">
            <TableCell>Password: </TableCell>
            <TableCell align="left">**********</TableCell>
            <FormDialog />
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}