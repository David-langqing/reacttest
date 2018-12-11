// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import {reduer as essential } from 'pages/essential'
import {reducer as detail } from "pages/detail"
import {reducer as collect } from "pages/collect"
import {reducer as login } from "pages/login"

export default combineReducers  ({
    essential,
    detail,
    collect,
    login
})