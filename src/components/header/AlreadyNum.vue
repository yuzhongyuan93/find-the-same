<template>
    <section class="head-bg">
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