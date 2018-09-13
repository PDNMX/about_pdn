import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//import Typography from "@material-ui/core/Typography";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import QueEs from './components/QueEs';
import Sistemas from './components/Sistemas';
import QueHacemos from './components/QueHacemos';
import QueSigue from './components/QueSigue';

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    contents: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 5,
        [theme.breakpoints.up('sm')]:{
            marginLeft: '100px',
            marginRight: '100px'
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit
        }
    },
    paper: {
        padding: theme.spacing.unit * 2,
        //textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class App extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Header/>

                <div className={classes.contents}>
                    <QueEs/>
                    <Sistemas/>
                    <QueHacemos/>
                    <QueSigue/>

                </div>

                <Footer/>
            </div>
        );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
