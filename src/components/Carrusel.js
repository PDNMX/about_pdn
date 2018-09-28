import React from 'react';
import SingleLineGridList from './SingleLineGridList';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        flexGrow:1
    },
    title: {
        color: '#96cb99'
    }
});
class Carrusel extends React.Component{

    render(){

        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant={'display2'} className={classes.title}>Conoce más</Typography>
                <br/>
                <br/>
                <SingleLineGridList/>
            </div>
        )
    }

}

Carrusel.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Carrusel);