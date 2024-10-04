<template>
    <div class="form">
        <h2 v-if="this.$route.params.id==null">Insert new User</h2>
        <h2 v-else>Edit user</h2>
        <form>
            <div class="form-group">
                <textField v-model="mail" label="Enter new user email" id="email" type="email" hint="Email must contains @ and minimun 10 letters"/>
            </div>
            <div class="form-group">
                <textField v-model="password" label="Enter new user password" id="password" :type="passwortViewType" hint="Password must contains minimun 8 cahracters"/>
            </div>
            <div class="form-group">
                <textField v-model="rePassword" label="Repeat password" id="rePassword" :type="passwortViewType" hint="Passwords must match"/>
                <p @click="viewPassword" class="text-danger">{{ textForViewPassword }}</p>
            </div>
            <div v-if="errors" class="alert alert-danger" v-html="errors"></div>
            <button v-if="this.$route.params.id==null" @click="addNewUser" type="button" class="btn btn-primary">Insert user</button>
            <button v-else @click="editUser" type="button" class="btn btn-primary">Edit user</button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import textField from "../components/TextField.vue"
    export default{
        name : "formComponent",
        data(){
            return{
                mail : "",
                password : "",
                rePassword : "",
                errors : "",
                passwortViewType : "password",
                textForViewPassword : "See passwords"
            }
        },
        components : {
            textField
        },
        computed : {
            ...mapGetters(['users', 'role'])  
        },
        mounted(){
            if(this.$route.params.id){
                let user = this.users.find(x => x.id == this.$route.params.id)       
                this.mail = user.mail
                this.password = user.password
                this.rePassword = user.password
            }
            if(this.role != 'admin') {
                this.$router.push("/signin")
            }
        },
        methods : {
            validateData(type){
                this.errors = "";

                const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
                let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                if(!this.mail){
                    this.errors += "Email is required!<br>"
                }else {
                    if(!emailRegex.test(this.mail)){
                        this.errors += "Email must contain @ and at least 10 characters!<br>"
                    }
                }

                if(!this.password){
                    this.errors += "Password is required!<br>";
                }else{
                    if(!passwordRegex.test(this.password)){
                        this.errors += "The password must contain at least one number, one capital letter and a minimum of 8 characters!<br>"
                    }
                }

                if(this.password != this.rePassword || this.password == ""){
                    this.errors += "Passwords must match!<br>";
                }

                if(this.errors != ""){
                    return false
                }

                if(type=='add'){
                    let ifUserExist = this.users.find(x=>x.mail == this.mail)
                    if(ifUserExist != undefined){
                        this.errors += "User already exists!<br>"
                        return false
                    }
                }
                return true
            },
            addNewUser(){
                if(this.validateData('add')){
                    let maxId = Math.max(...this.users.map(user => parseInt(user.id))) + 1
                    let newUser = {
                        id : maxId,
                        mail : this.mail,
                        password : this.password,
                        role : "user"
                    }
                    this.$store.commit('addUser', newUser);
                    this.$router.push("/admin")
                    return
                }
                return
            },
            editUser(){
                if(this.validateData('edit')){
                    let updatedUser = {
                        id : this.$route.params.id,
                        newEmail: this.mail,
                        newPassword: this.password
                    }
                    this.$store.commit('updateUserData', updatedUser);
                    this.$router.push("/admin")
                    return
                }
                return
            },
            viewPassword(){
                if(this.passwortViewType == "password"){
                    this.passwortViewType = "text"
                    this.textForViewPassword = "Hide passwords"
                    return
                }
                this.passwortViewType = "password"
                this.textForViewPassword = "See passwords"
            }
        }
    }
</script>

<style scoped>
    .form{
        width: 40% !important;
        margin: 100px auto;
    }
    p{
        cursor: pointer;
    }
</style>