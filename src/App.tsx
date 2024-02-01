import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './component/MyButton';
import MyForm from './component/MyForm';
import {CounterProvider} from './provider/Counter';
function App() {
  return (
    <>
    <MyButton onClick={() => alert('test')} text='click' disable={false} ></MyButton>
    <hr></hr>
    <MyForm></MyForm>
    <hr></hr>
    <h1>Use Context provider</h1>
    <CounterProvider>
    <MyButton text={'Counter'}></MyButton>
    </CounterProvider>
    </>
  );
}

export default App;
