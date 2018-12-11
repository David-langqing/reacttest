import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
class NavItem extends Component {
  render(){
    const data = this.props.navOne&&
    this.props.navOne.map((v, i) => ({
      icon: v.iconUrl,
      text: v.title,
    }));
    data && data.push({
      icon: "images/headerClassify.png",
      text: '更多...'
    })
    
    return(
      <div>
        <Grid data={data} activeStyle={false} columnNum={5} hasLine={false}/>
      </div>
    )
  }
}

export default NavItem