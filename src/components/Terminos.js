import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PDNAppBar from './PDNAppBar';

const styles = theme => ({
    root: {
        flexGrow:1
    },
    section: {
        maxWidth: '1024px'
    }
});

class Terminos extends React.Component{
    render (){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <PDNAppBar/>
                <Grid container spacing={0} justify='center'>
                    <Grid item xs={12} className={classes.section}>
                        <Typography>
                            Términos de uso
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Terminos.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Terminos);