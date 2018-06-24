<template>
    <section class="card-board">
        <div class="card-row" v-for="item in cardArray">
            <Card :backIndex="cardBackIndex" :frontIndex="item2" :data-id="item2" v-for="item2 in item" @flip="$emit('flip')" ></Card>
        </div>
    </section>
</template>

<script>
    import Card from './Card.vue';
    export default {
        name: "cardBoard",
        props:['row','col','refresh'],
        data(){
            return {
                cardArray:[],//卡牌id矩阵
            }
        },
        computed:{
            cardBackIndex(){//随机选择卡背1或2
                const random = Math.ceil(Math.random()*2);
                return random-1;
            },
        },
        watch:{
            refresh(data){//监听到重新开局
                if( data ){
                    window.location.reload();
                }
            }
        },
        mounted(){
            this.getCardArray();
        },
        methods:{
            getCardArray(){//根据行数和列数生成矩阵，每个数字只出现2次
                const row = this.row;
                const col = this.col;
                const kinds = (row*col)/2;
                const arr = [];
                const origin = [];
                for( let m = 1 ; m <= kinds ; m++ ){
                    origin.push( m );
                    origin.push( m );
                }
                for( let i = 0 ; i < row ; i++ ){
                    let temp = [];
                    let index = Math.floor(Math.random()*origin.length);
                    for( let j = 0 ; j < col ; j++ ){
                        while( !origin[index] ){
                            index = Math.floor(Math.random()*origin.length);
                        }
                        temp.push(origin[index]);
                        origin[index] = 0;
                    }
                    arr.push(temp);
                }
                this.cardArray = arr;
            },
        },
        components:{Card},
    }
</script>

<style scoped>
    .card-board {
        /*border: 1px solid blue;*/
        width: 100%;
        display: flex;
        flex: 3 1 60%;
        flex-direction: column;
    }
    .card-row {
        display: flex;
        flex: 1 1 auto;
        justify-content: space-around;
        padding: 2px;
    }
</style>