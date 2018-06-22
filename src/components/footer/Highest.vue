<template>
    <section class="highest">
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
    .highest {
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