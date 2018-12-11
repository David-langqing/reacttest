import React, { Component } from 'react'
import {
    ProfileWrap,
    ProfileHeader,
    ProfileHeaderPanel,
    PanelLeft,
    PanelRight
} from './styledComponents'

import { connect } from "react-redux"

const mapState = (state) => {
    return {
        isSigninState: state.getIn(['login', 'isSignin']),
        username: state.getIn(['login', 'username'])
    }
}

class ProfileUI extends Component {
    render() {
        return (
            <ProfileWrap>
                <ProfileHeader>
                    <ProfileHeaderPanel onClick={() => {
                        this.props.toLogin()
                    }}>
                        <PanelLeft isSigninState={this.props.isSigninState}>
                            <div></div>
                        </PanelLeft>
                        <PanelRight>
                            <span>{this.props.isSigninState?this.props.username:"登录/注册"}</span>
                            <div></div>
                        </PanelRight>
                    </ProfileHeaderPanel>
                </ProfileHeader>
            </ProfileWrap>
        )
    }

}
export default connect(mapState)(ProfileUI)
