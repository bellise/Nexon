import { Table, Tag, Space } from 'antd';
import transaction from './data'
const { Column, ColumnGroup } = Table;



const Transactions = () => {
    return(
      <div>
       {transaction ?.map((info) => (
       // eslint-disable-next-line react/jsx-key
       <Table>
      <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    </ColumnGroup>
  </Table>
    ))}
      </div>

    )
}
export default Table;