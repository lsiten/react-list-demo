import React from 'react';
import './layout.sass';
export default function LayoutComponent({ children }) {
  return (
    <div className="lsiten-content">
      <div className="lsiten-header"></div>
      <div className="lsiten-main">{children}</div>
    </div>
  );
}
