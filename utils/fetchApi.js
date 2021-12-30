import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '1ce27c44e1mshec6e84516b4e10fp13cae8jsnac9b6517835b'
        }
    })

    return data;
}