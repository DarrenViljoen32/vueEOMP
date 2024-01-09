<template lang="">
    <footer>
        <p>&copy; Copyright <span id="year">{{new Date().getFullYear()}}</span>. Made By Darren Viljoen. All Rights Reserved.</p>
    </footer>
</template>
<script>
// document.getElementById("year").innerHTML = new Date().getFullYear();
const year = new Date().getFullYear();
export default {
    
}
</script>
<style>
    footer{
        background-color: floralwhite;
        color: #000030;
        margin-top: 25%;
    }
    footer p{
        padding-top: 15px;
        padding-bottom: 15px;
    }
</style>