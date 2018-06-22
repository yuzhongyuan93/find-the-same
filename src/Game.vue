<template>
    <div class="game">
        <HeadBoard :total="total" :paired="restPairs" @refresh="refresh()"></HeadBoard>
        <CardBoard :row="row" :col="col" @flip="flippedCard"></CardBoard>
        <FootBoard :time="time"></FootBoard>
    </div>
</template>

<script>
    import gameConfig from '../config/game.config';//游戏全局参数
    import HeadBoard from './components/header/HeadBoard.vue';
    import CardBoard from './components/gamer/CardBoard.vue';
    import FootBoard from './components/footer/FootBoard.vue';
    export default {
        data() {
            return{
                row:gameConfig.row,//行数
                col:gameConfig.col,//列数
                total:gameConfig.row*gameConfig.col,//总数
                time:{
                    highest:0,//最快时间
                    past:0,//本局已花费时间
                },
                cards:{
                    flippedCards:[],//已经被翻开（但未配对）的牌
                    pairedCards:[],//已经翻开（并且已经配对）的牌
                }
            }
        },
        computed:{
            restPairs(){//剩余对数
                return (this.total-this.cards.pairedCards.length)/2
            }
        },
        watch:{
            restPairs:function (data) {
                if( data === 0 ){
                    this.time.highest = this.time.past;
                }
            }
        },
        methods:{
            flippedCard(){//监听到卡牌翻动（背面翻到正面）事件
                const _this = this;
                let flipped = this.cards.flippedCards;
                let card = event.target.parentNode;
                //开始计时
                if( this.time.past === 0 ){
                    let inter = setInterval(()=>{
                        if( _this.restPairs !== 0 ){
                            _this.time.past++;
                        }
                        else{
                            clearInterval(inter);
                        }
                    },1000);
                }
                //如果已经翻开未配对的为0张
                if( flipped.length == 0 ){
                    flipped.push(card);
                }
                //如果已经翻开未配对的为1张
                else if( flipped.length == 1 ){
                    let last = flipped[0];
                    //如果之前翻开的和刚翻开的不一致，则都翻回去
                    if( last.getAttribute('data-id') !== card.getAttribute('data-id') ){
                        this.cards.flippedCards = [];
                        setTimeout(()=>{
                            _this.flipToFront(last);
                            _this.flipToFront(card);
                        },1000);
                    }
                    //如果之前的和刚翻开的一致，则保留
                    else if( last.getAttribute('data-id') === card.getAttribute('data-id') ){
                        this.cards.pairedCards.push(last,card);
                        this.cards.flippedCards = [];
                    }
                }
                console.log(this.getCardIds(this.cards.flippedCards),this.getCardIds(this.cards.pairedCards))
            },
            getCardIds(arr){
                var a = []
                for( var i = 0 ; i <arr.length ; i++ ){
                    a.push(arr[i].getAttribute('data-id'))
                }
                return a;
            },
            flipToFront(el){//将卡牌从正面翻回背面
                let backImg = el.getElementsByClassName('card-back')[0];
                let frontImg = el.getElementsByClassName('card-front')[0];
                backImg.style.transform = "rotateY(0deg)";
                frontImg.style.transform = "rotateY(180deg)";
            },
            refresh(){
                window.location.reload()
            }
        },
        components:{HeadBoard,CardBoard,FootBoard},
    }
</script>

<style scoped>
    .game {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50rem;
        height: 100%;
    }
</style>