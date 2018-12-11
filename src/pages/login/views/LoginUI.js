import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {
  LoginUIWrap,
  SigninHeader,
  SignTop,
  SigninHeaderImg,
  SignWrap,
  SignWrapMain,
  SignBtn,
  UserName,
  PassWord,
} from './styledComponents'

import { connect } from "react-redux"
import { ChangeLoginState } from "../actionCreator"
import { ChangeState }from "../actionCreator"

const mapState = (state) =>{
  return {
    isSigninState:state.getIn(['login','isSignin']),
    username:state.getIn(['login','username'])
  }
}

const mapDispatch = (dispatch) =>{
  return {
    changeLoginState(Uname){
      dispatch(ChangeLoginState(Uname))
    },
    changeState(){
      dispatch(ChangeState())
    }
  }
}

class LoginUI extends Component {
  constructor() {
    super()
    this.state = ({
      isSignin: true
    })
  }
  changeSign() {
    this.setState({
      isSignin: !this.state.isSignin,
    })
  }
  toSign(Uname) {
    const li = "username=" + this.UserName.value + "&password=" + this.PassWord.value
    if (this.state.isSignin) {
      fetch("/api/user/signin", {
        method: 'post',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: li
      })
        .then(response => response.json())
        .then(data => {
          
          if (data.ret) {
            this.props.changeLoginState(Uname)
            this.props.changeState()
            Toast.info("欢迎，" + data.data.username, 1);
          } else {
            Toast.info(data.data.msg, 1);
          }
        });
    } else {
      fetch("/api/user/signup", {
        method: 'post',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: li
      })
        .then(response => response.json())
        .then(data => {
          Toast.info(data.data.msg, 1);
        });
    }
  }
  render() {
    return (
      <LoginUIWrap>
        <SigninHeader>
          <SignTop>
            <div onClick={() => { this.props.handGoBack() }}></div>
            <span onClick={() => { this.changeSign() }}>{this.state.isSignin ? "去注册" : "去登录"}</span>
          </SignTop>
          <SigninHeaderImg></SigninHeaderImg>
        </SigninHeader>
        <SignWrap>
          <SignWrapMain>
            <UserName>
              <span>用户名</span>
              <input type="text" ref={input => this.UserName = input} placeholder="请输入用户名" />
            </UserName>
            <PassWord>
              <span>密码</span>
              <input type="password" ref={input => this.PassWord = input} placeholder="请输入密码" />
            </PassWord>
          </SignWrapMain>
          <SignBtn onClick={() => {
            const Uname = this.UserName.value
            this.toSign(Uname)
          }}>
            <div>{!this.state.isSignin ? "注册" : "登录"}</div>
          </SignBtn>
        </SignWrap>
      </LoginUIWrap>
    )
  }
}

export default withRouter(connect(mapState, mapDispatch)(LoginUI))
