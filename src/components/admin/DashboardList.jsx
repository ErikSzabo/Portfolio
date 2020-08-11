import React from 'react';
import './DashboardList.scoped.css';

const DashboardList = ({ items, onItemClick, onItemDelete }) => {
  return (
    <div className="dashboard__items">
      {items.map((item, index) => (
        <div id={item._id} key={index} className="dashboard__item">
          {item.name}
          <div className="dashboard__buttons">
            <i
              onClick={() => {
                onItemClick(item);
              }}
              className="fa fa-pencil-square-o fa-2x"
              aria-hidden="true"
            />
            <i
              onClick={() => {
                onItemDelete(item);
              }}
              className="fa fa-trash-o fa-2x"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardList;
