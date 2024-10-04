<template>
    <div>
        <modalDetails :meal="meal" name="strMeal" image="strMealThumb" category="strCategory" area="strArea" instruction="strInstructions"/>
        <div v-for="meal, index in meals" :key="index" class="special-grids">
            <div class="col-md-4 menu-grid">
                <div class="menu1">
                    <img :src="meal[imageInf]" class="img-responsive gray" :alt="meal[name]"/>
                    <div class="menu-icon hvr-sweep-to-top">
                        <i class="glyphicon glyphicon-home" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="menu-bottom">
                    <h4 class="mealName">{{ meal[name] }}</h4>
                    <a @click="details" :data-id="meal[id]" class="button details  hvr-sweep-to-bottom">Look at the recipe</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import modalDetails from "./modalDetails.vue"
    export default{
        name : "printMeals",
        props : {
            meals : {
                type : Array,
                required : true
            },
            image : {
                type : String
            },
            imageInf : {
                type : String
            },
            name : {
                type : String
            },
            id : {
                type : String
            }
        }, 
        data(){
            return{
                meal : [
                        {
                            strMealThumb:"",
                            strMeal:""
                        }
                    ]
            }
        },
        components : {
            modalDetails
        },
        methods : {
            details(event){
                let modal = document.getElementById("modal")
                let idMeal =  event.target.dataset.id
                let that = this
                axios.get(this.$API_URL_FIND_BY_ID+idMeal,{})
                    .then(function(response) {  
                    that.meal = response.data.meals
                })
                modal.classList.add("block")
            }
        }
    }
</script>