import { Cards } from "./components/Cards";

function App() {

  let data = {
    "waifus": [
      {
        "name": "Chloe Park",
        "img": "https://i.pinimg.com/736x/08/2c/9d/082c9deed067cd9e4799c90e0ed04262.jpg",
        "id": 1,
        "description": "Vicepresidenta del club de teatro"
      },

      {
        "name": "Emma Kim",
        "img": "https://i.pinimg.com/736x/3f/bf/e1/3fbfe1d36c252ffc8b1820d3c4094ff7.jpg",
        "id": 2,
        "description": "Miembro del club de teatro"
      },
      {
        "name": "Yelena",
        "img": "https://i.pinimg.com/736x/2e/3b/cd/2e3bcd58335be6276ea552cc89260d7d.jpg",
        "id": 3,
        "description": "Prosora del club de teatro"
      },
      {
        "name": "Hanna",
        "img": "        https://i.pinimg.com/564x/60/11/07/601107f6fba4a06f20c340d5aea0dc1d.jpg",
        "id": 4,
        "description": "Presidenta del club de teatro"
      },
      {
        "name": "Desconocida",
        "img": "https://i.pinimg.com/736x/cb/74/18/cb74183162f97338ae0c09b7b2f68724.jpg",
        "id": 5,
        "description": "Nideah"
      },
      {
        "name": "Emily",
        "img": "https://i.pinimg.com/736x/af/fc/33/affc33bfddf1b94d58f05610b1ce5a3e.jpg",
        "id":6,
        "description" :"La favorita de mocoloco"
      }

    ]
  }

  let width = 50;
  return (
    <>
      <Cards 
      data={data}
      />
    </>
  )
}

export default App;