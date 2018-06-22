<template>
    <section class="card" @click="rotateCard()">
        <img class="card-back" :src="cardBgImg">
        <img class="card-front" src="../../assets/1.png" v-if="frontIndex===1" />
        <img class="card-front" src="../../assets/2.png" v-if="frontIndex===2" />
        <img class="card-front" src="../../assets/3.png" v-if="frontIndex===3" />
        <img class="card-front" src="../../assets/4.png" v-if="frontIndex===4" />
        <img class="card-front" src="../../assets/5.png" v-if="frontIndex===5" />
        <img class="card-front" src="../../assets/6.png" v-if="frontIndex===6" />
        <img class="card-front" src="../../assets/7.png" v-if="frontIndex===7" />
        <img class="card-front" src="../../assets/8.png" v-if="frontIndex===8" />
        <br class="clear-fix">
    </section>
</template>

<script>
    import cardBack1 from '../../assets/back1.jpg';
    import cardBack2 from '../../assets/back2.jpg';
    export default {
        name: "card",
        props:['backIndex','frontIndex'],
        data(){
            return {
                cardBacks:[cardBack1,cardBack2],
                direction:0,//0背面，1正面
            }
        },
        computed:{
            cardBgImg(){//卡片随机卡背
                return this.cardBacks[this.backIndex];
            }
        },
        methods:{
            rotateCard(){//卡片反转
                let backImg = event.target;
                let frontImg = backImg.parentNode.getElementsByClassName('card-front')[0];
                //如果是背面则翻到正面
                if( backImg.className.includes('card-back') ){
                    backImg.style.transform = "rotateY(180deg)";
                    frontImg.style.transform = "rotateY(0deg)";
                    this.$emit('flip');
                }
            },
        },
    }
</script>

<style scoped>
    .card {
        flex: 1 1 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        /*padding: 1rem 2rem;*/
        position: relative;
    }
    .card-front {
        width: 77%;
        transform: rotateY(180deg);
    }
    .card-back {
        width: 69%;
        cursor: pointer;
        transform: rotateY(0deg);
    }
    .card-back, .card-front{
        position: absolute;
        backface-visibility: hidden;
        transition: transform 1s;
    }
    .clear-fix {
        clear: both;
    }
</style>