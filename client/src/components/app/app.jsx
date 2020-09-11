import React from 'react';
import './app.css';
import TextEditor from '../Editor/TextEditor';

const App = () => {
  return (
    <div>
      <TextEditor placeholder={"Write something.."} />
    </div>
  );
}

export default App;
