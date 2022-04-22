import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MakeupPage from './pages/MakeupPage';

function App() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/makeup/:name', element: <MakeupPage /> },
  ]);
  return routes;
}

export default App;
