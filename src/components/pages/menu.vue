<template>
    <div>
        <div class="special-w3">
			<div class="container">
				<div id="start">
                    <h3 class="tittle1">Special Menu</h3>
                    <input v-model="searchValue" id="searchField" type="text">
                </div>
                <div v-if="meals">
                    <printMeals :meals="meals" imageInf="strMealThumb" id="idMeal" name="strMeal"/>
                </div>
                <div v-else>
                    <p class="col-12 alert alert-danger noData">There is no dish for the entered value</p>
                </div>
			</div>
		</div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapGetters } from "vuex"
    import printMeals from "../components/PrintMeals.vue"

    export default{
        name : "menuPage",
        components : {
            printMeals
        },
        data(){
            return{
                meals : [],
                searchValue : "",
            }
        }, 
        computed : {
            ...mapGetters(['role'])
        },      
        mounted(){
            var that = this
            axios.get(this.$BASE_API_URL,{})
                 .then(function(response) {
                    that.meals = response.data.meals
            })

            if(this.role == 'unauthorized') {
                this.$router.push("/signin")
            }
        
        },
        watch: {
            searchValue : function(){
                let that = this
                axios.get(this.$BASE_API_URL+this.searchValue,{})
                     .then(function(response) {  
                        that.meals = response.data.meals
                    })
            }
        }
    }
</script>

<style>
    #start{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 0px 15px;
    }
    .menu-grid{
        margin-bottom: 50px !important;
    }
    #searchField{
        font-size: 16px !important;
        font-weight: 300 !important;
        color: #000000 !important;
        line-height: 1.625 !important;
        background-color: #fff !important;
        background-image: url( //addsearch.com/logo/AAAAAA-20.png ) !important;
        background-repeat: no-repeat;
        background-position: 95% 50%;
        border: 1px solid #000000 !important;
        border-radius: 4px !important;
        width: 30% !important;
        padding: 10px !important;
        cursor: auto !important;
        margin-left: 50px;
    }
    .noData{
        font-size: 18px !important;
        text-align: center;
        margin-top: 50px !important;
    }
    .details{
        cursor: pointer;
    }
</style>