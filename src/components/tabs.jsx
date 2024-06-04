import { useState } from 'react';
import PropertyComponent from "@/components/PropertyComponent";


const tabs = [
  { label: 'All', content: <PropertyComponent /> },
  { label: 'Apartment', content: <PropertyComponent params='filter[propertyType.id]=1' /> },
  { label: 'Office', content: <PropertyComponent params='filter[propertyType.id]=2' /> },
  { label: 'Warehouse', content: <PropertyComponent params='filter[propertyType.id]=3' /> },
  { label: 'Parking', content: <PropertyComponent params='filter[propertyType.id]=4' /> },
  { label: 'Commercial', content: <PropertyComponent params='filter[propertyType.id]=5' /> },
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="flex ">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`${
              idx === activeTabIndex
                ? 'border-b-2 border-orange-500 text-orange-500 '
                : 'text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-500'
            } px-2 font-normal py-4 sm:px-6 sm:font-medium focus:outline-none ${
              idx === 3 && 'hidden sm:flex'
            }`}
            onClick={() => setActiveTabIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
