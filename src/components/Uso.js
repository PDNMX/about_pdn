import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {},
    paper : {
        padding: theme.spacing.unit * 2,
        marginTop: '20px',
        borderRadius: 0
    },
    li: {
        paddingBottom: theme.spacing.unit *2
    }
});

class Uso extends React.Component{
    render(){

        const {classes} = this.props;

        return(
            <div>
                <Typography variant="title">Conoce como se han usado los datos para combatir la corrupción en México:</Typography>

                <Paper className={classes.paper}>
                    <Typography>Aristegui Noticias utilizó datos abiertos para investigas posibles casos de espionaje.</Typography>
                    <Typography>Imco y OPI utilizaron datos de contrataciones para identificar riesgos e impulsar una cultura de prevención en contrataciones.</Typography>
                    <Typography>Data Cívica utilizó datos abiertos para reconstruir las declaraciones patrimoniales de servidores públicos del gobierno.</Typography>
                    <Typography>Animal Político utilizó datos de auditorías y licitaciones para detectar desvíos de recursos, alho que ha sido utilizado como insumo
                    en el proceso para sancionar a posibles involucrados.</Typography>
                </Paper>

            </div>
        );
    }
}

export default withStyles(styles)(Uso);