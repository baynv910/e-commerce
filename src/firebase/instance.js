import axios from 'axios'
export default axios.create({
    baseURL: "https://daongocseafood.firebaseio.com/"
})