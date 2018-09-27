import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Gi from '../assets/grafico-interoperabilidad.svg';

const styles = theme => ({
    root : {
        flexGrow: 1
    }
});


class Interoperabilidad extends React.Component{
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant='title'>
                    PDN como Plataforma de Interoperabilidad
                </Typography>


                <Grid container spacing={24}>

                    <Grid item xs={6}>
                        <Typography>
                            La PDN permitirá que los datos de cada sector,
                            generados y administrados por las instituciones de
                            los tres poderes de gobierno y organismos
                            autónomos, estén estandarizados y sean interoperables.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography>
                            La PDN será el lugar que provocará la interoperabilidad,
                            consulta y uso de estos datos para toda la ciudadanía.
                        </Typography>

                    </Grid>
                </Grid>

                <Grid container spacing={24} justify='center'>
                    <Grid item xs={12}>
                        <img src={Gi} alt="Interoperabilidad"/>
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