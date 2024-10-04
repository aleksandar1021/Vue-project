<template>
    <div class="content">
		<!--best-->

		<specialOffer :meal="meal" name="strMeal" area="strArea" category="strCategory" image="strMealThumb"/>

		<div class="best-w3">
			<div class="container ">
				<h2 class="tittle">Our Best Restaurant </h2>
				<div class="best-grids">
					<div class="col-md-4 best-grid1">
						<img src="../../../public/images/pp4.jpg" class="img-responsive gray"/>
					</div>
					<div class="col-md-8 best-grid">
						<h4>what we offer </h4>
						<p>
							We offer you various delicious dishes that come from all over the world, authorized users of the restaurant website can see the ingredients and recipe of the desired dish on the MENU page.</p>
						<div class="best-bottom">
							<div class="col-md-6 best-left">
								<div class="icons">
									<i class="glyphicon glyphicon-cutlery" aria-hidden="true"></i>
								</div>
								<h5>Cook with passion</h5>
								<p>Our chefs are experienced and cook with passion</p>
							</div>
							<div class="col-md-6 best-right">
								<div class="icons">
									<i class="glyphicon glyphicon-filter" aria-hidden="true"></i>
								</div>
								<h5>Everything to measure</h5>
								<p>Our chefs have recipes and experience for everything</p>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="best-bottom">
							<div class="col-md-6 best-left">
								<div class="icons">
									<i class="glyphicon glyphicon-headphones" aria-hidden="true"></i>
								</div>
								<h5>Cooking with music</h5>
								<p>Our chefs love music, music can often be heard in the kitchen</p>
							</div>
							<div class="col-md-6 best-right">
								<div class="icons">
									<i class="glyphicon glyphicon-time" aria-hidden="true"></i>
								</div>
								<h5>All on time</h5>
								<p>Our chefs will cook your meal in the shortest possible time</p>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>





		</div>
		<!--best-->
		
	</div>
</template>

<script>
import axios from 'axios'
import specialOffer from "../components/SpecialOffer"
    export default{
        name : "homePage",
		data(){
			return{
				meal : {strMealThumb:""}
			}
		},
		components : {
			specialOffer
		},
		mounted(){
			let that = this
			axios.get(this.$API_URL_RANDOM_MEAL)
				.then(function(response) {  
				that.meal = response.data.meals[0]
				console.log(that.meal)
			})

			
		}
    }
</script>

<style>
    .container2{
        margin-top: 70px !important;
		margin-bottom: 50px !important;
    }
	.randomImage{
		width: 100%;
		background-size: cover;
		background-position: center;
		background-attachment: fixed !important;
	}
	.hedding{
		margin-left: 50px !important;
		font-size: 30px;
		color: rgb(127, 119, 119) !important;
		font-weight: 600;
	}
	.hedding1{
		color: red !important;
		font-size: 40px !important;
		font-weight: normal !important;
	}
	.values{
		margin-left: 50px !important;
		font-size: 25px !important;
		color: rgb(219, 198, 160) !important;
		font-weight: 500 !important;
		font-style: italic;
		margin-bottom: 30px !important;
	}
	
</style>

<style scoped>
	.gray{
		background-attachment: fixed !important;
		background-size: cover;
	}
</style>