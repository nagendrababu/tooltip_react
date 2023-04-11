// import logo from './logo.svg';
// import './App.css';
// import Tooltip from './tooltip';
// function App() {
//   const imageSrc = 'https://www.example.com/image.png';
//   const tooltipText = 'This is a tooltip';
//   return (
//     <div className="App">
//        <Tooltip text="This is a tooltip">
//         <button>Hover me</button>
//       </Tooltip>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import FilterModal from './FilterModal';

function App() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [id, setId] = useState('');

  const handleFilter = () => {
    // Handle filter logic here
    setShowFilterModal(false);
  };

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowFilterModal(true)}>Open Filter Modal</button>
      {showFilterModal && (
        <FilterModal
          fromDate={fromDate}
          toDate={toDate}
          id={id}
          onFromDateChange={(e) => setFromDate(e.target.value)}
          onToDateChange={(e) => setToDate(e.target.value)}
          onIdChange={(e) => setId(e.target.value)}
          onFilter={handleFilter}
          onClose={handleCloseFilterModal}
        />
      )}
      {/* Rest of the code */}
    </div>
  );
}

export default App;
