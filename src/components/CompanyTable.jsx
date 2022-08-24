import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from 'react';
import {Box, Toolbar, Typography} from '@mui/material';
import {getCompanyData} from '../company-data-generator';

function CompanyTable() {
  let [rows, setRows] = useState([]);

  useEffect(() => {
    rows = getCompanyData();
    setRows(rows);
  }, []);

  return (
    <Box mt={20} sx={{width: '100%'}}>
      <Paper sx={{width: '100%', mb: 2}}>
        <Toolbar
          sx={{
            pl: {sm: 2},
            pr: {xs: 1, sm: 1},
          }}
        >
          <Typography
            sx={{flex: '1 1 100%'}}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Customer bank details
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{minWidth: 500}}
          >
            <TableHead>
              <TableRow>
                <TableCell width='20%' sx={{fontWeight: 'bold'}}>Company Name</TableCell>
                <TableCell width='20%' align='right' sx={{fontWeight: 'bold'}}>What they do</TableCell>
                <TableCell width='30%' align='right' sx={{fontWeight: 'bold'}}>Currency</TableCell>
                <TableCell width='30%' align='right' sx={{fontWeight: 'bold'}}>Routing number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.currency}</TableCell>
                  <TableCell align="right">{row.routingNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default CompanyTable;