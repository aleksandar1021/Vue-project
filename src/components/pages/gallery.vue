<template>
    <div class="content">
		<!--gallery-->
			<div class="gallery-w3l">
				<div class="container">
					<h2 class="tittle"> Gallery</h2>
					<galletyItems :meals="meals" imageMeal="strMealThumb" name="strMeal" idMeal="idMeal"/>
				</div>
			</div>
	
		<!--gallery-->

		</div>
</template>

<script>
import axios from 'axios'
import galletyItems from "../components/GalleryItems.vue"
    export default{
        name : "galleryPage",
		data(){
            return{
                meals : [],
				image : ""
            }
        },
		components : {
			galletyItems
		},
        mounted(){
            var that = this
            axios.get(this.$BASE_API_URL,{})
                 .then(function(response) {
                    that.meals = response.data.meals
            })
        }
		
    }
</script>

<style>
	.gal-desc{
		margin-top: 5% !important;
	}
	.block{
        display: block !important;
    }
</style>


