<template>
  <div id="app">
    <common_header></common_header>
    <br>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/MyHeader.vue'

export default {
  name: 'App',
  components:{
    [Header.name]:Header
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
common_header{
  display: block;  
}
img{
  width:100px;
  border-radius:100%;
}
body {
		height: 100%;
		background-color: #ffffff;
		background-image: url("../images/overlay.png"), -moz-linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("../images/background.jpg");
		background-image: url("../images/overlay.png"), -webkit-linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("../images/background.jpg");
		background-image: url("../images/overlay.png"), -ms-linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("../images/background.jpg");
		background-image: url("../images/overlay.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("../images/background.jpg");
		background-repeat: repeat,			no-repeat,			no-repeat;
		background-size: 100px 100px, cover,				cover;
		background-position: top left,		center center,		bottom center;
		background-attachment: fixed,			fixed,				fixed;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
