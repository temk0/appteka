import axios from 'axios'

async function getAllItems(){
    return axios.get("/api/items")
        .then(response =>{
            return response.data;
        })
}

async function searchItems(search){
    return axios.get("/api/items", {params: {search: search}})
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
    return await axios.delete(`/api/items/${id}`)
        .then(response =>{
            return response.data;
        })
}

async function addItem(item) {
    return axios.post("/api/items/addItem", item)
}

async function editItem(item) {
    return axios.put(`/api/items/${item.id}`, item).then(res=> console.log(res))
}

export {getAllItems, searchItems, addItem, getOneItem, deleteItem, editItem}