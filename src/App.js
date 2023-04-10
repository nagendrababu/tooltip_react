import logo from './logo.svg';
import './App.css';
import Tooltip from './tooltip';
function App() {
  const imageSrc = 'https://www.example.com/image.png';
  const tooltipText = 'This is a tooltip';
  return (
    <div className="App">
       <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
}

export default App;
