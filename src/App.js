import { TarjetaBreeds } from "./TarjetaBreeds/TarjetaBreeds";
import { TarjetaPerfil } from "./TarjetaPerfil/TarjetaPerfil";
import "./App.css";
import { TarjetaMovible } from "./TarjetaMovible/TarjetaMovible";
import { PerfilCircular } from "./PerfilCircular/PerfilCircular";

function App() {
  return (
    <div className="App">
      <PerfilCircular />
      <TarjetaMovible />
      <TarjetaPerfil />
      <TarjetaBreeds />
    </div>
  );
}

export default App;
