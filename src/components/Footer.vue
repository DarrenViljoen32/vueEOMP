<!-- FOOTER -->
<template lang="">
    <footer>
        <!-- Get current year using JAVASCRIPT -->
        <p class="rainbow_text animated">&copy; Copyright <span id="year">{{new Date().getFullYear()}}</span> Made By Darren Viljoen. All Rights Reserved.</p>
    </footer>
</template>
<script>
// document.getElementById("year").innerHTML = new Date().getFullYear();
// const year = new Date().getFullYear();
export default {
}
</script>
<style>
    footer{
        background-color: floralwhite;
        color: #000030;
        margin-top: 0%;
    }
    footer p{
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: larger;
    }
    /* Footer Animation */
    .rainbow_text {
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
        background: black;
        background: linear-gradient(to right, red, orange , yellow, green, blue, indigo, violet);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .rainbow_text.animated {
        animation: rainbow_animation 5s ease-in-out infinite;
        background-size: 400%;
    }
    @keyframes rainbow_animation {
    0%,100% {
        background-position: 0
    }

    50% {
        background-position: 100%
    }
}
</style>