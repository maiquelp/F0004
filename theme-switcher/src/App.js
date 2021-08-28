import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';


function App() {

  const [state, setState] = useState({theme: themes.light})

  function toggleTheme(){
    setState({ theme: state.theme === themes.dark ? themes.light : themes.dark})
  }

  return (
    <>
      <ThemeContext.Provider value={state}>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {theme => <ThemeProvider theme={theme}><TodoList /></ThemeProvider>}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
