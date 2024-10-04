<template>
    <div class="content">
			<modalInformation :message="messageInf"/>
			<!--contact-->
			<div class="contact-w3l">
				<div class="container">
					<h2 class="tittle">Contact us</h2>
					<div class="contact-grids">
						<div class="col-md-6 contact-grid">
							<h4>Your Message</h4>
							<form id="form" action="#">
								<textField v-model="name" label="Name" id="username" placeholder="User" hint="The name must start with a capital letter and must contain from 3 to 20 letters"/>
								<textField v-model="mail" label="Email" type="email" id="mail" placeholder="user@gmail.com" hint="Email must contain @ and domain"/>
								<textField v-model="message" label="Message" id="message" rows="5" placeholder="Message" hint="The message must contain at least 10 characters"/>
								<dropDown v-model="city" id="cities" :items="cities" :textProperty="Object.keys(cities[0])[0]" :valueProperty="Object.keys(cities[0])[1]" name="ddl"  label="Select city" firstItem="Select city"/>
								<radioButton v-model="gender" :radios="genders" :textProperty="Object.keys(genders[0])[1]" :valueProperty="Object.keys(genders[0])[1]" name="rbtn" label="Select gender"/><br>
								<input @click="validateForm" class="btn btn-danger" type="button" 
								value="Send message">
								
							</form>
							<div v-if="errors.length">
								<p class="alert alert-danger" v-html="errors"></p>
							</div>
						</div>
						<div class="col-md-6 contact-grid">
							<div class="google-map wow fadeInDownBig animated animated" data-wow-delay="0.4s">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181140.2232981353!2d20.257788440071845!3d44.81512683632456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1686510991017!5m2!1ssr!2srs"  frameborder="0" style="border:0" allowfullscreen></iframe>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
					
			</div>
		</div>
        </div>
</template>

<script>
import textField from "../components/TextField.vue"
import dropDown from "../components/DropDown.vue"
import radioButton from "../components/RadioButton.vue"
import modalInformation from "../components/modalInformation.vue"
    export default{
        name : "contactPage",
		components : {
			textField, modalInformation, dropDown, radioButton
		},
		data(){
			return{
				name : "",
				mail : "",
				message : "",
				gender : "",
				errors : "",
				city : "",
				messageInf : "",
				cities : [
					{
						name : "Belgrade",
						value : "1"
					},
					{
						name : "London",
						value : "2"
					},
					{
						name : "Berlin",
						value : "3"
					}
				],
				genders : [
					{
						value : "1",
						name : "Male"
					},
					{
						value : "2",
						name : "Female"
					}
				]
			}
		},
		methods : {
			validateForm() {
				this.errors=""
				let nameRegex = /^[A-Z][a-z]{2,19}$/
				let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
				let messageRegex = /^[A-Z][a-z]{9,}$/
				
				if(!this.name){
					this.errors += "Name is required!<br>"
				}else{
					if(!nameRegex.test(this.name)) {
					this.errors += "The name must start with a capital letter and must contain from 3 to 20 letters!<br>"
					}
				}

				if(!this.mail){
					this.errors += "Email is required!<br>"
				}else{
					if(!emailRegex.test(this.mail)) {
					this.errors += "Email must contain @ and domain!<br>"
					}
				}
				
				if(!this.message){
					this.errors += "Message is required!<br>"
				}else{
					if(!messageRegex.test(this.message)) {
					this.errors += "The message must contain at least 10 characters and start with capital letter!<br>"
					}
				}
				
				if(this.city == 0){
					this.errors += "Select a city!<br>"
				}

				if(!this.gender){
					this.errors += "Select a gender!<br>"
				}
				if(this.errors.length){
					return
				}
				
				this.messageInf = `Dear <span id='nameInformation'>&nbsp;${this.name}</span>, you have successfully sent a message, one of the administrators will contact you soon`

				let modal = document.getElementById("modal")
                modal.classList.add("block")
				var form = document.getElementById("form");
				form.reset();

				this.name = ""
				this.mail = ""
				this.message = ""
				this.gender = ""
				this.city = ""
			}
		}
    }
</script>
<style scoped>
	.btn{
		border-radius: 0px !important;
		width: 150px !important;
		font-weight: 600;
	}
</style>


<style>
	button{
		border-radius: 0px !important;
	}
</style>