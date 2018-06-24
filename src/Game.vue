<template>
    <div class="game">
        <HeadBoard :total="total" :paired="restPairs" @refresh="refresh()"></HeadBoard>
        <CardBoard :row="row" :col="col" :refresh="refreshTrigger" @flip="flippedCard"></CardBoard>
        <FootBoard :time="time"></FootBoard>
        <IntroBoard v-show="ifShowIntro"></IntroBoard>
    </div>
</template>

<script>
    import gameConfig from '../config/game.config';//游戏全局参数
    import HeadBoard from './components/header/HeadBoard.vue';
    import CardBoard from './components/gamer/CardBoard.vue';
    import FootBoard from './components/footer/FootBoard.vue';
    import IntroBoard from './components/table/intro.vue';
    export default {
        data() {
            return{
                row:gameConfig.row,//行数
                col:gameConfig.col,//列数
                total:gameConfig.row*gameConfig.col,//总数
                time:{
                    highest:0,//最快时间
                    past:0,//本局已花费时间
                    startTime:false,//是否已经开始计时
                },
                cards:{
                    flippedCards:[],//已经被翻开（但未配对）的牌
                    pairedCards:[],//已经翻开（并且已经配对）的牌
                },
                ifShowIntro:false,//是否显示提示面板
                refreshTrigger:false,//是否触发重新开局
            }
        },
        computed:{
            restPairs(){//剩余对数
                return (this.total-this.cards.pairedCards.length)/2
            }
        },
        watch:{
            restPairs(data){//监听游戏结束的时刻
                if( data === 0 ){
                    this.time.highest = this.time.past;
                    setTimeout(()=>{
                        alert('恭喜您完成挑战！尝试去刷新自己的纪录吧！');
                    },1000);
                }
            }
        },
        mounted(){
            if( !localStorage.getItem('NotFirstTime_11029375') ){
                this.showIntro();
            }
        },
        methods:{
            flippedCard(){//监听到卡牌翻动（背面翻到正面）事件
                const _this = this;
                let flipped = this.cards.flippedCards;
                let card = event.target.parentNode;
                if( card.getAttribute('data-direction') == 'back' ){
                    //防止翻开前连续点击多次
                    card.setAttribute('data-direction','front');
                    //开始计时
                    this.setTime();
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
                                last.setAttribute('data-direction','back');
                                card.setAttribute('data-direction','back');
                            },1000);
                        }
                        //如果之前的和刚翻开的一致，则保留
                        else if( last.getAttribute('data-id') === card.getAttribute('data-id') ){
                            this.cards.pairedCards.push(last,card);
                            this.cards.flippedCards = [];
                        }
                    }
                    // console.log(this.cards.flippedCards,this.cards.pairedCards)
                }
            },
            setTime(){//开始计时
                const _this = this;
                if( !this.time.startTime ){
                    this.time.startTime = true;
                    let inter = setInterval(()=>{
                        if( _this.restPairs !== 0 ){
                            _this.time.past++;
                        }
                        else{
                            clearInterval(inter);
                        }
                    },1000);
                }
            },
            getCardIds(arr){//输出卡片id
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
            refresh(){//重新开局
                // window.location.reload();
                this.refreshTrigger = true;
            },
            showIntro(){//第一次进入游戏弹出说明
                localStorage.setItem('NotFirstTime_11029375',true);
                this.ifShowIntro = true;
            }
        },
        components:{ HeadBoard,CardBoard,FootBoard,IntroBoard },
    }
</script>

<style scoped>
    .game {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 60rem;
        height: 100%;
        position: relative;
    }
</style>