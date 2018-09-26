import React from 'react';
//import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import SESNA from '../assets/LogotipoSESNA.svg';

const styles  = theme => ({
    root: {
        textAlign: 'center',
        //paddingTop: theme.spacing.unit,
        //paddingBottom: theme.spacing.unit,
        background: "#fff"
    },
    logo:{
      maxWidth: '300px'
    }
});

class Footer extends React.Component{

    render (){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <img src={SESNA} alt='SESNA' className={classes.logo}/>
            </div>
        )
    }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Footer);