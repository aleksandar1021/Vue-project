<template>
    <div>
        <!--footer-->
			<div class="footer-w3l">
				<div class="container">
					<div class="footer-grids">
						<div class="col-md-4 footer-grid">
							<h4>About</h4>
							<ul>
								<li><i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>Beogradska 18, SRB</li>
								<li><i class="glyphicon glyphicon-phone" aria-hidden="true"></i>+381 65 8255131</li>
								<li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:roasting@mail.com"> roasting@mail.com</a></li>
								<li><i class="glyphicon glyphicon-time" aria-hidden="true"></i>Mon-Sun 08:00 am to 23:00 pm</li>
							</ul>
							<div class="social-icon">
								<a href="#"><i class="icon"></i></a>
								<a href="#"><i class="icon1"></i></a>
								<a href="#"><i class="icon2"></i></a>
								<a href="#"><i class="icon3"></i></a>
							</div>
						</div>
						<div class="col-md-4 footer-grid">
							<h4>Our Special</h4>
							<p class="text">Indulge in the exquisite flavors of Roasting, where culinary artistry meets exceptional dining experience</p>							
						</div>
						<div class="col-md-4 footer-grid navigation2">
							<h4>Navigation</h4>
							<verticalNav :key="this.$store.getters.role" :navigations="links" :textProperty="Object.keys(links[0])[1]" :hrefProperty="Object.keys(links[0])[0]" :roleProperty="Object.keys(links[0])[2]"/>
						</div>
					</div>
				</div>
			</div>
		<!--footer-->
		<!--copy-->
			<div class="copy-section">
				<div class="container">
					<div class="footer-top">
						<p>&copy; 2023 Roasting. All rights reserved | Design by <span class="text-danger">Aleksandar Kandic</span></p>
					</div>
				</div>
			</div>
		<!--copy-->
    </div>
</template>

<script>
import verticalNav from "../fixed/verticalNav.vue"
    export default{
        name : "footerComponent",
		components : {
			verticalNav
		},
		data(){
			return{
				links : [
                    {
                        href : "/",
                        name : "Home",
                        role: ["unauthorized", "user" , "admin"]
                    },
                    {
                        href : "/gallery",
                        name : "Gallery",
                        role: ["unauthorized", "user" , "admin"]
                    },
                    {
                        href : "/contact",
                        name : "Contact",
                        role: ["unauthorized", "user" , "admin"]
                    },
                    {
                        href : "/menu",
                        name : "Menu",
                        role: ["user", "admin"]
                    },
                    {
                        href : "/admin",
                        name : "Admin",
                        role: ["admin"]
                    }
                ]
			}
		}
    }
</script>

<style>
	.text{
		font-size: 16px !important;
	}
	.navigation2{
		padding-left: 100px !important;
	}
</style>