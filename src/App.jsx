import { Cards } from "./components/Cards";

function App() {

  let data = {
    "waifus": [
      {
        "name": "Chloe Park",
        "img": "https://i.pinimg.com/736x/08/2c/9d/082c9deed067cd9e4799c90e0ed04262.jpg",
        "id": 1,
        "description": "Vicepresidenta del club de teatro",
        "rol" : "estudiante"
      },

      {
        "name": "Emma Kim",
        "img": "https://i.pinimg.com/736x/3f/bf/e1/3fbfe1d36c252ffc8b1820d3c4094ff7.jpg",
        "id": 2,
        "description": "Miembro del club de teatro",
        "rol" : "estudiante"
      },
      {
        "name": "Yelena",
        "img": "https://i.pinimg.com/736x/2e/3b/cd/2e3bcd58335be6276ea552cc89260d7d.jpg",
        "id": 3,
        "description": "Prosora del club de teatro",
        "rol" : "profesora"
      },
      {
        "name": "Hanna",
        "img": "        https://i.pinimg.com/564x/60/11/07/601107f6fba4a06f20c340d5aea0dc1d.jpg",
        "id": 4,
        "description": "Presidenta del club de teatro",
        "rol" : "estudiante"
      },
      {
        "name": "Gina",
        "img": "https://i.pinimg.com/736x/cb/74/18/cb74183162f97338ae0c09b7b2f68724.jpg",
        "id": 5,
        "description": "Una waifu que todos conocen",
        "rol" : "estudiante"
      },
      {
        "name": "Emily",
        "img": "https://i.pinimg.com/736x/d8/f1/46/d8f1460a2d0c83293f4d9a716e5a5743.jpg",
        "id":6,
        "description" :"La favorita de mocoloco",
        "rol" : "estudiante"
      },
      {
        "name": "Emily 2",
        "img": "https://i.pinimg.com/736x/5d/5d/5a/5d5d5aad66abd179dc90c4318d948321.jpg",
        "id":7,
        "description" :"La pelirroja de cirlces zzzz",
        "rol" : "estudiante"
      },
      

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