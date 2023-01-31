import './App.css';
import Block from './Block';

var entries = {
  "name": "John Currado",
  "email": "jjcurrado@gmail.com",
}
function App() {
  return (
    <div className='App' >
      <Block content={entries} /> 
    </div>
  );
}

export default App;
