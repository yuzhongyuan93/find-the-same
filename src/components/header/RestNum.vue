<template>
    <section class="rest">
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
    .rest {
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