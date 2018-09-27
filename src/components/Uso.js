import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {},
    box : {
        padding: theme.spacing.unit * 2,
        marginTop: '20px',
        borderRadius: 0,
        borderColor: '#96cb99',
        borderStyle: 'solid',
        background: '#ffffff'
    },
    bullet: {
        backgroundColor: '#96cb99',
        height: '15px',
        width: '15px',
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
    },
    greenText: {
        color: '#96cb99'
    }
});

class Uso extends React.Component{
    render(){

        const {classes} = this.props;

        return(
            <div>
                <Typography variant="display2" className={classes.greenText}>Conoce cómo se usan los datos para combatir la corrupción</Typography>
                <br/>
                <br/>

                <div className={classes.box}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <Typography variant="subheading"><span className={classes.bullet}/> <b className={classes.greenText}>Aristegui Noticias</b> utilizó datos abiertos para investigas posibles casos de espionaje.</Typography>
                        </li>
                        <li className={classes.li}>
                            <Typography variant="subheading"><span className={classes.bullet}/> <b className={classes.greenText}>Imco y OPI</b> utilizaron datos de contrataciones para identificar riesgos e impulsar una cultura de prevención en contrataciones.</Typography>
                        </li>
                        <li className={classes.li}>
                            <Typography variant="subheading"><span className={classes.bullet}/> <b className={classes.greenText}>Data Cívica</b> utilizó datos abiertos para reconstruir las declaraciones patrimoniales de servidores públicos del gobierno.</Typography>
                        </li>
                        <li className={classes.li}>
                            <Typography variant="subheading"><span className={classes.bullet}/> <b className={classes.greenText}>Animal Político</b> utilizó datos de auditorías y licitaciones para detectar desvíos de recursos, algo que ha sido utilizado como insumo
                                en el proceso para sancionar a posibles involucrados.</Typography>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(Uso);