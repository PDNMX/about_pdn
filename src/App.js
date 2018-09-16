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

import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main:'#295c53',
            light:'#56897f',
            dark:'#00322b'
        },
        secondary: {
            main: '#8fe19f',
            light: "#c1ffd0",
            dark:'#5eaf70'
        },
        fontLight:{
            color: "#f5f5f5"//"#e0e0e0"
        },
        grey:{
            color:"#707070"
        },
        greyTitle:{
            color:"#333333"
        },
        graphGreen:{
            color:"#00cc99"
        }
    },
    overrides:{
        MuiTableHead:{
            root:{
                backgroundColor: '#8fe19f'
            }
        }
    }

});

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
            marginLeft: theme.spacing.unit * 15,
            marginRight: theme.spacing.unit * 15
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
            <MuiThemeProvider theme ={theme}>
                <div className={classes.root}>
                    <Header/>
                    <div className={classes.contents}>
                        <QueEs/>
                    </div>
                    <div style={{background: "#e6e6e6"}}>
                        <div className={classes.contents}>
                            <Sistemas/>
                        </div>
                    </div>
                    <div style={{background: '#37464f'}}>
                        <div className={classes.contents}>
                            <QueHacemos/>
                        </div>
                    </div>

                    <div style={{background: "#e6e6e6"}}>
                        <div className={classes.contents}>
                            <QueSigue/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
