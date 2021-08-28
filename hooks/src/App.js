import { useEffect, useState } from "react";

function App() {
  // const [repositories, setRepositories] = useState([]);

  // useEffect(() => {
  //   async function apiFetch(){
  //     try {
  //       const res = await fetch('https://api.github.com/users/maiquelp/repos');
  //       const data = await res.json();
  //       setRepositories(data);
        
  //     } catch (err) {
  //       console.log('erro ao consultar api: ' + err);
  //     }
  //   }
  //   apiFetch();
  // },[]);

  // useEffect(() => {
  //   const filtered = repositories.filter(e => e.favorite);
  //   document.title = `favoritos = ${filtered.length}`
  // },[repositories])

  // function handleFavorite(id){
  //   const newRepositories = repositories.map(e => {
  //     return e.id === id ? {...e, favorite: !e.favorite} : e
  //   });

  //   setRepositories(newRepositories);
  // }

  // return (
  //   <>
  //     <ul>
  //       {repositories.map(e => (
  //           <li key={e.id}>
  //             {e.name}
  //             {e.favorite && <span>(Favorito)</span>}
  //             <button onClick={() => handleFavorite(e.id)}>Favoritar</button>
  //           </li>
  //       ))}
  //     </ul>
  //   </>
  // );
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);
    return () => navigator.geolocation.clearWatch(watchId);
  },[]);

  function handlePositionReceived({coords}) {
    const {latitude, longitude} = coords;
    setLocation({latitude, longitude});
  }

  return (
    <>
      latitude: {location.latitude} <br />
      latitude: {location.longitude} <br />
    </>
  )
}

export default App;
