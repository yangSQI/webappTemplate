<template>
    <div class="content">
        <div class="wrapper" ref="wrapper">
            <ul class="content-ul">
                <li class="content-li">
                    <div class="cotent-data">
                        1
                    </div>
                    <div class="cotent-data">
                        2
                    </div>
                    <div class="cotent-data">
                        3
                    </div>
                </li>
                <li>
                    <div class="cotent-data">
                        1
                    </div>
                    <div class="cotent-data">
                        2
                    </div>
                    <div class="cotent-data">
                        3
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "HomeContent",
        methods: {
            setBscroll () {
                this.scroll = new Bscroll(this.$refs.wrapper)
            }
        },
        mounted () {
            this.setBscroll()
        }
    }
</script>

<style scoped lang="less">
    .content {
        .wrapper {
            overflow: hidden;
            position: absolute;
            top: 2.5rem;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }
</style>