import React from 'react'

import './App.css';

import { Footer, Blog, Possibility, Features, TestApp, Header} from './containers'
import { CTA, Brand, Navbar } from './Components'

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <TestApp />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);
export default App
