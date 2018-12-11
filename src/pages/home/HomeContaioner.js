import React, { Component,Fragment } from 'react';
import {Route} from "react-router-dom"

import {TabBar} from 'antd-mobile'

import home from 'images/home.png'
import homeSelected from 'images/home-selected.png'
import Collect from 'images/collect.png'
import CollectActive from 'images/collect_active.png'
import classify from 'images/classify.png'
import classifySelected from 'images/classify-selected.png'
import my from 'images/my.png'
import mySelected from 'images/my-selected.png'
import {EssentialContainer} from 'pages/essential'
import {ClassifyContainer} from "pages/classify"
import {CollectContainer} from "pages/collect"
import {ProfileContainer} from 'pages/profile'
class HomeContaioner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'profile',
            fullScreen: true,
        };
    }
    ChangeselectedTab(tab){
        this.setState({
            selectedTab: tab,
        })
    }
    render() {
        return (
            <Fragment>
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="gray"
                        tintColor="#7f4395"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="首页"
                            key="Essential"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${home}) center center /  21px 21px no-repeat` }}
                                />
                                }
                                selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${homeSelected}) center center /  22px 22px no-repeat` }}
                                />
                                }
                                selected={this.state.selectedTab === 'Essential'}
                                onPress={() => {
                                this.setState({
                                    selectedTab: 'Essential',
                                });
                                }}
                                data-seed="logId"
                        >
                            <EssentialContainer style={ {overflow:"hidden"}} ChangeselectedTab={this.ChangeselectedTab.bind(this)}></EssentialContainer>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background:  `url(${classify}) center center /  21px 21px no-repeat` }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background:  `url(${classifySelected}) center center /  22px 22px no-repeat` }}
                            />
                            }
                            title="分类"
                            key="classify"
                            selected={this.state.selectedTab === 'classify'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'classify',
                            });
                            }}
                            data-seed="logId1"
                        >
                            <ClassifyContainer></ClassifyContainer>
                        </TabBar.Item>
                        
                        <TabBar.Item
                            icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background:  `url(${Collect}) center center /  21px 21px no-repeat` }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background:  `url(${CollectActive}) center center /  21px 21px no-repeat` }}
                            />
                            }
                            title="收藏"
                            key="Collect"
                            selected={this.state.selectedTab === 'Collect'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'Collect',
                            });
                            }}
                            data-seed="logId1"
                        >
                            <CollectContainer></CollectContainer>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background:  `url(${my}) center center /  21px 21px no-repeat` }}
                            />
                            }
                            selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${mySelected}) center center /  22px 22px no-repeat` }}
                            />
                            }
                            title="我的"
                            key="profile"
                            selected={this.state.selectedTab === 'profile'}
                            onPress={() => {
                            this.setState({
                                selectedTab: 'profile',
                            });
                            }}
                        >
                            <ProfileContainer></ProfileContainer>
                        </TabBar.Item>
                    </TabBar>
                </div>
            </Fragment>
        );
    }
}

export default HomeContaioner;