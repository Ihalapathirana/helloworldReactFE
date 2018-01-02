
import React from 'react';


export default ({ name, onClickButton, onNameTextChange
     }) => (<div className="App">
        <h1>Hello World</h1>
        <label>Name</label>
          <input type = "text" 
          id ="nameText" 
          onInput={({ target }) => onNameTextChange(target.value)}
          />
          
          <button type="button" onClick={onClickButton}>Click</button>
      </div>
  );
