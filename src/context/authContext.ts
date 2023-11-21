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

        const userInfo = {
            id: response.data.id,
            username: response.data.username,
            email: response.data.email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            gender: response.data.gender,
            image: response.data.image,
        };
            await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

            
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


