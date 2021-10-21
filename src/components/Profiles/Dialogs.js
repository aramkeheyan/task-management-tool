// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function FormDialog() {
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("")

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleCloseSave = () => {
//     setName();
//     setOpen(false);
//   };
//   const handleCloseCancel = () => {

//     setOpen(false);
//   };
//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Edit
//       </Button>
//       <Dialog open={open} onClose={handleCloseCancel}>
//         <DialogTitle>Edit profile information</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To edit profile information, please enter appropriate information here.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseCancel}>Cancel</Button>
//           <Button onClick={handleCloseSave}>Save</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }