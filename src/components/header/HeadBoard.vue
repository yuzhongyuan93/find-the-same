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
        /*border: 1px solid red;*/
        display: flex;
        flex: 1 1 auto;
        width: 100%;
        padding: 1rem 1rem;
        justify-content: space-around;
        align-items: center;
    }
</style>