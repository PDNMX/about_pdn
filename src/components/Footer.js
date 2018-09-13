import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles  = theme => ({

});

class Footer extends React.Component{

    render (){
        const { classes } = this.props;
        return <Typography>Footer</Typography>
    }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Footer);