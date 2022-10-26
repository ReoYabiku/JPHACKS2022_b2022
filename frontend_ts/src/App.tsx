import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import {
  Home, Top, Api,
  FireStore, Add, Show,
  SetPath, Visualize, Preprocessing, Model, Predict } from "./pages";
import GenButton from './components/atoms/GenButton';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import About from './components/organisms/About';
import FAQ from './components/organisms/FAQ';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="set_path" element={<SetPath />} />
        <Route path="visualize" element={<Visualize />} />
        <Route path="preprocessing" element={<Preprocessing />} />
        <Route path="Model" element={<Model />} />
        <Route path="Predict" element={<Predict />} />
        <Route path="top" element={<Top />} />
        <Route path="api" element={<Api />} />
        <Route path="firestore" element={<FireStore />}>
          <Route path="add" element={<Add />} />
          <Route path="show" element={<Show />} />
        </Route>
        <Route path="generate" element={<GenButton />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
