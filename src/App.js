import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './components/MyDocument';
import './App.css';

function App() {
  return (
    <div className="App">
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default App;
