import React, {useState, useEffect, useCallback} from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRow as deleteRowAction } from '../../store/listAction'
import './index.sass';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';

export default function List() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const list = useSelector(state => state.list.list);
  const getData = useCallback(() => {
    setRows(list)
  }, [list, setRows])

  useEffect(() => {
    getData()
    return () => null
  }, [getData])
  // 详情
  const goToDetail = name => {
    history.push({ pathname: `/list/detail/${name}`})
  }
  // 删除
  const deleteRow =name => {

    compose(dispatch, deleteRowAction)(rows.filter(item => item.name !== name))
  };
  return (
    <Paper className="lsiten-root">
      <Table className="lsiten-table" aria-label="simple table">
        <TableHead className="lsiten-table-head">
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <Button className="lsiten-right-15" variant="contained" color="primary" size="small" onClick={() => {goToDetail(row.name)}}>
                  detail
                </Button>
                <Button variant="contained" color="primary" size="small" onClick={() => {deleteRow(row.name)}}>
                  delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}