import React, { Component, Fragment } from 'react'
import {
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
} from "./styledComponents"

import { connect } from 'react-redux'
import { appendCollect } from "../actionCreator"

const mapDispatch = (dispatch) => {
    return {
        toCollect(v) {
            v.checked = false
            v.checkedAll = false
            dispatch(appendCollect(v))
        }
    }
}
const mapState = (state) => {
    return {
        collectTotal: state.getIn(['detail', 'collectTotal'])
    }
}

class DetailUI extends Component {
    render() {
        const v = this.props.v
        return (
            <DetailUiContainer>
                <DetailUiHeader>
                    <DetailHeaderIconLeft onClick={() => this.props.handGoBack()}></DetailHeaderIconLeft>
                    <DetailHeaderIconRight></DetailHeaderIconRight>
                </DetailUiHeader>
                <DetailMain>
                    <DetailBack shopPhoto={v.shopPhoto}>
                        <DetailBackBottom></DetailBackBottom>
                        <DetailBackBottomTwo></DetailBackBottomTwo>
                        <HeaderImg shopPhoto={v.shopPhoto}>
                        </HeaderImg>
                    </DetailBack>
                    <DetailFont>
                        <h3>{v.brandName}</h3>
                        <div className="statename">
                            <div className="stateLeft">地点：</div>
                            <div className="stateRight">{v.cityName}</div>
                        </div>
                        <div className="venue">
                            <div className="venueLeft">业务：</div>
                            <div className="venueRight">
                                {
                                    v.expertTagNames.map((v, i) => {
                                        return (
                                            <span key={i}>{v}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </DetailFont>
                    <DetailIntroduce>
                        <h3>— 公司介绍 —</h3>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;以下是废话，
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
    
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
    
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
    
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
    
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
    
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
    
                            《荆钗记》是我国四大南戏之首，在中国戏剧史和文化史上都占有重要的地位，几百年来长演不衰，深受广大观众的欢迎和喜爱。
    
                    </p>
                    </DetailIntroduce>
                </DetailMain>
                <DetailBottom>
                    <div className="toHome" onClick={() => this.props.handleToHome()}>首页</div>
                    <div className="collect" onClick={() => this.props.toCollect(v)}>加入收藏</div>
                </DetailBottom>
            </DetailUiContainer>
        )
    }
}

export default connect(mapState, mapDispatch)(DetailUI)