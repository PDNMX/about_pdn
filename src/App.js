import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Terminos from './components/Terminos';
import About from './components/About';

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
                <Router>
                    <Switch>
                        <Route exact path="/" component={About}/>
                        <Route path="/terminos" component={Terminos}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
