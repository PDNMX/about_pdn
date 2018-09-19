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
    bullet: {
        backgroundColor: '#96cb99',
        height: '12px',
        width: '12px',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '-20px',
        //marginTop: '-10px'
    },
    ul: {
        listStyle: 'none',
        //marginLeft: 0,
        paddingLeft: '15px'
    },
    li: {
        paddingBottom: theme.spacing.unit //*2
    }
});

class Uso extends React.Component{
    render(){

        const {classes} = this.props;

        return(
            <div>
                <Typography variant="title">Conoce como se han usado los datos para combatir la corrupción en México:</Typography>

                <Paper className={classes.paper}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <Typography><span className={classes.bullet}/> Aristegui Noticias utilizó datos abiertos para investigas posibles casos de espionaje.</Typography>
                        </li>
                        <li className={classes.li}>
                            <Typography><span className={classes.bullet}/> Imco y OPI utilizaron datos de contrataciones para identificar riesgos e impulsar una cultura de prevención en contrataciones.</Typography>
                        </li>
                        <li className={classes.li}>
                            <Typography><span className={classes.bullet}/> Data Cívica utilizó datos abiertos para reconstruir las declaraciones patrimoniales de servidores públicos del gobierno.</Typography>
                        </li>
                        <li className={classes.li}>
                            <Typography><span className={classes.bullet}/> Animal Político utilizó datos de auditorías y licitaciones para detectar desvíos de recursos, alho que ha sido utilizado como insumo
                                en el proceso para sancionar a posibles involucrados.</Typography>
                        </li>
                    </ul>
                </Paper>

            </div>
        );
    }
}

export default withStyles(styles)(Uso);