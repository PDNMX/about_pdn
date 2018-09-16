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
                    <Typography style={{color:'#96cb99'}} variant="subtitle">¿Qué es la</Typography>
                    <Typography variant="title" style={{color: '#96cb99'}}>Plataforma Digital Nacional</Typography>
                </div>

                <br/>

                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <img src={mapita} alt="Mapita" className={classes.mapita}/>
                    </Grid>

                    <Grid item xs={6}>

                        <Typography>
                            Bajo una perpectiva de autonomía, neutralidad y análisis, desde la <b>Plataforma Digital Nacional (PDN)</b>
                            trabajamos para construir una fuente de <b>inteligencia anticorrupción</b>, basada inicialmente, en datos
                            de <b>6 sistemas prioritarios</b> contemplados en la Ley General del Sistema Nacional Anticorrupción (LGSNA).
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(QueEs);