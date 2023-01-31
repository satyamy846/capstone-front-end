<script>
import mynavbar from '../../components/navbar/Homenavbar.vue';
    export default{
        name:'SignUp',
        components: {
            mynavbar
        }
    }

</script>

<template>
<mynavbar/>

<body>
	<div class="banner">
		<h1>Welcome to Online Exam portal</h1>
		<h2>subtitle</h2>
    <router-link :to="{name:'signup'}">Hello</router-link>
	</div>
	<div class="content-area">
		<!--Your content here-->
	</div>
	
</body>



</template>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;800&display=swap");
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Heebo", sans-serif;
}
body {
	overflow-x: hidden;
  background-image: url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
}
div.banner {
	width: 100%;
	min-height: 100vh;
	/* background-image: url(https://cdn.wallpapersafari.com/33/7/ZmRcgk.jpg); */
	background-position: center;
	background-attachment: fixed;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
div.banner > h1 {
	font-size: 4.6em;
	font-weight: 800;
	color: #fff;
	text-shadow: 4px 4px 30px rgba(0, 0, 0, 0.8);
}
div.banner > h2 {
	color: #fff;
	font-size: 1.8em;
	letter-spacing: 2px;
}

div.content-area {
	width: 100%;
	min-height: 100vh;
}

</style>