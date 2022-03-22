// /* eslint-disable react/jsx-key */
// // src/Table.js
// import React from "react";
// import { useTable } from "react-table";
// function Table({ columns, data }) {
//   // Using the state and functions returned from useTable to build your UI
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({
//       columns,
//       data,
//     });

//   // Rendering the UI for  table
//   return (
//     <table {...getTableProps()} border="0.5" cellSpacing={22} cellPadding={28}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row, i) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default Table;



import { ContactsOutlined } from '@material-ui/icons';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Card',
    dataIndex: 'card',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.card - b.card,
  },
  
  {
    title: 'Type',
    dataIndex: 'type',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.type - b.type,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.location.indexOf(value) === 0,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    card: 32,
    location: 'New York No. 1 Lake Park',
    department:'Health',
    type:'physical'
  },
  {
    key: '2',
    name: 'Jim Green',
    card: 42,
    location: 'London No. 1 Lake Park',
    department:'Health',
    type:'physical'
  },
  {
    key: '3',
    name: 'Joe Black',
    card: 32,
    location: 'Sidney No. 1 Lake Park',
    department:'Health',
    type:'physical'
  },
  {
    key: '4',
    name: 'Jim Red',
    card: 32,
    location: 'London No. 2 Lake Park',
    department:'Health',
    type:'physical'
  },
  {
    key: '3',
    name: 'Joe Black',
    card: 32,
    location: 'Sidney No. 1 Lake Park',
    department:'Health',
    type:'physical'
  },
  {
    key: '3',
    name: 'Joe Black',
    card: 32,
    location: 'Sidney No. 1 Lake Park',
    department:'Health',
    type:'physical'
  },
  {
    key: '3',
    name: 'Joe Black',
    card: 32,
    location: 'Sidney No. 1 Lake Park',
    department:'Health',
    type:'physical'
  },

];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

ContactsOutlined
const App = () => {
  return(
    <Table columns={columns} dataSource={data} onChange={onChange}/>
  )
}
export default App;