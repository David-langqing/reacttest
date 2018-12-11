import styled from 'styled-components'
import bordered from 'components/common/styled/bordered'

const CollectWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`
const CollectHeader = styled.div`
    width:100%;
    flex:44;
    background:#ff6900;
    opacity:0.9;
    display:flex;
    justify-content:center;
    align-items:center;
    >h3{
        font-size:0.2rem;
        font-weight:400;
        letter-spacing:0.01rem;
        color:#fff;
    }
`
const CollectMain = styled.div`
    width:100%;
    flex:573;
    padding-top:0.1rem;
    /* position:relative; */
    display:flex;
    flex-direction:column;

`
const CollectMainTop = styled.div`
    width:100%;
    /* height:0.3rem; */
    flex:30;
    /* position:absolute; */
    background:#fff;
    display:flex;
    .collectMainTopLeft{
        flex:83;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.15rem;
        /* font-weight:400; */
        color: #666;
        border-right:0.01rem solid #ccc;
    }
    .collectMainTopRight{
        flex:17;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.15rem;
        /* font-weight:400; */
        color: #666;
    }
`
const CollectMainItemWrap = styled.div`
    width:100%;
    flex:543;
    overflow-y:scroll;
`
const CollectMainItem = styled.div`
    width:100%;
    display:flex;
    background:#fff;
    margin-top:0.1rem;
    .itemLeft{
        flex:14;
        display:flex;
        justify-content:center;
        align-items:center;
        /* >input{
            width:0.2rem;
            height:0.2rem;
        } */
    }
    .itemMain{
        flex:69;
        border-right:0.01rem solid #ccc;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        >img{
            width:0.8rem;
            height:0.8rem;
            margin-right:0.1rem
        }
        >div{
            flex:1;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:space-around;
            /* >span{
                margin-bottom:0.1rem;
            } */
        }
    }
    .itemRight{
        flex:17;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.4rem;
    }
`
const Inputchecked = styled.div`
    width:0.2rem;
    height:0.2rem;
    border-radius:50%;
    border:2px solid ${props=>props.checked?"red":"#000"};
    background:${props=>props.checked?"#ff6900":"#fff"}
    /* background: ${props=>props.checked?"red":"#fff"};
     */
`
const CollectCheckAll = styled.div`
    width:100%;
    margin-top:0.2rem;
    display:flex;
    background:#fff;
    .checkallLeft{
        flex:83;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        border-right: 0.01rem solid #ccc;
        span{
            margin-left:0.3rem;
            display:flex;
            justify-content:center;
            align-items:center;
            input{
                width:0.3rem;
                height:0.3rem;
            }
        }
    }
    .checkallRight{
        flex:17;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.14rem;
    }
`
const InputCheckedAll = styled.div`
    width:0.25rem;
    height:0.25rem;
    border-radius:50%;
    border:2px solid red;
    background: "#ff6900";
    background:${props=>props.iconCheckAll?"#ff6900":"#fff"}
    
`
export {
    CollectWrap,
    CollectHeader,
    CollectMain,
    CollectMainTop,
    CollectMainItemWrap,
    CollectMainItem,
    CollectCheckAll,
    Inputchecked,
    InputCheckedAll
}