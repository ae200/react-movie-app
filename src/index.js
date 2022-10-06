import React from 'react';
import {createRoot} from 'react-dom/client'
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import './styles/index.css'

function App(){
  return (
    <main  id='home'>
      <Navbar/>
      <Welcome/>
    </main>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App/>);