<template>
    <div id="common_head">
         <ul class="nav nav-tabs">
            <li><router-link to="/common/Home">Home</router-link></li>
            <li><router-link to="/common/SVN">SVN</router-link></li>
            <li><router-link to="/common/iOS">iOS</router-link></li>
            <li><router-link to="/common/VB.Net">VB.Net</router-link></li>
            <li class="dropdown">
                <router-link to="/java/Java" class="dropdown-toggle" data-toggle="dropdown">Java<span class="caret"></span></router-link>
            <ul class="dropdown-menu">
                <li><router-link to="/java/Swing">Swing</router-link></li>
                <li><router-link to="/java/jMeter">jMeter</router-link></li>
                <li><router-link to="/java/EJB">EJB</router-link></li>
                <li class="divider"></li>
                <li><router-link to="/java/isolated">isolated link</router-link></li>
            </ul>
            </li>
            <li><router-link to="/common/vbnet">VB.Net</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"common_header",
    data(){
        return{};
    },
    methods:{
        testMethod(){
            console.log("hello kitty.");
        }
    }
}
</script>

<style>
#common_head{
    background:black;
    text-align: right;
    font-size:larger;
}
.test{
    min-width:10px;
    display:inline-block;
    line-height: 40px;
    margin-right:30px;
}
a {  
    text-decoration:none;
    color:white;
    }
.nav-tabs {
    border-bottom: none;
}
</style>
