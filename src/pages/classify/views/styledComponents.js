import styled from 'styled-components'
import bordered from "components/common/styled/bordered"
import more from "@/assets/images/more.png"
const ClassifyContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`
const ClassifySearch = bordered({
    component: styled.div`
        width:100%;
        height:0.45rem;
        padding:0 0.15rem;
        display:flex;
        background:#fff;
        
    `,
    borderWidth: "0 0 1px 0",
}
)

const SearchWrap = styled.div`
    flex:310;
    height:100%;
    display:flex;
    align-items:center;
    
    >div{
        height:0.32rem;
        background:#ccc;
        width:100%;
        >div{
            background:#ccc;
            >div{
                background:#eee;
            }
        }
    }
`
const ClassifyHeaderIcon = styled.div`
    flex:20;
    margin-left:0.15rem;
    height:100%;
    >div{
        width:100%;
        height:100%;
        background: url(${more}) center center/21px 18px no-repeat ; 
    }

`
const ClassifyMainConttainer = styled.div`
    flex:1;
    display:flex;
    overflow:hidden;
`
const ClassifyMainLeft = bordered({
    component: styled.div`
        height:100%;
        flex:77;
        background:#fff;
        overflow:hidden;
        >div{
            width:100%;
            height:max-content;
        }
        &::after{
            content:"";
            width:0 !important;
            height:0 !important;
        }
    `,
    borderWidth: "0 1px 0 0 "
})
const ClassifyMainLeftItem = styled.div`
        width:100%;
        height:0.53rem;
        padding:0.1rem 0 0.11rem 0;
        display:flex;
        justify-content:center;
        align-items:center;
        span{
            display:block;
            width:100%;
            height:100%;
            line-height:0.32rem;
            font-size:0.13rem;
            text-align:center;
            color:#888;
            position: relative;
        }
        &.active{
            span{
                color:#ff6900;
                &::before{
                    content:"";
                    width:0.04rem;
                    height:100%;
                    background:#ff6900;
                    position:absolute;
                    left: 0;
                }
            }
        }
`
const ClassifyMainRight = styled.div`
    height:100%;
    flex:298;
`
export {
    ClassifySearch,
    ClassifyHeaderIcon,
    SearchWrap,
    ClassifyContainer,
    ClassifyMainConttainer,
    ClassifyMainLeft,
    ClassifyMainRight,
    ClassifyMainLeftItem
}
