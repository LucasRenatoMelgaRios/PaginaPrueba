import { useState } from "react";
import { MyRouters } from "./routes/Router";

function App() {
  const [selectedSerie, setSelectedSerie] = useState(null); // Estado para almacenar la serie seleccionada

  return (
    <MyRouters
      selectedSerie={selectedSerie} // Pasar la serie seleccionada a los enrutadores
      setSelectedSerie={setSelectedSerie} // Pasar la función para actualizar la serie seleccionada
    />
  );
}

export default App;
