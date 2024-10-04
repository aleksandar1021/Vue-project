<template>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100 centar">
    <div class="row d-flex justify-content-center align-items-center h-100 forma">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 forma2">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-5 text-uppercase">Register</h2>
                <p class="text-white mb-5">Please enter your email and password!</p>

                <div class="form-outline form-white mb-4">
                    <textField v-model="mail" label="Enter your email" id="email" type="email" hint="Email must contains @ and minimun 10 letters"/>
                </div>

                <div class="form-outline form-white mb-4">
                    <textField v-model="password" label="Enter your password" id="password" :type="passwortViewType" hint="Password must contains minimun 8 cahracters"/>
                </div>

                <div class="form-outline form-white mb-4">
                    <textField v-model="rePassword" label="Confirm your password" id="password" :type="passwortViewType" hint="Passwords must match"/>
                    <p @click="viewPassword" class="text-danger">{{ textForViewPassword }}</p>
                </div>
                

                <div class="col-6" >
                    <div v-if="errors.length" class="alert alert-danger" v-html="errors"></div>
                    <div v-if="success" class="alert alert-success">
                        You have successfully registered, go to the <router-link to="/signin">signin</router-link> page to login
                    </div>
                </div>

              <button @click="addUserLocal" type="button" class="btn btn-outline-light btn-lg px-5">Signup</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { mapGetters } from "vuex"
import textField from "../components/TextField.vue"

    export default{
        name : "signupForm",
        data(){
            return{
                errors : "",
                mail : "",
                password : "",
                rePassword : "",
                success : false,
                passwortViewType : "password",
                textForViewPassword : "See passwords"
            }
        },
        computed : {
            ...mapGetters(['users', 'role']) 
        },
        components : {
            textField
        },
        mounted() {
            if(this.role == 'user') {
                this.$router.push("/menu")
            }
        },
        methods : {
            addUserLocal(){
                this.errors = []

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

                if(this.rePassword != this.password) {
                    this.errors += "Passwords must match!<br>"
                }

                if(this.errors != ""){
                    return
                }
                
                let user = this.users.find(x => x.mail == this.mail &&
                                           x.password == this.password);
                
                if(user) {
                    this.errors += "User already exists"
                    return
                }

                this.success = true

                let maxId = Math.max(...this.users.map(user => parseInt(user.id))) + 1

                let newUser = {
                    id : maxId,
                    mail : this.mail,
                    password: this.password,
                    role : "user"
                }
                this.$store.commit('addUser', newUser);
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

<style>
    .forma{
        width: 80% !important;
        display: flex;
        justify-content: center;
        margin: 100px 0px;
        padding: 50px !important;
        background-color: gainsboro;
        opacity: 0.9;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    .forma2{
        width: 100%;
        margin: 0px auto !important;
    }
    .centar{
        display: flex;
        justify-content: center;
    }
    h2{
        margin-bottom: 20px !important;
    }
    .form-white{
        margin-bottom: 10px !important;
    }
    p{
        margin-bottom: 10px !important;
        margin-top: 10px !important;
    }
</style>

<style scoped>
    p{
        cursor: pointer;
    }
</style>