import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

export async function signup(data){
    delete data.ConfirmPassword;
    const response = await axios.post(`${BASE_URL}/signup`, data);
    return response;
}

export async function signin(data){    
    const response = await axios.post(`${BASE_URL}/signin`, data);
    return response;
}
