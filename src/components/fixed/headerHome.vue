<template>
    <div :id="id">
		<div class="banner">
			<div class="header-top">
				<div class="container">
					<div class="indicat">
						<p id="natpis"><i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>Beogradska 18, Belgrade, Serbia</p>
					</div>
					<div class="detail" id="odjava">
						<ul id="odjava2">
                            <li v-if="isUnauthorized"><router-link to="/signin"><li class="text-danger">Sign in</li></router-link></li>
                            <li v-if="isUserOrAdmin"><router-link to="/signin"><li @click="logout" class="text-danger">Sign out</li></router-link></li>
                        </ul>

					</div>
					<div class="clearfix"></div>
				</div>
			</div>
			<div   class="container">
				<div class="navigation">
					<div class="logo">
						<h1><a href="index.html">Roasting</a></h1>
					</div>
					<div class="navigation-right">
						<span class="menu"><img src="images/menu.png" alt=" " /></span>
						<navigation :key="this.$store.getters.role" :links="links" :textProperty="Object.keys(links[0])[1]" :hrefProperty="Object.keys(links[0])[0]" :roleProperty="Object.keys(links[0])[2]"/>
						
					</div>
					<div class="clearfix"></div>
				</div>
				<div v-if="!notView" class="w3ls_banner_info">
					<h3>Welcome To  Roasting Restaurants </h3>
					<p>Indulge in the exquisite flavors of Roasting, where culinary artistry meets exceptional dining experience</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import navigation from "./nav.vue"
    export default{
        name : "headerHome",
        components : {
            navigation
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
        },
        methods: {
            logout() {
                this.$store.commit("changeUser", undefined)
                this.$forceUpdate()
                this.$router.push("/signin")
            }
        },
        computed: {
            id(){
                if(this.$route.path === '/signin' || this.$route.path === '/signup' || this.$route.path === '/admin' || Object.keys(this.$route.params).length > 0){
                    return "slika2"
                }
                return 'slika'
                
            },
            notView(){
                return this.$route.path === '/signin' || this.$route.path === '/signup' || this.$route.path === '/admin' || Object.keys(this.$route.params).length > 0
            },
            isUnauthorized() {
                return this.$store.getters.role === 'unauthorized';
            },
            isUserOrAdmin() {
                let role = this.$store.getters.role;
                return role === 'user' || role === 'admin';
            }
        }
    }
</script>

<style>
    .link{
        margin-top: 10px !important;
    }
    .boja:hover{
        color: red !important;
    }
    #odjava{
        background-color: red;
        padding: 5px;
    }
    #natpis{
        margin-top: 5px !important;
        color: white !important;
    }
    .banner{
        max-height: 600px !important;
    }
    .w3ls_banner_info{
        margin-top: 100px !important;
    }
  
</style>