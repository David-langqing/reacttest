import React, { Component } from 'react';
import { connect } from 'react-redux'

import EssentialUi from  './EssentialUi'
import { loadDataAsync } from '../actionCreator';


const mapState = (state) => {
    return {
		navlists: state.getIn(['essential','navlists']),
		collectTotal: state.getIn(['detail', 'collectTotal'])
    }
}
const mapDispatch = (dispatch)=>{
    return {
        loadlists(){
            dispatch(loadDataAsync(dispatch))
        }
    }
}
class EssentialContainer extends Component {
    constructor (props) {
		super(props)
	
		this.state = {
			navData:[],
			tradeData:[]
		}
	}
    render() {
        return (
            <EssentialUi ChangeselectedTab={this.props.ChangeselectedTab} {...this.props} navData ={ this.state.navData} tradeData = {this.state.tradeData}></EssentialUi>
			// crossScroll = {this.crossScroll.bind(this)} getCrossScrollId = {this.getCrossScrollId}
        );
	}
	componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
	}
    componentWillMount(){
		// loadlists
		this.props.loadlists()
		//首页宫格数据,listnav数据
        fetch("/category/getLabelNavigation/",{
		    method: 'post',
		    credentials: 'include' 
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
				navData:data.data
			})
		})
		.catch(error => console.log('error is', error));
		//首页交易快报数据
		
		// fetch("/shunt/favorite/",{
		//     method: 'get',
		//     credentials: 'include' 
		// })
		// .then(response => {
		// 	if (response.ok) {
		// 		return response.json()
		// 	} else {
		// 		return Promise.reject('something went wrong!')
		// 	}
		// })
		// .then(data => {
		// 	this.setState({
		// 		tradeData:data.data.list
		// 	})
		// })
		// .catch(error => console.log('error is', error))
		//首页list横向bscroll
		
	}
   
    
}

export default connect(mapState,mapDispatch)(EssentialContainer);