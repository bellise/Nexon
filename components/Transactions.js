import React from "react";
import Table from "./Table";
import { useMemo } from "react";
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from "antd";
import { Button } from 'antd';


const getData = () => [
  {
    image:"/pic1.jpg",
    name: "Jane Cooper",
     email: "jane.cooper@example.com",
    card: "96313",
    department: "Optimization",
    status: "Physical",
    balance: "$200.2",
    location:"Los vegas",
      
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    card: "96313",
    department: "Intranet",
    status:"Physical",
    balance: "$200.2",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    location:"Los vegas"
    },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    card: "96313",
    department: "Directives",
    status: "Physical",
    balance: "$200.2",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      location:"Los vegas"
    },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    card: "96313",
    department: "Program",
    status: "Physical",
    balance: "$200.2",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    location:"Los vegas"
    },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    card: "96313",
    department: "Mobility",
    status: "Physical",
    balance: "$200.2",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      location:"Los vegas"
    },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    card: "96313",
    department: "Security",
    status: "Physical",
    balance: "$200.2",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    location:"Los vegas"
    },
];

function App() {
  const columns = React.useMemo(
    () => [
      {

        Header:"Image",
        accessor:"image",
      },
      {
        Header: "Holder",
        accessor: "name",
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
        Header: "Card",
        accessor: "card",
      },
      {
        Header: "Type",
        accessor: "status",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
      {
        Header: "Department",
        accessor: "department",
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      },
      {
        Header: "Location",
        accessor: "location",
       
    onFilter: (value, record) => record.location.indexOf(value) === 0,
      }
    ],
    
    []
  );

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const data = React.useMemo(() => getData(), []);
  
  const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);
function handleMenuClick(e) {
  console.log('click', e);
}


  return (
    <>
   
    <Row>
    <Col span={18} push={8}style={{fontSize:30, marginTop:25,fontSmooth:'bold',flexDirection:'row'}}>
    <div style={{color:'black',justifyItems:'center',alignItems:'center'}}>
     <Search placeholder="Cards search" onSearch={onSearch} style={{ width: 200 }} />
    <Button style= 
    {{backgroundColor:'light grey'}} onClick={onSearch}>New Card</Button>
    </div>
    </Col>

    <Col span={6} pull={17}>
    <p style={{fontSize:30, marginTop:25,fontSmooth:'bold'}}>Cards</p>
    </Col>
  </Row>,
  

      <div>
        <Table columns={columns} data={data} onChange={onChange} />
      </div>
    </>
  );
}

export default App;