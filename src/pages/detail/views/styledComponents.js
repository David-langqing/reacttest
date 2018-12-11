import styled from 'styled-components'
import leftjiantou from "images/leftjiantou.png"
import more from "images/more.png"

import bordered from 'components/common/styled/bordered'

const DetailUiContainer = styled.div`
    overflow:hidden;
    width:100%;
    height:6.67rem;
    position:relative;
`
const DetailUiHeader = styled.div`
    width:100%;
    position:absolute;
    height:0.44rem;
    background:transparent;
    display:flex;
    justify-content:space-between;
    z-index:1;
`
const DetailHeaderIconLeft = styled.div`
    width:0.5rem;
    height:100%;
    background:url(${leftjiantou}) center center/18px 18px no-repeat; 

`
const DetailHeaderIconRight = styled.div`
    width:0.5rem;
    height:100%;
    background:url(${more}) center center/18px 18px no-repeat; 
`
const DetailMain = styled.div`
    width:100%;
    height:100%;
    overflow-y:scroll;

`
const DetailBack = styled.div`
    width:100%;
    height:2.64rem;
    position: relative;
    background-color: #ccc;
    overflow: hidden;
    /* background:url(${props => props.shopPhoto}) center center no-repeat;
    background-color: rgb(231, 231, 231);
    background-repeat: no-repeat;
    background-size: 200% auto;
    background-position: 0 50%;
    -webkit-transform: scale(1.1) !important;
    transform: scale(1.1) !important; */
`
const DetailBackBottom = styled.div`
        /* position:absolute !important;
        bottom: 0;
        background:#fff;
        width:150%;
        left:-25%;
        height:0.6rem; */
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: -25%;
        z-index: 5;
        border-top: 1px solid #ccc;
        border-radius: 50%;
        width: 150%;
        height: 0.6rem;
        background: #fff;  
    `
const DetailBackBottomTwo = styled.div`
        overflow: hidden;
        position: absolute;
        bottom: 0;
        z-index: 6;
        width: 100%;
        height: 0.3rem;
        background: #fff; 
`
const HeaderImg = bordered({
    component: styled.div`
        position:absolute;
        top:50%;
        /* bottom: 0; */
        left:50%;
        width:1.4rem;
        transform: translate(-50%, -50%);  
        height:1.86rem;
        background:url(${props => props.shopPhoto}) center center no-repeat;
        background-size:cover;
        z-index:11
    `,
    borderWidth: "3px",
    borderColor: '#fff'
})
const DetailFont = styled.div`
    width:100%;
    padding: 0 0.2rem 0.1rem 0.3rem;
    margin-top:0.02rem; 
    margin-bottom:0.1rem;
    background:#fff;
    >h3{
        padding:0.03rem 0 0.25rem 0;
        font-size:0.17rem;
        color:#212121;
        font-weight:700;
    }
    >.statename{
        width:100%;
        height:0.23rem;
        padding-bottom:0.1rem;
        font-size:0.14rem;
        color: #666;
        display:flex;

        >.stateLeft{
            flex:15;
        }
        >.stateRight{
            flex:75;
        }
    }
    >.venue{
        width:100%;
        display:flex;
        >.venueLeft{
            flex:15
        }
        >.venueRight{
            flex:75;
            >span{
                margin-right:0.05rem;
            }
        }
    }
`
const DetailIntroduce = styled.div`
    background:#fff;
    width:100%;
    >h3{
        width:100%;
        padding:0.2rem 0 0.05rem 0;
        text-align:center;
        font-size:0.17rem;
        color:#212121;
        font-weight:700;
    }
    >p{
        padding:0.1rem;
        line-height:0.3rem;
    }
`
const DetailBottom = bordered({
    component: styled.div`
        position:absolute !important;
        height: 0.5rem;
        width:100%;
        background:#fff;
        bottom: 0;
        z-index:10;
        display:flex;
        >.toHome{
            flex:25;
            text-align:center;
            height:100%;
            line-height:0.5rem;
            font-size:0.17rem;
            color:#666;
            font-weight:100;

        }
        >.collect{
            flex:75;
            background:#ff7919;
            height:100%;
            line-height:0.5rem;
            text-align:center;
            font-size:0.17rem;
            color:#666;
            font-weight:100;
        }
    `,
    borderWidth: "1px 0 0 0"
})




export {
    DetailUiContainer,
    DetailUiHeader,
    DetailHeaderIconLeft,
    DetailHeaderIconRight,
    DetailMain,
    DetailBack,
    DetailBackBottom,
    DetailBackBottomTwo,
    HeaderImg,
    DetailFont,
    DetailIntroduce,
    DetailBottom
}