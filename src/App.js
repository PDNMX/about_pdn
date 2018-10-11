import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Typography from "@material-ui/core/Typography";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import QueEs from './components/QueEs';
import Sectores from './components/Sectores';
import Terminos from './components/Terminos';
//import QueHacemos from './components/QueHacemos';
//import QueSigue from './components/QueSigue';
import Objetivos from './components/Objetivos';
import Carrusel from './components/Carrusel';
import Uso from './components/Uso';
import Interoperabilidad from './components/Interoperabilidad';
import Construimos from './components/Construimos';
import Grid from '@material-ui/core/Grid';

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
        //display: 'flex',
        //flexDirection: 'column',
        //height: '100vh'
    },
    contents: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 5,
        [theme.breakpoints.up('sm')]:{
            //maxWidth: 1024
            marginLeft: theme.spacing.unit * 25,
            marginRight: theme.spacing.unit * 25
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
    gridItem:{
        maxWidth: '1024px',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});



function Home(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Header/>

            <Grid container spacing={0} justify="center">
                <Grid item xs={12} className={classes.gridItem}>
                    <QueEs/>
                </Grid>
            </Grid>

            <Grid container spacing={0} justify="center" style={{background: "#f9f9f9"}}>
                <Grid item xs={12} className={classes.gridItem}>
                    <Sectores/>
                </Grid>
            </Grid>

            <Grid container spacing={0} justify="center" style={{background: '#e6e6e6'}}>
                <Grid item xs={12} className={classes.gridItem}>
                    <Objetivos/>
                </Grid>
            </Grid>

            {/*
                    <Grid container spacing={24} justify="center" style={{background: '#37464f'}}>
                        <Grid item xs={12} className={classes.gridItem}>
                            <QueHacemos/>
                        </Grid>
                    </Grid>
                    */}

            <Grid container spacing={0} justify='center' style={{background: '#37464f'}}>
                <Grid item xs={12} className ={classes.gridItem}>
                    <Interoperabilidad/>
                </Grid>
            </Grid>


            <Grid container spacing={0} justify='center'>
                <Grid item xs={12} className={classes.gridItem}>
                    <Construimos/>
                </Grid>
            </Grid>

            {/*<div style={{background: "#e6e6e6"}}>
                        <div className={classes.contents}>
                            <QueSigue/>
                        </div>
                    </div>*/}


            <Grid container justify="center" spacing={0}>
                <Grid item xs={12} className={classes.gridItem}>
                    <Carrusel/>
                </Grid>
            </Grid>


            <Grid container justify="center" spacing={0} style={{background: '#f9f9f9'}}>
                <Grid item xs={12} className={classes.gridItem}>
                    <Uso/>
                </Grid>
            </Grid>

            <Grid container justify="center" spacing={0} style={{background:  "#fff"}}>
                <Grid item xs={12} className={classes.gridItem}>
                    <Footer/>
                </Grid>
            </Grid>
        </div>);

}

Home = withStyles(styles)(Home);


function NotFound(props){
    return (
        <div>
            Not Found
        </div>
    );
}


class App extends Component {
    render() {

        //const {classes} = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                {/*<Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/terminos" component={Terminos}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>*/}
                <Home/>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
