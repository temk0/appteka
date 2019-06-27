import axios from 'axios'


async function getTicket(id){
    return axios.get(`/api/orders/${id}`)
        .then(respones => {
            return respones.data;
        })
}

