import { FiSearch } from 'react-icons/fi';
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
        <div className="containerInput">
            <input type="text" placeholder="Digite o seu cep..." />
            <button className="buttonSearch">
                <FiSearch size={25} color="#FFF" />
            </button>
        </div>
        <main className="main">
            <h2>CEP: 79003222</h2>
            <span>Rua teste algum</span>
            <span>complemento: Algum complemento</span>
            <span>Vila rosa</span>
            <span>São Paulo - SP</span>
        </main>
    </div>
  );
}

export default App;
