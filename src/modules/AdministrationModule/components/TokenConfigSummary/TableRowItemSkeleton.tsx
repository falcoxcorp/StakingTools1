import { memo } from 'react'
import { Skeleton, TableCell, TableRow } from '@mui/material'

const TableRowItemSkeleton = () => {

  return (
    <TableRow>
      <TableCell align="right"><Skeleton variant='text' width={'100%'} />    </TableCell>
      <TableCell align="right"><Skeleton variant='text' width={'100%'} /></TableCell>
      <TableCell align="right"><Skeleton variant='text' width={'100%'} /></TableCell>
      <TableCell align="right"><Skeleton variant='text' width={'100%'} /></TableCell>
      <TableCell align="right"><Skeleton variant='text' width={'100%'} /></TableCell>
    </TableRow>
  );

}

export default memo(TableRowItemSkeleton);