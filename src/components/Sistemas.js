import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import s1 from '../assets/icono1.svg';
import s2 from '../assets/icono2.svg';
import s3 from '../assets/icono3.svg';
import s4 from '../assets/icono4.svg';
import s5 from '../assets/icono5.svg';
import s6 from '../assets/icono6.svg';

const styles = theme => ({

    icons: {
        width: '80px'
    }

});

class Sistemas extends React.Component {

    render () {
        const {classes } = this.props;

        return (
            <div>
                <Typography variant={'title'}>
                    Sistemas Prioritarios
                </Typography>

                <img className={classes.icons} src={s1} alt="Sistema 1"/>
                <img className={classes.icons} src={s2} alt="Sistema 2"/>
                <img className={classes.icons} src={s3} alt="Sistema 3"/>
                <img className={classes.icons} src={s4} alt="Sistema 4"/>
                <img className={classes.icons} src={s5} alt="Sistema 5"/>
                <img className={classes.icons} src={s6} alt="Sistema 6"/>






            </div>
        )
    }
}

Sistemas.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sistemas);