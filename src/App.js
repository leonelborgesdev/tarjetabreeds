import { TarjetaBreeds } from "./TarjetaBreeds/TarjetaBreeds";
import { TarjetaPerfil } from "./TarjetaPerfil/TarjetaPerfil";
import "./App.css";
import { TarjetaMovible } from "./TarjetaMovible/TarjetaMovible";

function App() {
  return (
    <div className="App">
      <TarjetaMovible />
      <TarjetaPerfil />
      <TarjetaBreeds />
    </div>
  );
}

export default App;
