import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dataAxios from '../constants/axiosData';
import { deleteFormById } from '../redux/actions/Profile';
import { Delete, Edit, Visibility } from '@material-ui/icons';

// const rows = [
//     {
//         "_id": "61b47e739327c5fca9611f7b",
//         "title": "Job Application Form",
//         "description": "Full stack javascript",
//         "fields": [
//             {
//                 "_id": "61b47e739327c5fca9611f7d",
//                 "label": "Name",
//                 "type": "radio",
//                 "value": "houda",
//                 "name": "houda",
//                 "options": [
//                     {
//                         "label": "hi",
//                         "value": "bye",
//                         "_id": "61b47e739327c5fca9611f7e"
//                     },
//                     {
//                         "label": "hi",
//                         "value": "bye",
//                         "_id": "61b47e739327c5fca9611f7f"
//                     }
//                 ],
//                 "createdAt": "2021-12-11T10:33:23.626Z",
//                 "updatedAt": "2021-12-11T10:33:23.626Z",
//                 "__v": 0
//             }
//         ],
//         "createdAt": "2021-12-11T10:33:23.613Z",
//         "updatedAt": "2021-12-11T10:33:23.633Z",
//         "__v": 0
//     },
//     {
//         "_id": "61b47eeb7411e8471bc6c30e",
//         "title": "Job Application Form",
//         "description": "Full stack javascript",
//         "fields": [
//             {
//                 "_id": "61b47eeb7411e8471bc6c310",
//                 "label": "Name",
//                 "type": "radio",
//                 "value": "",
//                 "options": [
//                     {
//                         "label": "hi",
//                         "value": "bye",
//                         "_id": "61b47eeb7411e8471bc6c311"
//                     },
//                     {
//                         "label": "hi",
//                         "value": "bye",
//                         "_id": "61b47eeb7411e8471bc6c312"
//                     }
//                 ],
//                 "createdAt": "2021-12-11T10:35:23.765Z",
//                 "updatedAt": "2021-12-11T10:35:23.765Z",
//                 "__v": 0
//             }
//         ],
//         "createdAt": "2021-12-11T10:35:23.752Z",
//         "updatedAt": "2021-12-11T10:35:23.771Z",
//         "__v": 0
//     },
//     {
//         "_id": "61b480adb19c5dbb1dfbb7f9",
//         "title": "Job Application Form",
//         "description": "Full stack javascript",
//         "fields": [
//             {
//                 "_id": "61b480adb19c5dbb1dfbb7fb",
//                 "label": "Name",
//                 "type": "radio",
//                 "value": "",
//                 "options": [
//                     {
//                         "label": "hi",
//                         "value": "bye",
//                         "_id": "61b480adb19c5dbb1dfbb7fc"
//                     },
//                     {
//                         "label": "hi",
//                         "value": "bye",
//                         "_id": "61b480adb19c5dbb1dfbb7fd"
//                     }
//                 ],
//                 "createdAt": "2021-12-11T10:42:53.816Z",
//                 "updatedAt": "2021-12-11T10:42:53.816Z",
//                 "__v": 0
//             }
//         ],
//         "createdAt": "2021-12-11T10:42:53.803Z",
//         "updatedAt": "2021-12-11T10:42:53.821Z",
//         "__v": 0
//     },
// ];

export default function BasicTable() {
    const [rows, setRows] = useState(null);
    useEffect(() => {
        dataAxios
            .get('/pages/field')
            .then((data) => {
                if (data.status == 200) {
                    setRows(data.data);
                    console.log(data)
                    // dispatch({
                    //   type: FORM_DATA,
                    //   payload: data.data,
                    // });
                }
            })
            .catch((error) => {
            })
    }, [])
    return (
        <TableContainer component={Paper} style={{ marginTop: "80px", marginBottom: "400px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell>Title</TableCell>
                        <TableCell align="right">Description</TableCell>

                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Value</TableCell>

                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row?.page?.title}
                            </TableCell>
                            <TableCell align="right">{row?.page?.description}</TableCell>

                            <TableCell align="right">{row?.name}</TableCell>
                            <TableCell align="right">{row?.value}</TableCell>
                            <TableCell align="right">{row?.createdAt}</TableCell>

                            <TableCell
                                align="right">
                                <Edit
                                // onClick={() => onOpenEdit(dataRow)}
                                />
                                <button onClick={
                                    deleteFormById(row._id)
                                }>
                                    <Delete

                                    />
                                </button>

                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}