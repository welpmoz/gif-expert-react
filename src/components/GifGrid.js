// Elementos que coinciden con una categoria

import { useFetchGifs } from "../hooks/useFetchGifs";

// import { useState, useEffect } from "react";
// import { getGifts } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({category}) => {
  // En cada cambio se vuelve a renderizar/ejecutar todo esto
  // const [count, setCount] = useState(0);
  
  // const [images, setImages] = useState([]);

  const {data, loading} = useFetchGifs(category);

  // Se vuelve a ejecutar a menos que tengan dependencias
  // dependencias vacias [] -> solo se ejecuta una vez. Cuando se rendereiza por primera vez
  // useEffect(() => {
  //   // retorna una promesa por que es async
  //   getGifts(category)
  //     .then(setImages) // equivalente a data => setImages(data) check
  // }, [category]); // si la categoria cambia, vuelve a ejecutar la funcion

  // La desventaja de este tipo de llamadas es que
  // incluso al existir cualquier cambio en hooks
  // se vuelve a llamar
  // getGifts();

  return (
    <>
      <h3>{category}</h3>
      {/* {loading ? 'Cargando...' : 'Data cargada'} */}
      {loading && <p>Loading...</p>}
      {/* <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+1</button> */}
        {/* <ol>
          {
            // O el objeto image se puede desestructura {id, title}
            images.map(image => <li key={image.id}>{image.title}</li>)
          }
        </ol> */}
      <div className="card-grid">
        {
          data.map(img => (
            <GifGridItem
              key={img.id}
              { ...img }
            />
          ))
        }
      </div>
    </>
  );
};