import axios from 'axios';
const url = 'http://localhost:8000/users/';

class UserService {
    static getUsers() {
        return new Promise((resolve, reject) => {
            axios.get(url).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    static getUser(userID) {
        return new Promise((resolve, reject) => {
            axios.get(`${url}${userID}`).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    static insertUser(user) {
        console.log("começa insert")
        return new Promise((resolve,reject) => {
            axios.post(url, {
                nome: user.nome,
                userID: user.userID,
                updatesPerDay: 2,
                stories: [],
                followers: []
            }).then(response => {
                console.log('resposta insert',response)
                resolve(response);
            })
            .catch(err => {
                reject(err);
            })
        })

    }

    static updateUser(user) {
        return axios.put(`${url}${user.userID}`, user);
    }

    static deleteUser(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default UserService;