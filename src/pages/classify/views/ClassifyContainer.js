import React, { Component } from 'react';
import ClassifyUI from "pages/classify/views/ClassifyUI"
import { withRouter } from 'react-router-dom'
class ClassifyContainer extends Component {
    constructor() {
        super()
        this.state = {
            leftListData: [],
            rightListData: [],
            guidCategoryIds: 1234,
            page:1
        }
        // this.changeGuidCategoryIds.bind(this)
    }
    componentDidMount() {
        //左侧数据
        fetch('/category/getLabelNavigation', {
            method: 'post',
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    leftListData: data.data
                }, () => {

                })
            });
        //右侧数据 
        const li = 'page=1&pagesize=10&sort=1&minOpenShopDays=0&guidCategoryIds=' + this.state.guidCategoryIds


        fetch("/shop/search/v2", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: li
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    rightListData: data.data.list
                }, () => {
                })
            });
    }
    changeGuidCategoryIds(categoryId) {
        this.setState({
            guidCategoryIds: categoryId
        })
        //右侧数据 
        const li = 'page=1&pagesize=10&sort=1&minOpenShopDays=0&guidCategoryIds=' + categoryId


        fetch("/shop/search/v2", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: li
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    rightListData: data.data.list
                }, () => {

                })
            });
    }
    receivePage(page){
        this.setState({
            page
        })   
        //右侧数据 
        const li = 'page='+page+'&pagesize=10&sort=1&minOpenShopDays=0&guidCategoryIds=' + this.state.guidCategoryIds


        fetch("/shop/search/v2", {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: li
        })
            .then(response => response.json())
            .then(data => {                
                this.setState({
                    rightListData: [...this.state.rightListData,...data.data.list]
                }, () => {
                    console.log(this.state.rightListData)
                })
            });
    }

    render() {
        
        return (
            <ClassifyUI receivePage={this.receivePage.bind(this)} guidCategoryIds={this.state.guidCategoryIds} changeGuidCategoryIds={this.changeGuidCategoryIds.bind(this)} rightListData={this.state.rightListData} leftListData={this.state.leftListData} leftListActive={this.state.leftListActive}>

            </ClassifyUI>
        )
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
}
export default withRouter(ClassifyContainer)