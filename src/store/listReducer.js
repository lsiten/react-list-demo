// 测试数据
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const initialState = {
  list: rows,
  id: 0
};
export const actionTypes = {
  setList: 'list.setList',
};
export default function listReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.setList:
      return {
        ...state,
        list: payload
      };
    default:
      return { ...state };
  }
}
