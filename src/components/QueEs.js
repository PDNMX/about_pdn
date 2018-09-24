import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import mapita from '../assets/mapa.svg';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
    root : {

    },
    mapita: {
        maxWidth: "70%"
    },
    greenText: {
        color: '#96cb99'
    }
});

class QueEs extends React.Component{

    render (){
        const { classes } = this.props;

        return (
            <div>

                <Typography style={{color:'#96cb99'}} variant="title">¿Qué es la Plataforma Digital Nacional</Typography>

                <br/>

                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <img src={mapita} alt="Mapita" className={classes.mapita}/>
                    </Grid>

                    <Grid item xs={6}>

                        <Typography>
                            La <b>Plataforma Digital Nacional (PDN) </b> es una fuente de
                            <b className={classes.greenText}> inteligencia anticorrupción</b> que creará impacto y generará valor para el gobierno y
                            la sociedad, a partir de los datos.
                        </Typography>
                        <br/>
                        <Typography>
                            La Plataforma hará que toda la información anticorrupción del Gobierno Federal, Estados, y
                            Poderes, sea comparable y utilizable, empezando con <b className={classes.greenText}>seis sectores estratégicos</b>:
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(QueEs);