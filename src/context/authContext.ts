import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const checkAuth = async (setAuth) => {
    const token = await AsyncStorage.getItem('id');
    if (token !== null) {
        setAuth(true);
    } else {
        setAuth(false);
    }
}

export const createUser = (username, email, password) => {
    axios.post('https://dummyjson.com/users/add', {
        username: username,
        email: email,
        password: password
    })
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
}

export const loginUser = async (username, password, setAuth) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://dummyjson.com/auth/login',
            headers: { 'Content-Type': 'application/json' },
            data: {
                username: username,
                password: password,
                // expiresInMins: 60, // optional
            }
        }); 

        await AsyncStorage.setItem("id", response.data.token);
        console.log(`data: ${response.data}`);
        console.log(`token: ${response.data.token}`);

        // Call checkAuth again after successful login
        checkAuth(setAuth);

    } catch (error) {
        console.error(error);
        console.log('bota a porra de um usuario que existe krl')
    }
}




export const logout = async (setAuth) => {
    try {
        await AsyncStorage.removeItem('id');
        setAuth(false);
        console.log('Logout successful!');
    } catch (e) {
        console.error('Logout failed!');
    }
}


