import axios from 'axios'

export default {
    getRequest (url:string) {
        return axios.get(url)
        .then(response => {
            return response.data
        })
        .catch(e => {
            // Capturamos los errores
        })
    }
}

