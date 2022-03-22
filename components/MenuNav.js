import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

const MenuNav = () => {
  // handleClick = e => {
  //   console.log('click ', e);
  // };

    return (
      <Menu
        // onClick={this.handleClick}
        style={{ width: 256 ,height: 600, }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Nexon">
          <Menu.ItemGroup key="g1" title="">
            <Menu.Item key="1" icon={<MailOutlined />} >Transactions</Menu.Item>
            <Menu.Item key="2" icon={<MailOutlined />} >Make Deposit</Menu.Item>
            <Menu.Item key="3"icon={<MailOutlined />} >Withdraw Funds</Menu.Item>
            <Menu.Item key="4" icon={<MailOutlined />} >Send Money</Menu.Item>
          </Menu.ItemGroup>
          {/* <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup> */}
        </SubMenu>
        {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu> */}
        {/* <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu> */}
      </Menu>
    );
  }


export default MenuNav;