import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Gi from '../assets/grafico-interoperabilidad.svg';

const styles = theme => ({
    root : {
        flexGrow: 1
    },
    greenText: {
        color: '#96cb99'
    },
    whiteText: {
        color: '#e6e6e6'
    },

    interopera: {
        //maxWidth: '90%'
    }
});


class Interoperabilidad extends React.Component{
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant='display2' className={classes.greenText}>
                    PDN como Plataforma de Interoperabilidad
                </Typography>

                <br/>
                <br/>

                <Grid container spacing={24}>

                    <Grid item xs={6}>
                        <Typography className={classes.whiteText}>
                            La <b className={classes.greenText}>PDN</b> permitirá que los datos de cada sector,
                            generados y administrados por las instituciones de
                            los tres poderes de gobierno y organismos
                            <b className={classes.greenText}> autónomos, estén estandarizados y sean interoperables</b>.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography className={classes.whiteText}>
                            La <b className={classes.greenText}>PDN</b> será el lugar que provocará la <b className={classes.greenText}>interoperabilidad,
                            consulta y uso</b> de estos datos para toda la ciudadanía.
                        </Typography>

                    </Grid>
                </Grid>

                <br/>
                <br/>

                <Grid container spacing={24} justify='center'>
                    <Grid item xs={12}>
                        <img src={Gi} alt="Interoperabilidad" className={classes.interopera}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Interoperabilidad.propTypes ={
    classes : PropTypes.object.isRequired
};

export default withStyles(styles)(Interoperabilidad);