import axios from 'axios'


async function createOrder(request) {
    axios.post("/api/orders/", request)
        .then(res => console.log(res))
}

async function getAllOrders() {
    let data = await axios.get("/api/orders");

    return data
}

async function getOrder(id) {
    let data = await axios.get(`/api/orders/${id}`);

    return data;
}

async function deleteOrder(id) {
    await axios.delete(`/api/orders/${id}`);

}

export {createOrder, getAllOrders, getOrder, deleteOrder}