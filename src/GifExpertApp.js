import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];

  // Que pasa si quiero agregar un elemento mas a arreglo
  // Debemos usar los hooks para controlar ese cambio
  // No se debe modificar directamente el estado del hook
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   // categories.push( [...categories, 'HunterxHunter'] );
  //   setCategories(['HunterXHunter',...categories]); // forma 1 de mutar
  //   // Forma 2 de mutar
  //   setCategories(miArreglo => [...miArreglo, 'Demon Slayer']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map((category, id) => {
            // los keys normalmente son ids de base de datos
            // return <li key={id}>{category}</li>;
            return <GifGrid category={category} key={id}/>;
          })
        }
      </ol>
    </>
  )
};

export default GifExpertApp;