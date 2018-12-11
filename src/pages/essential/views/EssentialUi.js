import React, { Component } from 'react';
import BScroll from 'better-scroll'

import Search from 'components/common/search/Search'
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { Swiper } from 'pages/essential/views/swiper/Swiper'
import NavItem from 'pages/essential/views/NavItem/NavItem'
import ListContainer from 'pages/essential/views/ListContainer/ListContainer'
import Trade from 'pages/essential/views/Trade/Trade'
import {
    StyledEssentialContainer,
    MainHeader,
    City,
    SearchWrap,
    Clsaaify,
    SwiperContent,
    MainHeaderWrap,
    NavHeader,
    NavHeaderItem,
    NavSlider,
    SliderItem,
    NavContainer,
    CmsModule,
    CmsMiddle,
    HomeListContainer,
    HomeListHeader,
    HomeListItems,
    HomeListMinHeader,
    HomeListMinHeaderSpan,
    FixHomeListContainer
} from './styledComponents'
import { withRouter } from 'react-router-dom'
// import {ClassifyContainer} from "pages/classify"
class EssentialUi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dir: 'left',
            navOne: [],
            navList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},],
            currentIndex: 0,
            currentMinIndex: 1,
            ListMinNavArr: ["本地优先", "综合", "成交", "好评"],
            isShowBackground: false,
            isListNav: false,
            listdata: [],
            categoryId: 5857,
            sort: 1,
            page: 1,
        }
    }
    render() {
        const navOne = this.props.navData.slice(0, 9)
        const navTwo = this.props.navData.slice(9, 18)
        let fixHeader = null
        let normalListHeader = null
        if (this.state.isListNav) {
            fixHeader = (
                <FixHomeListContainer>
                    <HomeListHeader>
                        <div ref={div => this.crossScrollId = div} id="crossScroll">
                            <div>
                                {
                                    this.state.navList.map((v, i) => {
                                        return (
                                            <HomeListItems
                                                key={i} >
                                                <span onTouchStart={(e) => this.handleNavClick(v, i, e)} className={this.state.currentIndex === i ? "active" : ""}>
                                                    {v.title}
                                                </span>
                                            </HomeListItems>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </HomeListHeader>
                    <HomeListMinHeader>
                        {this.state.ListMinNavArr.map((v, i) => {
                            return (
                                // null
                                <HomeListMinHeaderSpan key={i} active={this.state.currentMinIndex === i ? "true" : "false"} onTouchStart={(e) => this.handleMinNavClick(v, i, e)} >{v}</HomeListMinHeaderSpan>
                                // active={this.state.currentIndex === i}
                            )
                        })}
                    </HomeListMinHeader>
                </FixHomeListContainer>
            )
        } else {
            normalListHeader = (
                <HomeListContainer>
                    <HomeListHeader>
                        <div ref={div => this.crossScrollId = div} id="crossScroll">
                            <div>
                                {
                                    this.state.navList.map((v, i) => {
                                        return (
                                            <HomeListItems
                                                key={i} >
                                                <span onTouchStart={(e) => this.handleNavClick(v, i, e)} className={this.state.currentIndex === i ? "active" : ""}>
                                                    {v.title}
                                                </span>
                                            </HomeListItems>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </HomeListHeader>
                    <HomeListMinHeader>
                        {this.state.ListMinNavArr.map((v, i) => {
                            return (
                                // null
                                <HomeListMinHeaderSpan key={i} active={this.state.currentMinIndex === i ? "true" : "false"} onTouchStart={(e) => this.handleMinNavClick(v, i, e)} >{v}</HomeListMinHeaderSpan>
                                // active={this.state.currentIndex === i}
                            )
                        })}
                    </HomeListMinHeader>
                </HomeListContainer>
            )
        }
        // console.log(this.props.ChangeselectedTab)
        return (
            <StyledEssentialContainer>
                <MainHeaderWrap>
                    <MainHeader isShowBackground={this.state.isShowBackground}>
                        <City>
                            <div></div>
                            <span>全国</span>
                        </City>
                        <SearchWrap>
                            <Search></Search>
                        </SearchWrap>
                        <Clsaaify onClick={() => this.props.ChangeselectedTab("classify")}>
                            <div></div>
                            <span>分类</span>
                        </Clsaaify>
                    </MainHeader>
                </MainHeaderWrap>
                {fixHeader}
                <div ref={div => this.ScrollId = div} id="Scroll" style={{ height: "100%" }}>
                    <div>
                        <SwiperContent>
                            <Swiper></Swiper>
                        </SwiperContent>
                        <NavHeader>
                            <div className="NavContainerWrap">
                                <NavContainer dir={this.state.dir} className="NavContainerWrapx">
                                    <NavItem navOne={navOne}></NavItem>
                                    <NavItem navOne={navTwo}></NavItem>
                                </NavContainer>

                            </div>
                            <div className="NavSliderWrap">
                                <NavSlider>
                                    <NavHeaderItem onClick={() => this.handleNavHeaderClick('left')}></NavHeaderItem>
                                    <NavHeaderItem onClick={() => this.handleNavHeaderClick('right')}></NavHeaderItem>
                                    <SliderItem dir={this.state.dir}></SliderItem>
                                </NavSlider>
                            </div>
                        </NavHeader>
                        <CmsModule>
                            <div className="cmsLeft"></div>
                            <CmsMiddle>
                                <span></span>
                                <Trade tradeData={this.props.tradeData}></Trade>
                            </CmsMiddle>
                            <div className="cmsRight">更多
                        <div></div>
                            </div>
                        </CmsModule>
                        {normalListHeader}

                        <ListContainer listdata={this.state.listdata}></ListContainer>

                    </div>
                </div>
            </StyledEssentialContainer>

        )
    }
    handleClassify() {
        console.log(this.props.history)
    }
    componentWillMount(){
                //主页列表数据
                const li = 'page=1&pagesize=10&sort=1&minOpenShopDays=0&guidCategoryIds=1234'
                // console.log(li)
                fetch("/shop/search/v2", {
                    method: 'post',
                    // credentials: 'include' ,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: li
                })
                    .then(response => {
                        if (response.ok) {
                            return response.json()
                        } else {
                            return Promise.reject('something went wrong!')
                        }
                    })
                    .then(data => {
                        this.setState({
                            listdata: data.data.list
                        })
                    })
                    .catch(error => console.log('error is', error))
    }
    componentDidMount() {
        this.crossScroll = new BScroll(this.crossScrollId,
            {
                probeType: 1,
                click: true,
                scrollX: true,
            }
        )
        this.scroll = new BScroll(this.ScrollId, {
            probeType: 0,
            click: true,
            pullUpLoad: {
                threshold: 50
            }
        })
        this.scroll.on("scroll", () => {
            this.crossScroll = new BScroll(this.crossScrollId,
                {
                    probeType: 2,
                    click: true,
                    scrollX: true,

                }
            )
            if (this.scroll.y < -87) {
                this.setState({
                    isShowBackground: true
                })
            } else {
                this.setState({
                    isShowBackground: false
                })
            }
            if (this.scroll.y > -384) {
                this.setState({
                    isListNav: false
                })
            } else {
                this.setState({
                    isListNav: true
                })
            }
        })


        this.scroll.on("pullingUp", () => {
            const li = 'page=' + (++this.state.page) + '&pagesize=10&sort=1&minOpenShopDays=0&guidCategoryIds=1234'
            this.setState({
                page: this.state.page++
            })
            fetch("/shop/search/v2", {
                method: 'post',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: li
            })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        return Promise.reject('something went wrong!')
                    }
                })
                .then(data => {
                    this.setState({
                        listdata: [...this.state.listdata, ...data.data.list]
                    }, () => {
                        this.scroll.refresh();
                    })
                })
                .catch(error => console.log('error is', error))
            this.scroll.finishPullUp();
        })

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            navList: [...nextProps.navData]
        })
    }
    handleNavClick(v, i, e) {
        if (this.scroll.y < -388) {
            this.scroll.scrollTo(0, -388, 1000)
        }
        this.getCriticalPoint(e)
        this.setState({
            currentIndex: i,
            categoryId: v.categoryId
        })
        const li = 'page=1&pagesize=10&sort=1&minOpenShopDays=0&guidCategoryIds=' + this.state.categoryId
        fetch("/shop/search/v2", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: li
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                this.setState({
                    listdata: data.data.list
                })
                // console.log(this.state.listdata)
            })
            .catch(error => console.log('error is', error))
    }
    handleMinNavClick(v, i, e) {
        if (this.scroll.y < -388) {
            this.scroll.scrollTo(0, -388, 1000)
        }
        const sorts = [2, 1, 5, 4]
        this.setState({
            currentMinIndex: i,
            sort: sorts[i]
        })
        const li = 'page=1&pagesize=10&sort=' + this.state.sort + '&minOpenShopDays=0&guidCategoryIds=' + this.state.categoryId
        fetch("/shop/search/v2", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: li
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                this.setState({
                    listdata: data.data.list
                })
                // console.log(this.state.listdata)
            })
            .catch(error => console.log('error is', error))
    }
    handleNavHeaderClick(dir) {
        this.setState({
            dir,
        })
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    getCriticalPoint(e) {
        const leftX = e.touches[0].clientX - 17 < 50
        if (leftX) {
            this.crossScroll.scrollBy(100, 0, 100)
            this.crossScroll.refresh()
        }
        const leftR = e.touches[0].clientX - 358 > -50
        if (leftR) {
            this.crossScroll.scrollBy(-100, 0, 100)
            this.crossScroll.refresh()
        }
    }
}

export default withRouter(EssentialUi);