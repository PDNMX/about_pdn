import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Bd from '../assets/grafico-BD.svg';
import Ejes from '../assets/grafico-ejes.svg';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    bd: {
        maxWidth: "200px"
    },
    ejes: {
        maxWidth: "400px"
    },
    itemCentered:{
        textAlign: 'center'
    },
    greenText: {
        color: '#96cb99'
    },
    whiteText: {
        color: '#e6e6e6'
    },
    bullet: {
        backgroundColor: '#96cb99',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        display: 'inline-block'
    }
});

class QueHacemos extends React.Component{
    render (){
        const { classes } = this.props;
        return (
            <div>

                <Grid container spacing={24}>
                    <Grid item xs={6} className={classes.itemCentered}>
                        <img src={Bd} alt="PDN" className={classes.bd}/>
                    </Grid>



                    <Grid item xs={6}>
                        <Typography className={classes.whiteText}>
                            La PDN permitirá que las base de datos de los sistemas estén estandarizadas y sean interoperables.
                        </Typography>
                            <br/>
                        <Typography className={classes.whiteText}>
                            El objetivo es contar con datos de calidad, para apoyar esfuerzos ecistentes y detonar nuevos mecanismos
                            inteligentes, eficientes y eficaces para combatir la corrupción, de manera multidisciplinaria, colaborativa y multisectorial.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography  className={classes.greenText} variant="title">
                            ¿Qué estamos haciendo?
                        </Typography>
                        <Typography  className={classes.whiteText}>
                            Trabajamos en cinco ejes clave para desarrollar y fomentar el uso de la Plataforma
                        </Typography>

                        <br/>
                        <Typography className={classes.whiteText}> <span className={classes.bullet}/> Diseño centrado en las usuarias-os y sus necesidades</Typography>
                        <Typography className={classes.whiteText}> <span className={classes.bullet}/> Construcción gradual, modular, escalable, ágil y flexible</Typography>
                        <Typography className={classes.whiteText}> <span className={classes.bullet}/> Datos interoperables y abiertos</Typography>
                        <Typography className={classes.whiteText}> <span className={classes.bullet}/> Seguridad de la información y protección de datos personales</Typography>
                        <Typography className={classes.whiteText}> <span className={classes.bullet}/> Creación de impacto y entrega de valor público en el centro</Typography>

                    </Grid>

                    <Grid item xs={6} className={classes.itemCentered}>
                        <img src = {Ejes} alt="Ejes" className={classes.ejes}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

QueHacemos.propTypes = {
    classes : PropTypes.object.isRequired
};

export default withStyles(styles) (QueHacemos);
