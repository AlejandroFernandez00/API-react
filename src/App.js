import React from 'react';
import logo from './logo.svg';
import './App.css';
import fraseAño from './library/library.js';

class App extends React.Component{

  constructor(props){
    super(props)
    this.handlerClick = this.handlerClick.bind(this);
    }
  
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Probando APIS en React con Callback!</h1>
          <p>Mediante el llamado de una librería con un request, un boton "onClick" llama a la funcion callback.</p>
          <p>Click abajo para ver fechas con momentos importantes</p>
          <button onClick={this.handlerClick}>Probar api</button>
        </header>
        
      </div>
    );
  }

    handlerClick(){
      function funcionCallback(datos){
        alert(datos.text)
    }
    fraseAño(funcionCallback);
    }
  }
export default App;
