import React from 'react'
import NavigationItem from './NavigationItem.jsx'

import './index.scss';

function Navigation ({ options }) {
  return (
    <div className="navigation custom-scroll">
      {options.map((o, index) => 
        <NavigationItem
          key={`navigation-item-${index}`}
          name={o.name}
          selected={window.location.pathname.toLowerCase().slice(1) === o.name.toLowerCase()}
        />
      )}
    </div>
  );
}

export default Navigation
