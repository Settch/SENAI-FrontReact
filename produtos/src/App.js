import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">

      <Card nome={"Computador"} preco={"R$ 50.00"}/>
      
      <Card nome={"Celular"} preco={"R$ 20.00"}/>

      <Card nome={"Manga"}/>

    </div>
  );
}

export default App;
