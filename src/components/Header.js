import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PDNAppBar from './PDNAppBar';
import bgi from '../assets/textura.jpg';


const styles = theme => ({
    root: {
        textAlign: 'center',
        backgroundImage: `url(${bgi})`,
        minHeight: '360px'
    }

});


class Header extends React.Component{

    render (){
        const {classes} = this.props;
        return (
            <div className={classes.root}>

                <PDNAppBar/>
                <Typography>Plataforma Digital Nacional</Typography>
                <Typography>Inteligencia de Datos Anticorrupcion</Typography>
                <div>Beta</div>

            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);