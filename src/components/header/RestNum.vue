<template>
    <section class="head-bg">
        <p class="title">Rest Pairs</p>
        <p class="content">{{ paired }}</p>
    </section>
</template>

<script>
    export default {
        name: "RestNum",
        props:['total','paired'],
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