import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root : {

    },
    title: {
        textAlign: 'center'
    }
});

class QueEs extends React.Component{

    render (){
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.title}>
                    <Typography>¿Qué es la</Typography>
                    <Typography variant="title">Plataforma Digital Nacional</Typography>
                </div>


                <Typography>
                    Bajo una perpectiva de autonomía, neutralidad y análisis, desde la <b>Plataforma Digital Nacional (PDN)</b>
                    trabajamos para construir una fuente de <b>inteligencia anticorrupción</b>, basada inicialmente, en datos
                    de <b>6 sistemas prioritarios</b> contemplados en la Ley General del Sistema Nacional Anticorrupción (LGSNA).
                </Typography>
            </div>
        )
    }
}


export default withStyles(styles)(QueEs);