const apiKey = "f1aff6422d2e4390b18fe2e5cd99aefe";
const baseUrl = "https://newsapi.org/v2"


export const getNews = () => {
    return fetch(baseUrl + "/everything?q=bitcoin&apiKey=" + apiKey)
    .then(response=>response.json())
    .then()
}