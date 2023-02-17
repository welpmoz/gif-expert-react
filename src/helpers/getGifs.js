export const getGifts = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=t0Q0K9HS0OcJqir1CPXU6AUhEGAusCAV&q=${ encodeURI(category) }&limit=10`;
  // const url = "https://api.giphy.com/v1/gifs/search?api_key=t0Q0K9HS0OcJqir1CPXU6AUhEGAusCAV&q=Rick+and+Morty&limit=10";
  const resp = await fetch(url);
  // const { data } = await resp.json();
  // console.log(resp.text());
  const { data } = await resp.json();
  // console.log(data);

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    };
  });

  // console.log(gifs);
  // debe estar fuera
  // setImages(gifs);
  return gifs;
};