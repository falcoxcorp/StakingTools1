import { useMemo, useState } from "react";
import Box from '@mui/material/Box';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import EnhancedTableHead from "./TableHeader/EnhancedTableHead";
import { useTableDense, useTableOrder, useTableSelection } from "./hooks";
import { EnhancedTableRows, LoadingRows } from "./Rows";
import { HeadCell } from "./interfaces";
import { ErrorResult } from "../../components/ErrorResult";
import { NotSearchResult } from "../../components/NotSearchResult";


type EnhancedTableProps = {
    data: any[],
    columns: HeadCell[],
    select?: boolean,
    total: number,
    isLoading?: boolean,
    isError?: boolean,
    error?: any,
    rowCount?: number
}

export default function Table({
    columns,
    data = [],
    total,
    isLoading,
    error,
    select = false,
    rowCount = 10
}: EnhancedTableProps) {
    const { dense } = useTableDense();
    const { order, orderBy, onChangeOrder } = useTableOrder();
    const { selected, handleSelectAll, handleSelectionClick, isSelected } = useTableSelection(data);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowCount);

    // @ts-ignore
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const accessibleRows = useMemo(() => columns, [columns]);

    if (error) {
        return (
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} mt={4}>
                <ErrorResult />
            </Box>
        );
    }
    if (!isLoading && !data?.length) {
        return (
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} mt={4}>
                <NotSearchResult />
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%' }}>
            <TableContainer>
                <MuiTable
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                >
                    <EnhancedTableHead
                        select={select}
                        headCells={accessibleRows}
                        numSelected={selected.length}
                        order={order}
                        isLoading={isLoading}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAll}
                        onRequestSort={onChangeOrder}
                        rowCount={data.length}
                    />
                    <TableBody>
                        {isLoading && <LoadingRows headCellsSize={accessibleRows.length} select={select} />}
                        {!isLoading && data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any, index: number) => {
                                // @ts-ignore
                                const id = row._id || row.id;
                                const isItemSelected = isSelected(id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        // hover
                                        // onClick={(event) => select && handleSelectionClick(event, id)}
                                        // role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={id}
                                        selected={isItemSelected}
                                    >
                                        {select &&
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    onChange={(event) => select && handleSelectionClick(event, id)}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                        }
                                        <EnhancedTableRows row={row} headCells={accessibleRows} page={page} rowsPerPage={rowsPerPage} />
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            {!isLoading && <TablePagination
                rowsPerPageOptions={[5, 10, 15, 30]}
                component="div"
                count={total}
                rowsPerPage={rowsPerPage}
                page={page || 0}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            }
        </Box>
    );
}
