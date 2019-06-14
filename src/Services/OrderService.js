import axios from 'axios'


async function createOrder(request) {
    axios.post("/api/orders/",request)
        .then(res => console.log(res))
}

export {createOrder}