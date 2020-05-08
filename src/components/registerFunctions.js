import axios from 'axios'
import decode from "jwt-decode"


const tokenSaver = response => {
  localStorage.setItem('usertoken', response.headers.authorization)
  return response
}

/*
headers: getHeaders() when authenticating this is third argument for puts, and gets
*/
const getHeaders = () => {
  const authToken = localStorage.getItem('token')

const loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getHeaders(); // Getting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  };



const logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("token");
  };



  if(!authToken){
    throw new Error("Error there is not authToken")
  }
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': authToken
  }
  return headers
}


export const register = newUser => {
  return axios
    .post("/signup", {
      email: newUser.email,
      password: newUser.password,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      license_number: newUser.license_number,
      age: newUser.age
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('/login', {
      email: user.email,
      password: user.password
    })
    .then(tokenSaver)
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      headers: { Authorization: ` ${this.getHeaders()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
