import axios from 'axios'



const DOMAINE_URL = "http://127.0.0.1:8000"

const REGISTER_URL = `${DOMAINE_URL}/api/v1/auth/users/`
const LOGIN_URL = `${DOMAINE_URL}/api/v1/auth/jwt/create/`
const ACTIVATE_URL = `${DOMAINE_URL}/api/v1/auth/users/activation/`
const RESET_PASSWORD_URL = `${DOMAINE_URL}/api/v1/auth/users/reset_password/`
const RESET_PASSWORD_CONFIRM_URL = `${DOMAINE_URL}/api/v1/auth/users/reset_password_confirm/`


// Register User

const register = async (userData) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
            // Content-Type: application/json
        }
    }
    const response = await axios.post(REGISTER_URL, userData, config)

    return response.data
}

const authService = {register}

export default authService