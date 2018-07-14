<template>
    <div class="content" ref="content">
        <ul class="content-ul">
            <li class="content-li">
                <div class="content-data" title="">
                    <img src="/static/images/placeholder.jpg" class="content-img">
                    <h3 class="content-title">el psy congroo!asdhasdhasdhasdh</h3>
                    <p class="content-des">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        拉收到货咖喱可视电话噶速度快两个家哈桑考虑到工行卡拉斯的海洋馆拉生意德古拉沈杜公路哈师大考虑好轧空
                    </p>
                </div>
                <div class="content-data content-center" title="">
                    <img src="/static/images/placeholder.jpg" class="content-img">
                    <h3 class="content-title">el psy congroo!asdhasdhasdhasdh</h3>
                    <p class="content-des">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        拉收到货咖喱可视电话噶速度快两个家哈桑考虑到工行卡拉斯的海洋馆拉生意德古拉沈杜公路哈师大考虑好轧空
                    </p>
                </div>
                <div class="content-data" title="">
                    <img src="/static/images/placeholder.jpg" class="content-img">
                    <h3 class="content-title">el psy congroo!asdhasdhasdhasdh</h3>
                    <p class="content-des">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        拉收到货咖喱可视电话噶速度快两个家哈桑考虑到工行卡拉斯的海洋馆拉生意德古拉沈杜公路哈师大考虑好轧空
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "HomeContent",
        methods: {
            setBscroll () {
                this.scroll = new Bscroll(this.$refs.content)
            }
        },
        mounted () {
            this.setBscroll()

        }
    }
</script>

<style scoped lang="less">
    .content {
        overflow: hidden;
        position: absolute;
        top: 2.5rem;
        left: 0;
        bottom: 0;
        right: 0;
        .content-li {
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
            .content-data {
                border: 1px solid #f40;
                height: 6rem;
                flex: 0.3;
                overflow: hidden;
                .content-img {
                    height: 60%;
                    width: 100%;
                }
                .content-title {
                    height: 15%;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 0.7rem;
                }
                .content-des {
                    height: 25%;
                    font-size: 0.5rem;
                }
            }
            .content-center {
                margin: 0 1rem;
            }
        }
    }
</style>