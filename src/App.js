import './App.css';

import Counter from './components/Counter';
import DropdownMenu from './components/DropdownMenu';
import ColorPicker from './components/ColorPicker';


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
  ];

function App() {
  return (
    <div className="App">
      <h1>React projects</h1>
      <p>counter</p>
      <Counter step={1} />
      <DropdownMenu />
      <ColorPicker colorPickerOptions={colorPickerOptions}/>
    </div>
  );
}

export default App;
