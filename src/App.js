import './App.css';
import Block from './Block';


//TODO:
// - fix trailing comma after block
// - add array character for block
// - add fade in transition for initial collapsed block
// - add fade in transition for each item in a block

var entries = {
  "name": "\"John Currado\"",
  "email": "\"jjcurrado@gmail.com\"",
  "phone" : "\"3154809991\"",
  "education": <Block content={
    {
      "school": "\"RIT\"",
      "degree": "\"Bachelor's of Science\"",
      "major": "\"Computation Mathematics\"",
      "minor": "\"Computer Science\""
    }
  } />
}
function App() {
  return (
    <div className='App' >
      <Block size={"fullscreen"} content={entries} /> 
    </div>
  );
}

export default App;
