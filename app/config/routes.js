/**
 * Created by carlosgonzalez on 11/11/16.
 */

var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;


var Main = require('../components/Main');
var Search = require('../components/Search');
var Query = require('../components/Query');


module.exports = (

    <Route path="/" component = {Main} >

        <Route path ="Search" component = {Search}></Route>
        <Route path = 'Query' component ={Query}></Route>

        {/*<IndexRoute component = {Search}/>*/}

    </Route>

);
