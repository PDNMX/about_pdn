import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {

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
      paddingBottom: theme.spacing.unit *2
    }
});

class Objetivos extends React.Component{

    render(){
        const {classes} = this.props;

        return (
            <div>
                <Typography variant="title">
                    ¿Cuáles son sus objetivos?
                </Typography>
                <br/>
                <Typography>
                    User nuevas tecnologías, metodologías de trabajo, cuencia de datos e inteligencia artificial como insumos y
                    apoyo al trabajo de las autoridades del Sistema Nacional Anticorrupción para:
                </Typography>
                <br/>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> Analizar, predecir y alertar a las autoridades sobre posibles riesgos de corrupción;</Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> Automatizar procesos, evitar discrecionalidad, colusión y conflicto de interés;</Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> Promover el uso de los datos para respaldar procesos de sanción y como evidencia combatir la impunidad;</Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> Dar seguimiento, en tiempo real, a los procesos y proyectos de contratación pública, asegurar el cumplimiento de sus objetivos
                            y garantizar una mayor eficiencia en las compra públicas;
                        </Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> Apoyar la participación ciudadana, poniendo al ciudadano al centro del combate a la corrupción.
                        </Typography>
                    </li>
                </ul>
            </div>
        );
    };
}

export default withStyles(styles)(Objetivos);