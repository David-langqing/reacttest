import React from 'react'
import { Grid } from 'antd-mobile';
import _ from "lodash"

class RightGrid extends React.Component {
    render() {
        let gridData = []
        if(this.props.gridData.length>0){
            gridData=_.sampleSize(this.props.gridData,9)
        }
        
        const data = gridData.map((v, i) => ({
            icon: v.iconUrl,
            text: v.title,
        }));
        return (
            <div>
                <div className="sub-title">热门服务</div>
                <Grid data={data} activeStyle={false} columnNum={3} />
            </div>
        )
    }

}
export default RightGrid