import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabContentArray = [
    {
      tabTitle: (
        <li
          className={activeTab === 0 ? 'is-active' : ''}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </li>
      ),
      tabContent: <div>Tab 1 contents</div>,
    },
    {
      tabTitle: (
        <li
          className={activeTab === 1 ? 'is-active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </li>
      ),
      tabContent: <div>Tab 2 contents</div>,
    },
  ];

  return (
    <div>
      <ul>
        {tabContentArray.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div>{tabContentArray[activeTab].tabContent}</div>
    </div>
  );
};

export default Tabs;
