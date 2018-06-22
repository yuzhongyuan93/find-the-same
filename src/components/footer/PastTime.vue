<template>
    <section class="past">
        <p class="title">Past Time</p>
        <p class="content">{{ past }}</p>
    </section>
</template>

<script>
    export default {
        name: "PastTime",
        props:['past'],
        data:function () {
            return {
            }
        }
    }
</script>

<style scoped>
    .past {
        background-image: url("../../assets/tip_block.png");
        background-repeat: no-repeat;
        background-size: cover;
        width: 22rem;
        height: 7rem;
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