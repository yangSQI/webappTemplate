<template>
    <div class="container">
        <home-header></home-header>
    </div>
</template>

<script>
    import axios from 'axios'
    import HomeHeader from "./components/Header";

    export default {
        name: "Home",
        components: {HomeHeader},
    }
</script>

<style scoped lang="less">

</style>