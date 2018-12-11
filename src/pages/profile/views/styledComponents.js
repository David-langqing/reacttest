import styled from 'styled-components'
import bordered from "components/common/styled/bordered"
import Login from "@/assets/images/login.jpg"
import NoLogin from "@/assets/images/no_login.png"

const ProfileWrap = styled.div`
    width:100%;
    height:100%;
`
const ProfileHeader = styled.div`
    width:100%;
    height:1.5rem;
    background: linear-gradient(#ff9b44, #ff750e);
    opacity:0.8;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`
const ProfileHeaderPanel = styled.div`
    width:2.2rem;
    height:0.9rem;
    padding-left:0.2rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`
const PanelLeft = styled.div`
    width:0.65rem;
    height:0.65rem;
    background:#fff;
    border-radius:50%;
    padding:0.05rem;
    >div{
        width:100%;
        height:100%;
        border-radius:50%;
        background: url(${props => props.isSigninState ? Login : NoLogin}) center center no-repeat;
        background-size:contain;
    }
`
const PanelRight = styled.div`
    padding-left:0.1rem;
    margin-top:0.03rem;
    >span{
        color: #ffffff;
        font-size:0.16rem;
        font-weight:300;
    }
    >div{
        margin-left: 10px;
        display: inline-block;
        height: 8px;
        width: 8px;
        border-width: 1.5px 1.5px 0 0;
        border-color: #fff;
        border-style: solid;
        -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
        transform: matrix(.71,.71,-.71,.71,0,0);
        position: relative;
        top: -2px;
    }
`
export {
    ProfileWrap,
    ProfileHeader,
    ProfileHeaderPanel,
    PanelLeft,
    PanelRight
}