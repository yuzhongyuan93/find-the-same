<template>
    <section class="foot-bg">
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