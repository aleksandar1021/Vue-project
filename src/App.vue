<template>
  
<html>
<headComponent/>
<body>
	<headerComponent/>
	<router-view></router-view>
	<footerComponent/>
</body>
</html>

</template>

<script>
import headComponent from "./components/fixed/head.vue"
import headerComponent from "./components/fixed/headerHome.vue"
import footerComponent from "./components/fixed/footer.vue"

export default {
  name: 'App',
  components: {
	headComponent, headerComponent, footerComponent
  }
}
</script>

<style>
#slika{
	background-image: url("../public/images/f2.jpg");
	background-attachment: fixed;
	width: 100%;
	background-size: cover;
	background-position: center;
}
</style>
