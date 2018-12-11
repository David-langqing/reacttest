import React, { Component } from 'react';

import {
    SearchContent,
    SpanEllipsis
} from './styledComponent'

class Search extends Component {
    render() {
        return (
            <SearchContent>
                <div>
                    <i></i>
                    <div className="searchspanwrapper">
                        <SpanEllipsis>搜索专业人才为您服务，如:包装设计</SpanEllipsis>
                    </div>
                </div>
                
            </SearchContent>
        )
    }
}
export default Search;