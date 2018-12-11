import styled from 'styled-components'
import locationHeader from 'images/locationHeader.png'
import classifyHeader from 'images/classifyHeader.png'
import bordered from 'components/common/styled/bordered'
import ellipsis from 'components/common/styled/ellipsis'
import trade from 'images/trade.png'
import traderight from 'images/traderight.png'

const StyledEssentialContainer = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
    position:relative;
    #Scroll{
        /* overflow-y:scroll */
    }
`
const FixHomeListContainer = styled.div`
    width:100%;
    position:absolute;
    top:0.44rem;
    z-index:1;
`
const MainHeaderWrap = styled.div`
    width:100%;
    height:0.44rem;
    /* position:fixed; */
    top:0;
    left:0;
    z-index:1;
    position:absolute;
    top:0;
    left:0;
`

const MainHeader = styled.div`
    width:100%;
    height:0.44rem;
    background:transparent;
    background:${props=>props.isShowBackground?"#ff6900":"transparent"};

    display:flex;
    z-index:10;
    
`
const City = styled.div`
    flex:49;
    height:100%;
    margin-top:0.04rem;
    div{
        width:100%;
        height:50%;
        background: url(${locationHeader}) center center/18px 18px no-repeat ;                 
    }
    span{
        margin-top:-.01rem;
        display:block;
        width:100%;
        height:50%;
        text-align:center;
        line-height:.22rem;
        font-size:.12rem;
        color:#fff;
    }
`
const SearchWrap = styled.div`
    flex:277;
    height:100%;
    display:flex;
    align-items:center;
`
const Clsaaify = styled.div`
    flex:49;
    height:100%;
    margin-top:0.04rem;
    div{
        width:100%;
        height:50%;
        
        background: url(${classifyHeader}) center center/18px 18px no-repeat ;
    }
    span{
        margin-top:-0.01rem;
        display: block;
        width:100%;
        height:50%;
        text-align:center;
        font-size:.12rem;
        color:#fff;
    }
`
const SwiperContent = styled.div`
    width:100%;
    padding-bottom:53.333333%;
    position:relative;
    z-index:-1;
    .slider{
        width:100%;
        height:100%;
        position:absolute !important;

    }
