export const getGifs = async (category) => {
    const API_KEY = 'GWHTqPdAdBYYExo517GXGa2uHjX0eaPF';
    const limit = 10;

    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${API_KEY}`;

    const resp = await fetch(apiUrl);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}