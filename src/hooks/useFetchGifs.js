// los hooks pueden tener estado
import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

// al cambiar el componente tiene el mismo comportamiento
// es decir se vuelve a ejecutar esto
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  // setTimeout(() => {
  //   setState({
  //     data: [1,2,3],
  //     loading: false
  //   });
  // }, 10000);

  useEffect(() => {
    getGifts(category)
      .then(imgs => {
        // setTimeout(() => {
          setState({
            data: imgs,
            loading: false
          });
        // }, 5000);
        // setState({
        //   data: imgs,
        //   loading: false
        // });
      });
  }, [category]);

  return state; // {data:[], loading:true}
}