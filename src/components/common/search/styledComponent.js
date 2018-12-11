import styled from 'styled-components'
import search from 'images/search.png'
import ellipsis from 'components/common/styled/ellipsis'


const SearchContent = styled.div`
    /* padding: 0 0.1rem;
    margin-right:0.1rem; */
    background:#fff;
    width:100%;
    height:0.32rem;
    >div{
        
        width:100%;
        height:0.32rem;
        background:#fff;
        border-radius: .03rem;
        
        display: flex;
        
        i{
            width:0.32rem;
            height:0.32rem;
            display:block;
            background: url(${search}) center center /0.18rem 0.18rem  no-repeat
        }
        .searchspanwrapper{
            flex: 1;
            height: 100%;
            
        }
    }
`
const SpanEllipsis = ellipsis({
    component:styled.span`
        display:block;
        height:100%;
        line-height:0.32rem;
        font-size:0.14rem;
        color:gray;
     `,
     

})
export {
    SearchContent,
    SpanEllipsis
}