<template>
    <div>
        <modalInformation :image="image"/>
        <div v-for="meal, index in meals" :key="index" class="gallery-grids">
            <div class="col-sm-3 gallery-grids-left pro-top">
                <div class="gallery-grid">
                    <a class="b-link-stripe b-animate-go  swipebox">
                        <div class="port-7 effect-3">
                            <div class="image-box">
                                <img :src="meal[imageMeal]" :alt="meal[name]"/>
                            </div>
                            <div class="gal-desc">
                                <h4>{{ meal.strMeal }}</h4>
                                <a :data-id="meal[idMeal]" @click="view" class="button2 hvr-sweep-to-top click">View</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import modalInformation from "../components/modalInformation.vue"
    export default{
        name : "GalleryItems",
        data(){
            return{
                image : ""
            }
        },
        components : {
            modalInformation
        },
        props : {
            meals : {
                type : Array,
                required : true
            },
            imageMeal : {
                type : String
            },
            name :{
                type : String
            },
            idMeal : {
                type : String
            }
        },
        methods : {
			view(){
				let idMeal =  event.target.dataset.id
				let that = this
				axios.get(this.$API_URL_FIND_BY_ID+idMeal,{})
					.then(function(response) {  
					that.image = response.data.meals[0].strMealThumb
				})
				let modal = document.getElementById("modal")
				modal.classList.add("block")
			}
		}
    }
</script>

<style scoped>
	h4{
		font-size: 18px !important;
	}
	.click{
		cursor: pointer;
	}
</style>
