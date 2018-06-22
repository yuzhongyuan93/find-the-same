<template>
    <section class="logo">
        <p class="title">HearthStone</p>
        <p class="title">Check<img class="refresh" src="../../assets/refresh.png" @click="$emit('refresh')"/></p>
    </section>
</template>

<script>
    import logo from '../../assets/tip_block.png';
    export default {
        name: "Logo",
        data:function () {
            return {
                logoImg:logo
            }
        }
    }
</script>

<style scoped>
    .logo {
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
    .refresh {
        vertical-align: -10%;
        margin-left: 10px;
        cursor: pointer;
    }
</style>