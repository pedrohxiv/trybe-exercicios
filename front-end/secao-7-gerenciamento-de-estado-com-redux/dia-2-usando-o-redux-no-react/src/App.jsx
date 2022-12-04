import React from 'react';
import TrafficSignal from './components/TrafficSignal';
import './App.css';
import Cars from './components/Cars';

export default function App() {
  return (
    <main>
      <TrafficSignal />
      <Cars />
    </main>
  );
}
