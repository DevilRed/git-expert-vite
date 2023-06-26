export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YLTVm8TLRO6AwL6rF6pzUSUtgp2Mtyaz&q=${encodeURI(
    category
  )}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};