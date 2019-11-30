import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './layout.sass';
export default function LayoutComponent({ children }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="lsiten-content">
      <div className="lsiten-header">
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="inherit"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Home" />
      </Tabs>
      </div>
      <div className="lsiten-main">{children}</div>
    </div>
  );
}
