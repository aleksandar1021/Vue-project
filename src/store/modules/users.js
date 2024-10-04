import users from "../sources/users.json"
export default {
    state: {
      user: { mail : "guest", role: "unauthorized" },
      users : users
    },
    mutations: {
        addUser(state, user) {
            state.users.push(user);
        },
        deleteUser(state, id) {
            state.users = state.users.filter(user => user.id != id);
        },
        changeUser(state, newUser){
            if(!newUser) {
                state.user.mail = "guest"
                state.user.role = "unauthorized"
                localStorage.removeItem("user")
                return
            }
            state.user.mail = newUser.mail,
            state.user.role = newUser.role
            //console.log(newUser.role)
        },
        updateUserData(state, userObj) {
            let user = state.users.find(u => u.id == userObj.id);
            user.mail = userObj.newEmail;
            user.password = userObj.newPassword;
        }
    },
    getters: {
        role(state) {
            return state.user.role
        },
        users(state) {
            return state.users
        }
    }
}