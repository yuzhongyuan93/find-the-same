<template>
    <section class="already">
        <p class="title">Total Pairs</p>
        <p class="content">{{ total/2 }}</p>
    </section>
</template>

<script>
    export default {
        name: "Logo",
        props:['total'],
        data:function () {
            return {
            }
        }
    }
</script>

<style scoped>
    .already {
        background-image: url("../../assets/tip_block.png");
        background-repeat: no-repeat;
        background-size: cover;
        /*width: 15rem;*/
        /*height: 7rem;*/
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .title {
        font-size: 2rem;
        font-weight: bold;
        color: #795548;
        align-self: center;
    }
    .content {
        font-size: 2rem;
        font-weight: bold;
        color: #ffffff;
    }
</style>