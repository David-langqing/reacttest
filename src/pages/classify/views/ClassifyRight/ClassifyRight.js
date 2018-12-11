import React, { Component } from 'react'
import {
    ClassifyRightUI,
    RightStatic
} from "./styledComponents"
import ListContainer from "pages/classify/views/ListContainer/ListContainer"
import BScroll from 'better-scroll'
import RightGrid from "./Grid/Grid"

export default class ClassifyRightContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            gridData: [],
            page:1,
        }
    }
    render() {
        // console.log(this.props)
        let rightListData = []
        if (this.props.rightListData) {
            rightListData = this.props.rightListData
        }
        return (
            <ClassifyRightUI ref={div => this.rightScrollId = div} >
                <div>
                    <RightStatic>
                        <div className="imgTop">
                            <div>
                            </div>
                        </div>
                        <RightGrid gridData={this.state.gridData}></RightGrid>
                    </RightStatic>
                    <div className="listcontainer">
                        <div className="listHeader">广告设计</div>
                        <ListContainer listdata={rightListData}></ListContainer>
                    </div>

                </div>
            </ClassifyRightUI>
        )
    }
    componentWillReceiveProps(nextprops) {
        if(this.props.gotop!==nextprops.gotop){
            this.rightScroll.scrollTo(0,0,100)
        }
        this.setState({
            gridData: nextprops.leftListData
        })
        this.rightScroll.refresh()
    }
    
    componentDidMount() {
        this.rightScroll = new BScroll(this.rightScrollId, {
            probeType:2,
            click: true,
            pullUpLoad: {
                threshold: 50
            }
        });
        this.rightScroll.on("pullingUp", () => {
            const page = ++this.state.page
            this.props.receivePage(page)
            this.rightScroll.finishPullUp();
        })
    }
}
