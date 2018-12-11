import styled from 'styled-components'
import bordered from "components/common/styled/bordered"
import Logo from "@/assets/images/zbj-logo.png"
import leftjiantou from "@/assets/images/leftjiantou.png"
const LoginUIWrap = styled.div`
    width:100%;
    height:6.67rem;
    background:#fff;

`

const SigninHeader = styled.div`
    width: 100%;
    height: 1.06rem;
    margin-bottom:0.6rem;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const SignTop = styled.div`
    width:100%;
    height:0.45rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    >div{
        width:0.45rem;
        height:0.45rem;
        background: url(${leftjiantou}) center center/21px 21px no-repeat;
    }
    >span{
        width:0.65rem;
        height:0.45rem;
        display:flex;
        justify-content:center;
        align-items:center;               
        font-size:0.15rem;  
    }
`
const SigninHeaderImg = styled.div`
    width:1.17rem;
    height: 0.61rem;
    background: url(${Logo}) center center no-repeat;
    background-size:contain;
`
const SignWrap = styled.div`
    width:100%;
    height:1.94rem;
    padding:0 0.25rem;
`
const SignWrapMain = styled.div`
    width:100%;
    height:1.24rem;
    display:flex;
    flex-direction:column;
    >div{
        width:100%;
        height:50%;
        display:flex;
        >span{
            flex:17;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:0.16rem;
        }
        >input{
            padding-left:0.2rem;
            flex:83;
            height:100%;
            border:0;
        }
    }
`
const UserName = bordered({
    component:styled.div`

    `,
    borderWidth:"0 0 1px 0"
})
const PassWord = bordered({
    component:styled.div`
       

    `,
    borderWidth:"0 0 1px 0"
})

const SignBtn = styled.div`
    width:100%;
    padding-top:0.3rem;
    height:0.7rem;
    >div{
        width:100%;
        height:100%;
        background:#ff6900;
        display:flex;
        justify-content:center;
        align-items:center;
        opacity:0.9;
        font-size:0.18rem;
        color: #ffffff;
        letter-spacing:0.03rem;
        font-weight:300;
    }
`
export {
    LoginUIWrap,
    SigninHeader,
    SignTop,
    SigninHeaderImg,
    SignWrap,
    SignWrapMain,
    SignBtn,
    UserName,
    PassWord,
}