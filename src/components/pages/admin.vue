<template>
    <div>
        <button @click="addUser" class="button btn btn-primary">Add new user</button>
        <table v-if="usersExist" class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="u,index in this.users" :key="index">
                    <td v-if="u.role=='user'">{{ u.id }}</td>
                    <td v-if="u.role=='user'">{{ u.mail }}</td>
                    <td v-if="u.role=='user'" class="passwd"><TextField :id="index.toString()" :type="passwortViewType" v-model="u.password" :disabeld="true"/></td>
                    <td v-if="u.role=='user'">{{ u.role }}</td>
                    <td v-if="u.role=='user'"><button class="btn btn-warning" @click="editUser(u.id)">Edit</button></td>
                    <td v-if="u.role=='user'"><button :data-id="u.id" @click="deleteUserById" class="btn btn-danger">Remove</button></td>
                </tr>
            </tbody>
        </table>
        <div v-else class="alert alert-danger py-4">
            There are currently no users
        </div>
        <button @click="viewPassword" v-if="usersExist" type="button" class="btn btn2 btn-secondary">{{ textForViewPassword }}</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import { mapMutations } from 'vuex';
import TextField from "../components/TextField.vue"

    export default{
        name : "adminPage",
        data(){
            return{
                passwortViewType : "password",
                textForViewPassword : "See passwords"
            }
        },
        components: {
            TextField
        },
        methods : {
            ...mapMutations(['deleteUser']),
            deleteUserById(event){
                let id = event.target.dataset.id;
                this.deleteUser(id);
            },
            editUser(id){
                this.$router.push({ name: 'form', params: { id: id } })
            },
            addUser(){
                this.$router.push({ name: 'form', params: {id : null} })
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
        },
        computed : {
            ...mapGetters(['users', 'role']),
            usersExist(){
                return this.users.length - (this.users.filter(x=>x.role=='admin')).length > 0
            } 
        }, 
        mounted(){
            if(this.role != 'admin') {
                this.$router.push("/signin")
            }
        }
    }
</script>

<style scoped>
    .table{
        width: 75% !important;
        margin: 0px auto !important;
        margin-bottom: 50px !important;
    }
    .alert{
        width: 75% !important;
        margin: 50px auto;
        font-size: 15px !important;
        text-align: center;
    }
    .button{
        margin-left: 12.5% !important;
        margin-top: 70px;
        margin-bottom: 30px;
    }
    p{
        cursor: pointer;
    }
    .passwd{
        width: 20% !important;
    }
    .btn2{
        margin-left: 12.5% !important;
        margin-bottom: 50px;
    }
</style>
