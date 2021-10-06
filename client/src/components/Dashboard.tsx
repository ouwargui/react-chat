import React from 'react';
import Sidebar from './Sidebar';

interface dashboardParams {
  id: string;
}

const Dashboard: React.FC<dashboardParams> = ({id}) => {
  return (
    <div className="d-flex" style={{height: '100vh'}}>
      <Sidebar id={id} />
    </div>
  );
};

export default Dashboard;