`
const NavHeader = styled.div`
    width:100%;
    height:1.94rem;
    overflow:hidden;
    background:#fff;
    .NavContainerWrap{
        width:200%;
        height:1.44rem;
        margin-top:.2rem;
        margin-bottom:0.05rem;
        position:relative;
    }
    .NavSliderWrap{
        width:100%;
        height:.24rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    
`
const NavContainer = styled.div`
    width:100%;
    height:100%;
    position:relative;
    top:0;
    transition:all .6s ease-in;
    left:${props=> props.dir ==="left"?0:"-50%"};
    >div{
        float:left;
        width:50%;
        height:100%;
        .am-grid{
            height:100%
        }
        .am-flexbox{
            height:50%
        }
    }
`
const NavSlider =bordered({
    component : styled.div`
        width:20%;
        height:30%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
    `,
    borderColor:"#ff6900"
})
const NavHeaderItem = styled.div`
    width:50%;
    height:100%;
    `
const SliderItem = bordered({
    component : styled.div`
    width:50%;
    height:95%;
    background:#ff6900;
    position:absolute !important;
    top:0;
    transition:all .3s ease-in;
    left:${props=> props.dir ==="left"?0:"50%"};
    `,
    borderColor:"#333"
})
//交易快报
const CmsModule =  bordered({
    component : styled.div`
    width:100%;
    height:0.54rem;
    background:#fff;
    margin-bottom:0.1rem;
    padding:0.12rem 0.15rem;
    display:flex;
    .cmsLeft{
        flex:30;
        height:100%;
        background: url(${trade}) center center/30px 30px no-repeat ;   
    }
    .cmsRight{
        flex:32;
        height:100%;
        line-height:0.3rem;
        position: relative;
        >div{
            width:0.16rem;
            height:100%;
            position:absolute;
            top:0;
            right:-0.1rem;
            background: url(${traderight}) center center/12px 12px no-repeat ; 
        }
    }
    .am-carousel-vertical{
        width:100%;
        height:100% !important;
    }
    .slider-frame{
        width:100%;
        height:100% !important;
    }
    .slider-slide{
        width:100%;
        height:0.3rem !important;
        >div{
            width:100%;
            height:100% !important;
            line-height:0.3rem !important;
        }
    }
`,
    borderWidth: "3px 0 0 0",
    borderColor:"#eee"
})
const CmsMiddle = styled.div`
    flex:275;
    height:100%;
    padding-left:0.2rem;
    position:relative;
    >span{
        position:absolute;
        width:0.02rem;
        height:70%;
        top:15%;
        bottom: 0;
        left:0.1rem;
        background:#ccc;
    }
`
//主页列表容器
const HomeListContainer = styled.div`
    width:100%;
`
//列表头部
const HomeListHeader = bordered({
    component:styled.div`
    width:100%;
    height:0.46rem;
    background:#fff;
    padding:0 0.15rem;
    >div{
        width:100%;
        height:100%;
        overflow:hidden;
        >div{
            height:100%;
            /* width:100%; */
            width:max-content;
            display:flex;
            /* flex-direction:column; */
            div:last-child{
                padding-right:0;
            }
            
        }
    }
    
`,
borderWidth: "0 0 1px 0",
})  
const HomeListItems = styled.div`
    height:100%;
    padding-right:0.27rem;
    .active{
        color:#ff6900;
        border-bottom:2px solid #ff6900;
    }
    
    span{
        display:block;
        height:100%;
        line-height:0.46rem; 
        width:auto;
    }
`
const HomeListMinHeader = bordered({
    component:styled.div`
    width:100%;
    background:#fcfcfc;
    height:0.43rem;
    display:flex;
    justify-content:space-around;
`,
borderWidth: "0 0 1px 0",
})  
const HomeListMinHeaderSpan = styled.span`
    display:block;
    height:100%;
    line-height:0.43rem;
    color:${props=>props.active==="true"?"#ff6900":"#212121"};
`
//主页列表
const ListContainerStyled = styled.div`
    width:100%;
`
const ListItems = styled.div`
    width:100%;
    height:1.36rem;
    padding:0.15rem 0.15rem 0.1rem 0.15rem;
    margin-top:0.1rem;
    background:#fff;
    >div{
        width:100%;
        height:100%;
        display:flex;
        >img{
            flex:70;
            height:0.7rem
            
        }
        >div{
            flex:275;
            padding-left:0.1rem;
            display:flex;
            flex-direction:column;
            
            .listFirst{
                flex:30;
                display:flex;
                color: #333;
                >div{
                    flex:215;
                }
                span{
                    width:0.5rem;
                    font-size:0.13rem;
                    line-height:0.3rem;
                    color: #333;
                    text-align:left;
                }
            }
            .listSecond{
                flex:31;
                padding-bottom:0.07rem;
                display:flex;
                align-items:flex-end;
                >span{
                   

                }
            }
            .listThree{
                flex:10;
                padding-bottom:0.1rem;
            }
            .listFour{
                flex:40
            }
        }
    }
`
const ListFirstP = ellipsis({
    component:styled.p`
        width:2.15rem !important;
        font-size:0.15rem;
        line-height:0.3rem;
        color: #333;
    `,
})

const ListSecondSpan = bordered({
    component:styled.div`
        height:90%;
        font-size:0.12rem;
        text-align:center;
        display:flex;
        align-items:center;
        padding:1px 3px;
        color: #ff6900;
        margin-right:0.1rem;
        /* background:red; */
        
    `,
    borderColor:"#ff6900"
})  
const ListThree = styled.div`
    width:100%;
    span{
        padding-right:0.05rem;
        font-size:0.1rem;
    }
`
const ListFour = bordered({
    component:styled.div`
    width:100%;
    height:100%;
    span{
        padding-right:0.05rem;
        font-size:0.1rem;
    }
`,
    borderWidth: "1px 0 0 0",

})


export {
    MainHeaderWrap,
    StyledEssentialContainer,
    MainHeader,
    City,
    SearchWrap,
    Clsaaify,
    SwiperContent,
    NavHeader,
    NavHeaderItem,
    NavSlider,
    SliderItem,
    NavContainer,
    CmsModule,
    CmsMiddle,
    HomeListContainer,
    HomeListHeader,
    HomeListItems,
    HomeListMinHeader,
    HomeListMinHeaderSpan,
    ListContainerStyled,
    ListItems,
    ListFirstP,
    ListSecondSpan,
    ListThree,
    ListFour,
    FixHomeListContainer
}