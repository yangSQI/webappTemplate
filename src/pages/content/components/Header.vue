<template>
    <div class="header">
        <router-link to="/" class="left">
            <i class="iconfont">&#xe600;</i>
        </router-link>
        <div class="input">
            <input type="text" name="search" class="home-search">
        </div>
        <div class="right">
            <input type="submit" value="搜索" class="home-submit">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContentHeader"

    }
</script>

<style scoped lang="less">
    .header {
        height: 2.5rem;
        background: #00bcd4;
        display: flex;
        line-height: 2.5rem;
        position: fixed;
        top: 0;
        left: 0;
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
            .home-search {
                width: 100%;
                border-radius: 0.2rem;
                height: 50%;
                text-indent: 0.3rem;
                font-size: 0.8rem;
            }
        }
        .right {
            width: 3rem;
            font-size: 0.8rem;
            border-left: 1px solid #ffffff;
            .home-submit {
                display: block;
                height: 100%;
                width: 100%;
                background: #00bcd4;
            }
        }
    }
</style>