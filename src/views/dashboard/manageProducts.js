import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DashLayout from "../../components/dashLayout"
import { useDispatch,useSelector } from "react-redux";
import {getAllProductActions} from '../../redux/product/actions';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

const Products=()=>{
    const dispatch=useDispatch();
    const {products,isFetching}=useSelector((state)=>state?.product);
    useEffect(()=>{
        getAllProductActions()(dispatch)
    },[])
    console.log(products)
    return (
        <DashLayout>
      <h1> Product Management</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>N0</StyledTableCell>
              <StyledTableCell align="right">Product-Name</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row. name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.description}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                {/* <StyledTableCell align="right">{row.productPicture[0]}</StyledTableCell> */}
                {/* <StyledTableCell align="right">{row.email}</StyledTableCell> */}
                {/* <StyledTableCell align="right">
                  {row.isActive ? "available" : "not available"}
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashLayout>
  );
};

  export default Products;