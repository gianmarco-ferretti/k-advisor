import axios from "axios";

const urlAPI = 'https://run.mocky.io/v3/61a70c98-751c-4e9c-b53b-a2f2752be0f6'

export const getRistoranti = () => {
    return axios.get(urlAPI)
}

/*
export const getPostsById = (idUser) => {
    return axios.get(`http://jsonplaceholder.typicode.com/users/${idUser}/posts`)
}
*/
