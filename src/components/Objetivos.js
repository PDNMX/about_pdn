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
    },
    greenText: {
        color: '#96cb99'
    }
});

class Objetivos extends React.Component{

    render(){
        const {classes} = this.props;

        return (
            <div>
                <Typography variant="title" className={classes.greenText}>
                    ¿Cuáles son sus objetivos?
                </Typography>
                <br/>
                <Typography>
                    Usar <b className={classes.greenText}>nuevas tecnologías</b>, <b className={classes.greenText}>metodologías de trabajo</b>, <b className={classes.greenText}>ciencia de datos</b> e <b className={classes.greenText}>inteligencia artificial</b> como insumos y
                    apoyo al trabajo de las autoridades del <b>Sistema Nacional Anticorrupción</b> para:
                </Typography>
                <br/>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> <b>Analizar, predecir y alertar</b> a las autoridades sobre posibles riesgos de corrupción</Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> <b>Automatizar procesos, evitar discrecionalidad, colusión y conflicto de interés</b></Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> <b>Promover el uso de los datos</b> para respaldar procesos de sanción y como evidencia combatir la impunidad</Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> <b>Dar seguimiento, en tiempo real</b>, a los procesos y proyectos de contratación pública, asegurar el cumplimiento de sus objetivos
                            y garantizar una mayor eficiencia en las compras públicas
                        </Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography><span className={classes.bullet}/> <b>Apoyar la participación ciudadana</b>, poniendo al ciudadano al centro del combate a la corrupción
                        </Typography>
                    </li>
                </ul>
            </div>
        );
    };
}

export default withStyles(styles)(Objetivos);