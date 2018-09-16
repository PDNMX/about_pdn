import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import s1 from '../assets/icono1.svg';
import s2 from '../assets/icono2.svg';
import s3 from '../assets/icono3.svg';
import s4 from '../assets/icono4.svg';
import s5 from '../assets/icono5.svg';
import s6 from '../assets/icono6.svg';

const styles = theme => ({

    icons: {
        width: '80px'
    },
    item: {
        textAlign: 'center'
    },
    chip: {
        background: '#96cb99',
        color: '#fff',
        fontSize: '55px',
        height: '55px',
        width: '55px',
        borderRadius: '50%'
    }

});

class Sistemas extends React.Component {

    render () {
        const {classes } = this.props;

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant={'display3'} style={{color: '#96cb99'}}>
                            <Chip label={6} className={classes.chip}/> Sistemas Prioritarios
                        </Typography>
                    </Grid>

                    <Grid item xs={4} className={ classes.item }>
                        <img className={classes.icons} src={s1} alt="Sistema 1"/>
                        <Typography>Declaraciones patrimonial, de intereses y constancia
                        de declaración fiscal
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.item}>
                        <img className={classes.icons} src={s2} alt="Sistema 2"/>
                        <Typography>
                            Servidores públicos que intervienen en procedimientos de
                            contratación
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className = {classes.item}>
                        <img className={classes.icons} src={s3} alt="Sistema 3"/>
                        <Typography>
                            Contrataciones Públicas
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className = {classes.item }>
                        <img className={classes.icons} src={s4} alt="Sistema 4"/>
                        <Typography>
                            Denuncias por faltas administrativas y hechos de corrupción
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.item}>
                        <img className={classes.icons} src={s5} alt="Sistema 5"/>
                        <Typography>
                            Información y comunicación del Sistema Nacional Anticorrupción
                            y el Sistema Nacional de Fiscalización
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.item }>
                        <img className={classes.icons} src={s6} alt="Sistema 6"/>
                        <Typography>
                            Servidores públicos y particulares sancionados
                        </Typography>
                    </Grid>

                </Grid>

            </div>
        )
    }
}

Sistemas.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sistemas);