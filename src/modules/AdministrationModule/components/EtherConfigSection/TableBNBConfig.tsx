import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { memo } from 'react'
import { ChildrenProps } from '../../../../common/types';

const TableBNBConfig = ({ children }: ChildrenProps) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">Dirección</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Precio servicio</TableCell>
            <TableCell align="center">Balance mínimo</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default memo(TableBNBConfig);