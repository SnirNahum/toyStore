import { storageService } from "./async-storage.service.js";
import { httpService } from "./http.service.js";

const USER_KEY = "userDB";
const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser";

export const userService = {
  getLoggedinUser,
  login,
  logout,
  signup,
  saveUserToStorage,
  addActivity,
  //   loginTest,
};

// Demo Data:
// signup({ fullname: 'Babi Joe', username: 'babi', password: '123' })

// login({ username: "babi", password: "123" });

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null);
}

// function login(credentials) {
//   return storageService.query(USER_KEY).then((users) => {
//     const user = users.find((u) => u.username === credentials.username);
//     if (user) {
//       return saveUserToStorage(user);
//     } else {
//       return Promise.reject("Invalid credentials");
//     }
//   });
// }

async function login(credentials) {
  return httpService.post("auth/login", credentials);
}

function logout() {
  httpService.post("auth/logout");
  return Promise.resolve();
}

function signup(credentials) {
  return httpService.post("auth/signup", credentials);
}

function addActivity(activityTxt) {
  const user = getLoggedinUser();

  const activity = {
    txt: activityTxt,
    at: Date.now(),
  };

  user.activities.unshift(activity);

  return storageService.put(USER_KEY, user).then((updatedUser) => {
    saveUserToStorage(updatedUser);
    return updatedUser;
  });
}

function saveUserToStorage(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}
