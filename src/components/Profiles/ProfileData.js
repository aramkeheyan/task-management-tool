import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Dialogs from "../Profiles/Dialogs"


export default function DescriptionTable() {
   
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} size="medium" aria-label="a dense table">
        <TableBody>
          <TableRow hover="true">
            <TableCell>First Name: </TableCell>
            <TableCell align="left">Sebastian</TableCell>
            <Dialogs />
          </TableRow>
          <TableRow hover="true" >
            <TableCell>Last Name: </TableCell>
            <TableCell align="left">Hamilton</TableCell>
            <Dialogs />
          </TableRow>
          <TableRow hover="true">
            <TableCell>Email: </TableCell>
            <TableCell align="left">JWaca@gmail.com</TableCell>
            <Dialogs />
          </TableRow>
          <TableRow hover="true">
            <TableCell>Password: </TableCell>
            <TableCell align="left">**********</TableCell>
            <Dialogs />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}