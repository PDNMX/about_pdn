import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from '@material-ui/core/Button';
import imgHeader from "../assets/logo_sin_fondo.png";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing.unit * 1.7
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        [theme.breakpoints.up('sm')]:{
            marginLeft: '80px'
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft: theme.spacing.unit
        },
        marginRight: 20,
    },
    lastButton: {
        [theme.breakpoints.up('sm')]: {
            marginRight: '80px'
        }
    }
});

class PDNAppBar extends React.Component {

    render(){
        const {classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar color="default"  position="static" >
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <img src={imgHeader} alt="logoPDN" style={{width:'55px'}}/>

                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>

                        </Typography>

                        <Button color="inherit" href="/datos">
                            Datos
                        </Button>
                        <Button color="inherit" href="/blog" className={classes.lastButton}>
                            Blog
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

PDNAppBar.propTypes= {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PDNAppBar);