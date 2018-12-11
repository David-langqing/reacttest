import React, { Component } from 'react';
import {
  ListContainerStyled,
  ListItems,
  ListFirstP,
  ListSecondSpan,
  ListThree,
  ListFour
} from 'pages/essential/views/styledComponents'
import { withRouter } from 'react-router-dom'
class ListContainer extends Component {
  render() {
    return (
      <ListContainerStyled>
        {this.props.listdata.map((v, i) => {
          return (
            <ListItems key={i} onClick={() => this.toDetail(v)}>
              <div>
                <img src={v.shopPhoto} alt="listItem" />
                <div>
                  <div className="listFirst">
                    <ListFirstP>{v.brandName}</ListFirstP>
                    <span>
                      {v.cityName}
                </span>
                  </div>
                  <div className="listSecond">
                    <ListSecondSpan>企业</ListSecondSpan>
                    <ListSecondSpan>{v.abilityVO.abilityName}</ListSecondSpan>
                  </div>
                  <div className="listThree">
                    <ListThree>
                      <span>{v.expertTagNames[0]}</span>
                      <span>{v.expertTagNames[1]}</span>
                      <span>{v.expertTagNames[2]}</span>
                    </ListThree>
                  </div>
                  <div className="listFour">
                    <ListFour>
                      <span>{v.shopName}</span>
                      <span>{v.townName}</span>
                    </ListFour>
                  </div>
                </div>
              </div>
            </ListItems>
          )
        })}

       
      </ListContainerStyled>
    )
  }
  toDetail(v){
    this.props.history.push('/detail',
    { v } 
    )
  }
}

export default withRouter(ListContainer)