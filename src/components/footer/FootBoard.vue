<template>
    <section class="foot">
        <PastTime :past="time.past"></PastTime>
        <Highest :highest="time.highest"></Highest>
    </section>
</template>

<script>
    import PastTime from './PastTime.vue';
    import Highest from './Highest.vue';
    export default {
        name: "FootBoard",
        props:['time'],
        components:{PastTime,Highest},
    }
</script>

<style scoped>
    .foot {
        display: flex;
        flex: 1 1 auto;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }
    .foot-bg {
        background-image: url("../../assets/tip_block.png");
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 2rem 2rem 1rem 2rem;
        flex: 1 1 50%;
        margin: 0px 1rem;
    }
</style>