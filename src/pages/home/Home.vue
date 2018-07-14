<template>
    <div class="container">
        <home-header></home-header>
        <home-content></home-content>
    </div>
</template>

<script>
    import axios from 'axios'
    import HomeHeader from "./components/Header"
    import HomeContent from './components/Content'
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeContent,
        },
    }
</script>

<style scoped lang="less">

</style>