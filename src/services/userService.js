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
        const usuario = this.getUser(user.userID);
        if (!usuario) {
            return axios.post(url, {
                nome: user.nome,
                userID: user.userID,
                updatesPerDay: user.updatesPerDay,
                stories: user.stories,
                followers: user.followers
            })
        }
        else {
            return null;
        }

    }

    static updateUser(user) {
        return axios.put(`${url}${user.userID}`, user);
    }

    static deleteUser(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default UserService;