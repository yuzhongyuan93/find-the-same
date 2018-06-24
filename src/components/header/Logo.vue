<template>
    <section class="head-bg">
        <p class="title">HearthStone</p>
        <p class="title">
            <span>Check</span>
            <img class="refresh" src="../../assets/refresh.png" @click="$emit('refresh')"/>
        </p>
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
    .title {
        font-size: 2rem;
        font-weight: bold;
        color: #795548;
        align-self: center;
        display: flex;
        align-items: center;
    }
    .refresh {
        vertical-align: -10%;
        margin-left: 10px;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
    }
</style>