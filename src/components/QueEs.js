import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import mapita from '../assets/mapa.svg';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
    root : {

    },
    title: {
        textAlign: 'center'
    },
    mapita: {
        maxWidth: "70%"
    }
});

class QueEs extends React.Component{

    render (){
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.title}>
                    <Typography style={{color:'#96cb99'}} variant="display2">¿Qué es la</Typography>
                    <Typography variant="display3" style={{color: '#96cb99'}}>Plataforma Digital Nacional</Typography>
                </div>

                <br/>

                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <img src={mapita} alt="Mapita" className={classes.mapita}/>
                    </Grid>

                    <Grid item xs={6}>

                        <Typography>
                            La <b>Plataforma Digital Nacional (PDN) </b> es una fuente de
                            <b>inteligencia anticorrupción</b> que creará impactto y generará valor para el gobierno y
                            la sociedad, a partir de los datos.
                        </Typography>
                        <br/>
                        <Typography>
                            La Plataforma hará que toda la información anticorrupción del gobierno federal, estados, y
                            Poderes, sea comparable y utilizable, empezando con <b>seis sectores estratégicos</b>:
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(QueEs);