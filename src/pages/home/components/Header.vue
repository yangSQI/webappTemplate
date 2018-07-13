<template>
    <div class="header">
        <router-link to="/" class="left">
            <i class="iconfont">&#xe600;</i>
        </router-link>
        <div class="input">
            <input type="text" name="search" class="input-search">
        </div>
        <div class="right">
            火星
            <i class="iconfont">&#xe604;</i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"

    }
</script>

<style scoped lang="less">
    .header {
        height: 2.5rem;
        background: #00bcd4;
        display: flex;
        line-height: 2.5rem;
        .left {
            width: 2rem;
            height: 100%;
            color: #fff;
            .iconfont {
                display: block;
                width: 100%;
                height: 100%;
                font-size: 1.5rem;
                text-align: center;
            }
        }
        .input {
            flex: 1;
            padding: 0 1rem;
            .input-search {
                width: 100%;
                border-radius: 0.2rem;
                height: 50%;
                text-indent: 0.3rem;
                font-size: 0.8rem;
            }
        }
        .right {
            font-size: 0.8rem;
            height: 100%;
            .iconfont {
                font-size: 0.8rem;
            }
        }
    }
</style>