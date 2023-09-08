import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';


export default function TableHeader(props) {

    const {valueToOrderBy, orderDirection, handleRequestSort} = props

    const createSortHandler = (property) => (event) => {
       handleRequestSort(event, property) 
    }



    return(
        <TableHead>
            <TableRow>

                <TableCell key="title">
                    <TableSortLabel
                    active={valueToOrderBy === "title"}
                    direction={valueToOrderBy == "title" ? orderDirection: 'asc'}
                    onClick={createSortHandler("title")}
                    >
                        Title
                    </TableSortLabel>
                </TableCell>


 

                <TableCell key="body">
                    <TableSortLabel
                    active={valueToOrderBy === "body"}
                    direction={valueToOrderBy == "body" ? orderDirection: 'asc'}
                    onClick={createSortHandler("body")}
                    >
                        Body
                    </TableSortLabel>
                </TableCell>

            </TableRow>
        </TableHead>
    )
}