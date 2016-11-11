/**
 * Created by carlosgonzalez on 11/11/16.
 */
var React = require('react');

// include all of the react dependencies
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = React.createClass({

    render: function () {

        return (
            <div className="container">

                <div className="jumbotron">
                    <h1> NYT REACT </h1>

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <form className="panel panel-default">
                            <div className="panel-heading"> Search your article</div>
                            <div className="panel-body">
                                <input type="text" className="form-control" placeholder="Topic"></input>
                                <br/>
                                <input type="number" className="form-control" placeholder="Start Year"></input>
                                <br/>
                                <input type="numer" className="form-control" placeholder="End Year"></input>
                                <br/>
                                <button type="submit" className="btn btn-default">
                                    <span className="glyphicon glyphicon-search"></span>
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="container">

                    {/*{this.props.children}*/}


                </div>


            </div>
        )

    }


});

module.exports = Main;