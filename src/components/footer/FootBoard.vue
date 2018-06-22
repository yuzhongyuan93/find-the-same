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
        /*border: 1px solid yellow;*/
        display: flex;
        flex: 1 1 auto;
        width: 100%;
        padding: 1rem 0rem;
        justify-content: space-around;
        align-items: center;
    }
</style>