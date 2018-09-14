import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles  = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 7,
        paddingBottom: theme.spacing.unit * 7,
        background: "#fff"
    }
});

class Footer extends React.Component{

    render (){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography>
                    Conoce más en <b><a href="https://www.gob.mx/sesna">www.gob.mx/sesna</a></b> o escribenos a <b>contactosesna@sesna.gob.mx</b>
                </Typography>
            </div>
        )
    }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Footer);