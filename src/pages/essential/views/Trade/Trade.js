import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';


class Trade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradeData: [{brandName:'甲骨映画'}, {brandName:'甲骨映画'}, {brandName:'甲骨映画'}, {brandName:'甲骨映画'}]
    }
  }
  componentDidMount() {

    setTimeout(
      () => {
        this.setState({
          tradeData:this.props.tradeData
        });
      }, 1000
    )
    }
    componentDidMount() {
      this.setState({alive: true});
  }
  
    render() {
      return(
        <Carousel className="my-carousel"
        vertical
        dots={false}
        dragging={false}
        swiping={false}
        autoplay={true}
        infinite
        speed={200}
        autoplayInterval={1000}
        resetAutoplay={false}
      >
        {this.state.tradeData.map(
          (v, i) => (
            <div className="v-item" key={i}>{v.brandName}</div>
          )
        )}
      </Carousel>
      )
    }
}
export default Trade
