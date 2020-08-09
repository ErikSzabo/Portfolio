import React from 'react';
import './DashboardList.scoped.css';

const DashboardList = ({ items, onItemClick }) => {
  return (
    <div className="dashboard__items">
      {items.map((item, index) => (
        <div key={index} className="dashboard__item">
          {item.name}
          <i
            onClick={() => {
              onItemClick(item);
            }}
            className="fa fa-pencil-square-o fa-2x"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardList;
