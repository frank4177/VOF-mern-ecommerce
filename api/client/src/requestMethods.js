import axios from "axios";

const BASE_URL = "https://vofshoes.herokuapp.com/api";

// const BASE_URL = "https://vofshoes.herokuapp.com/api"

const TOKEN = "";
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.tokenkey

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTlmYTI1OWEwNjhiZDMzZGM5Yzk3YzIiLCJpYXQiOjE2NDY1MjIwMzksImV4cCI6MTY0NjY5NDgzOX0.6ML-zeXv9x-MPiVJtJAs0sx5_2zAK6FyiOVBpZMsudM"

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
