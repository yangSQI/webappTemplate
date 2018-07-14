<template>
    <div class="header">
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
        name: "CommonHeader"
    }
</script>

<style scoped lang="less">
    .header {
        width: 100%;
        height: 2.5rem;
        background: #00bcd4;
        line-height: 2.5rem;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
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