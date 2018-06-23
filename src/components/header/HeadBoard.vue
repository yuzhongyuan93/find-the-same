<template>
    <section class="head">
        <Logo @refresh="$emit('refresh')"></Logo>
        <RestBoard :total="total" :paired="paired"></RestBoard>
        <AlreadyBoard :total="total"></AlreadyBoard>
    </section>
</template>

<script>
    import Logo from './Logo.vue';
    import RestBoard from './RestNum.vue';
    import AlreadyBoard from './AlreadyNum.vue';
    export default {
        name: "HeadBoard",
        props:['total','paired'],
        components:{Logo,RestBoard,AlreadyBoard},
    }
</script>

<style scoped>
    .head {
        display: flex;
        flex: 1 1 auto;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }
    .head-bg {
        background-image: url("../../assets/tip_block.png");
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 1rem 3rem;
    }
</style>