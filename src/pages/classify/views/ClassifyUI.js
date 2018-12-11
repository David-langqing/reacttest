import React, { Component } from 'react'
import Search from "components/common/search/Search"
import BScroll from 'better-scroll'
import {
  ClassifySearch,
  ClassifyHeaderIcon,
  SearchWrap,
  ClassifyContainer,
  ClassifyMainConttainer,
  ClassifyMainLeft,
  ClassifyMainRight,
  ClassifyMainLeftItem
} from "pages/classify/views/styledComponents"
import ClassifyRightContainer from "pages/classify/views/ClassifyRight/ClassifyRight"
export default class ClassifyUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftListData: [],
      leftListActive: 0,
      rightListData:[],
      gotop:false
    }
  }
  render() {
    return (
      <ClassifyContainer>
        <ClassifySearch>
          <SearchWrap>
            <div>
              <Search></Search>
            </div>
          </SearchWrap>
          <ClassifyHeaderIcon>
            <div></div>
          </ClassifyHeaderIcon>
        </ClassifySearch>
        <ClassifyMainConttainer>
          <ClassifyMainLeft ref={div => this.leftScroll = div}>
            <div>
              {
                this.state.leftListData.map((v, i) => {
                  return (
                    <ClassifyMainLeftItem  key={i} i={i} className={(this.state.leftListActive) === i ? "active" : ""}
                      onTouchStart={(e) => this.handleLeftList(v, i, e)}>
                      <span>{v.title}</span>
                    </ClassifyMainLeftItem>
                  )
                })
              }
            </div>
          </ClassifyMainLeft>
          <ClassifyMainRight>
          <ClassifyRightContainer gotop={this.state.gotop} receivePage={this.props.receivePage} leftListData={this.state.leftListData} rightListData={this.state.rightListData} ></ClassifyRightContainer>
          </ClassifyMainRight>
        </ClassifyMainConttainer>
      </ClassifyContainer>
    )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      leftListData: nextProps.leftListData,
      rightListData: nextProps.rightListData
    })
  }
  componentDidMount() {
    
    this.leftscroll = new BScroll(this.leftScroll, {
      click: true,
    });

  }
  handleLeftList(v, i, e) {
    this.setState({
      leftListActive: i,
      gotop:!this.state.gotop
    })
    let clientY = e.touches[0].clientY
    if (clientY > 440) {
      this.leftscroll.scrollBy(0, -100, 100)
      this.leftscroll.refresh()
    }
    if (clientY < 160) {
      this.leftscroll.scrollBy(0, 100, 100)
      this.leftscroll.refresh()
    }
    this.props.changeGuidCategoryIds(v.categoryId)    
  }
}
