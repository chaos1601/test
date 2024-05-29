// App is the main component
/*
  Browsers can't 'read' JSX

  Conventions
    - All elemnets must be closed
    - Empty elements (br, hr, img, input...) must be closed with a slash (/)
    - JSX uses camelCase style (onClick, tabIndex...)
    - Use curly braces to include literal JavaScript
    - Use double curly braces with objects
*/

// Spoiler: this is a hook (more about this later. Don't worry)
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const handleInput = (event) => {
    setUserName(event.target.value);
  }

  let message = <h2>Welcome to React, <span>{userName}</span></h2>;

  return (
    <main>
      <div>
        {message}
        <input
          type='text'
          className='input'
          placeholder='User name'
          onChange={handleInput}
        />
      </div>
    </main>
  );
}

export default App;