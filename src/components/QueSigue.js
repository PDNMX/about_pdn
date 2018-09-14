import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chrono from '../assets/grafico-cronograma.svg';

const styles = theme => ({
    chrono:{
        width: '90%'
    }
});

class QueSigue extends React.Component{
    render (){
        const {classes} = this.props;

        return (
            <div>
                <Typography variant="title">
                ¿Qué sigue?
                </Typography>

                <img src={Chrono} alt="Cronograma" className={classes.chrono}/>
            </div>
        )
    }
}

QueSigue.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QueSigue);