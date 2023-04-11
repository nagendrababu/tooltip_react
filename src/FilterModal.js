import React from 'react';
import './App.css'
function FilterModal(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h3 className="popup-title">Filter Table</h3>
          <span className="popup-close" onClick={props.onClose}>&times;</span>
        </div>
        <div className="popup-content">
          <div className="form-group">
            <label htmlFor="from-date">From Date:</label>
            <input type="date" id="from-date" name="from-date" onChange={props.onFromDateChange} value={props.fromDate} />
          </div>
          <div className="form-group">
            <label htmlFor="to-date">To Date:</label>
            <input type="date" id="to-date" name="to-date" onChange={props.onToDateChange} value={props.toDate} />
          </div>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" onChange={props.onIdChange} value={props.id} />
          </div>
        </div>
        <button className="popup-button" onClick={props.onFilter}>Filter</button>
      </div>
    </div>
  );
}

export default FilterModal;
