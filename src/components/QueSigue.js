import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({});

class QueSigue extends React.Component{
    render (){
        const {classes} = this.props;

        return (
            <div>
                <Typography variant="title">
                ¿Qué sigue?
                </Typography>
            </div>
        )
    }
}

QueSigue.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QueSigue);