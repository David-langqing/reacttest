import styled from 'styled-components'
import banner1 from "@/assets/images/banner1.png"

const ClassifyRightUI = styled.div`
    overflow-y:scroll;
    width:100%;
    height:100%;
    background:#fff;
    padding:0 0.15rem;
    >div{
        width:100%;
        height:max-content;
    }
    
    .listcontainer{
        width:2.68rem;
        .listHeader{
            width:100%;
            height:0.39rem;
            line-height:0.39rem;
            padding-left:0.1rem;
            position: relative;
            font-size:0.13rem;
            &::before{
                content:"";
                position:absolute;
                width:0.03rem;
                height:40%;
                top:25%;
                left:-0.015rem;
                background:#ffc555;
            }
        }
        >div:nth-child(2){
            >div{
                margin:0;
                padding-top:0;
            }
        }
    }
`
const RightStatic = styled.div`
    width:100%;
    height:max-content;
    .imgTop{    
        >div{
            height:0.63rem
        }
        width:100%;
        height:1rem;
        padding: 0.2rem 0 .1rem 0;
        >div{
            width:100%;
            height:100%;
            
            background:url(${banner1})  center center no-repeat ; 
            background-size: cover;
        }
        
    }
    .sub-title{
        width:100%;
        height:0.39rem;
        line-height:0.39rem;
        padding-left:0.1rem;
        position: relative;
        font-size:0.13rem;
        &::before{
            content:"";
            position:absolute;
            width:0.03rem;
            height:40%;
            top:25%;
            left:-0.015rem;
            background:#ffc555;
        }
    }
    .am-grid-text{
        font-size:0.12rem !important;
        font-weight:100;
        color:#000!important;
    }
`
export {
    ClassifyRightUI,
    RightStatic
}