import React, { useState } from 'react'
import { Table, TableCell, TableHead, TableRow, TablePagination, TableSortLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        overflowX: "auto",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    table: {
        minWidth: 1000,
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
    TblPagination: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    }
}))

export default function useTable(records, headCells, filterFn) {
    const classes = useStyles();
    const pages = [5, 10, 15];
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()

    const TblContainer = ({ children }) => {
        return (
            <div className={classes.root}>
                <Table className={classes.table}>
                    {children}
                </Table>
            </div>
        )
    }

    const TblHead = (props) => {

        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === "asc";
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId)
        }

        return (
            <TableHead>
                <TableRow>
                    <TableCell>
                        STT
                    </TableCell>
                    {
                        headCells.map(headCell => (
                            <TableCell
                                align="center"
                                key={headCell.id}
                                sortDirection={orderBy === headCell.id ? order : false}>
                                {headCell.disableSorting ? headCell.label :
                                    <TableSortLabel
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order : 'asc'}
                                        onClick={() => { handleSortRequest(headCell.id) }}>
                                        {headCell.label}
                                    </TableSortLabel>
                                }
                            </TableCell>))
                    }
                    <TableCell align="center">
                        Thao t??c
                    </TableCell>
                </TableRow>
            </TableHead>
        )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const hangdleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    }

    const TblPagination = () => (
        <TablePagination
            component="div"
            page={page}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count={records.length}
            className={classes.TblPagination}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={hangdleChangeRowsPerPage}
            labelRowsPerPage="s??? d??ng tr??n trang"
        />
    )

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy))
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }


    return ({
        page,
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    });
}
