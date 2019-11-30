import React from 'react';
import {
  Menu, Dropdown, Icon, Avatar
} from 'antd';
import { useHistory } from 'react-router-dom';
import { logoutCookie } from '../utils/cookie';
import api from '../api';

export default function UserButton() {
  const history = useHistory();
  const onClick = async () => {
    await api.logout({});
    logoutCookie();
    history.push('/login');
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">logout</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <div style={{ cursor: 'pointer' }}>
        <Avatar size="small" icon="user" style={{ marginRight: 14 }} />
        <span>admin </span>
        <Icon type="down" />
      </div>
    </Dropdown>
  );
}
