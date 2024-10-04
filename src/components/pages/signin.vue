<template>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100 centar">
    <div class="row d-flex justify-content-center align-items-center h-100 forma">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 forma2">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-5 text-uppercase">Login</h2>
                <p class="text-white mb-5">Please enter your email and password!</p>

                <div class="form-outline form-white mb-4">
                    <textField v-model="mail" label="Enter your email" id="email" type="email" hint="Email must contains @ and minimun 10 letters"/>
                </div>

                <div class="form-outline form-white mb-4">
                    <textField v-model="password" label="Enter your password" id="password" :type="passwortViewType" hint="Password must contains minimun 8 cahracters"/>
                    <p @click="viewPassword" class="text-danger">{{ textForViewPassword }}</p>
                </div>

                <div class="col-6" v-if="errors">
                    <div class="alert alert-danger" v-html="errors"></div>
                </div>

                <button @click="signin" type="button" class="btn btn-outline-light btn-lg px-5">Login</button>
            </div>
            <div>
              <p class="mb-0">Don't have an account? <router-link to="/signup" class="text-white-50 fw-bold">Sign Up</router-link>
              </p>
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
        name : "signinForm",
        data(){
            return{
                errors : "",
                mail : "user@gmail.com",
                password : "Password123",
                passwortViewType : "password",
                textForViewPassword : "See password"
            }
        },
        computed : {
            ...mapGetters(['users', 'role'])  
        },
        components : {
            textField
        },
        mounted() {
            if(this.role != 'unauthorized') {
                this.$router.push("/menu")
            }
        },
        methods : {
            signin(){
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
                if(this.errors != ""){
                    return
                }

                let user = this.users.find(x => x.mail == this.mail && x.password == this.password)

                if(!user || user == undefined) {
                    this.errors = "Wrong credentials."
                    return
                }
                //console.log(user)

                let signinUser = {
                    mail : user.mail,
                    role : user.role
                }
                localStorage.setItem("user", JSON.stringify(signinUser));
                this.$store.commit("changeUser", signinUser)
                this.$router.push("/menu")
                
            },
            viewPassword(){
                if(this.passwortViewType == "password"){
                    this.passwortViewType = "text"
                    this.textForViewPassword = "Hide password"
                    return
                }
                this.passwortViewType = "password"
                this.textForViewPassword = "See password"
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
        background-color: rgb(209, 209, 209) !important;
        opacity: 0.9;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 0px !important;
    }
    .forma2{
        width: 100%;
        margin: 0px auto !important;
        border-radius: 0px !important;
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
