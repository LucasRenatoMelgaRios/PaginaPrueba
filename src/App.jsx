import { useState } from "react";
import { MyRouters } from "./routes/Router";

function App() {
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [selectedObra, setSelectedObra] = useState(null); // Estado para almacenar la obra seleccionada

  return (
    <MyRouters
      selectedSerie={selectedSerie}
      setSelectedSerie={setSelectedSerie}
      selectedObra={selectedObra} // Pasar la obra seleccionada a los enrutadores
      setSelectedObra={setSelectedObra} // Pasar la función para actualizar la obra seleccionada
    />
  );
}

export default App;
