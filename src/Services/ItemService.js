import axios from 'axios'

async function getAllItems(){
    return axios.get("/api/items")
        .then(response =>{
            return response.data;
        })
}

async function getOneItem(id) {
    return axios.get(`/api/items/${id}`)
        .then(response =>{
            return response.data;
        })
}

async function deleteItem(id) {
    return axios.delete(`/api/items/${id}`)
        .then(response =>{
            return response.data;
        })

}

export {getAllItems, getOneItem, deleteItem}