import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


import Counter from './components/Counter';
import ControlledForm from './components/ControlledForm';
import ResponsiveLayout from './components/ResponsiveLayout';
import StudentList from './components/StudentList';
import Childrenprop from './components/Childrenprop';
import DefaultParameters from './components/DefaultParameters';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Uncomment the component you want to test */}

    <Counter />

    {/* <ControlledForm /> */}
    {/* <ResponsiveLayout /> */}
    {/* <StudentList /> */}
    {/* <Childrenprop /> */}
    {/* <DefaultParameters /> */}

  </StrictMode>
);