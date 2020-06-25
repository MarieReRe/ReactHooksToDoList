  
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme.js';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
