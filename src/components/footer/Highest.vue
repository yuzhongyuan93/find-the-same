<template>
    <section class="foot-bg">
        <p class="title">Highest</p>
        <p class="content">{{ highest }}</p>
    </section>
</template>

<script>
    export default {
        name: "Highest",
        props:['highest'],
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