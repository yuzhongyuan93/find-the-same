<template>
    <section class="introduction" v-show="ifShowIntro">
        <header class="title">Introduction</header>
        <article class="content">
            Try to find the same cards in pairs.The pairs would flip back if they are not the same
            while the others would stay in front. The number information is above while the time is below.
        </article>
        <section class="close" @click="close()">Close</section>
    </section>
</template>

<script>
    export default {
        name: "intro",
        data(){
            return {
                ifShowIntro:true,
            }
        },
        methods:{
            close(){//关闭游戏提示
                this.ifShowIntro = false;
            }
        }
    }
</script>

<style scoped>
    @keyframes swing-in
    {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    .introduction {
        position: absolute;
        width: 30rem;
        height: 31rem;
        background-image: url("../../assets/tip_block.png");
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        animation: swing-in 3s;
    }
    .title {
        font-size: 3rem;
        font-weight: bold;
        color: #795548;
        align-self: center;
        position: absolute;
        top: 8%;
    }
    .content {
        color: #FFFFFF;
        font-size: 2rem;
        padding: 0rem 3rem;
        text-indent: 2rem;
    }
    .close {
        font-size: 2rem;
        font-weight: bold;
        color: #795548;
        align-self: center;
        position: absolute;
        bottom: 2rem;
        cursor: pointer;
    }
</style>