import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Bd from '../assets/grafico-BD.svg';
import Ejes from '../assets/grafico-ejes.svg';

const styles = theme => ({
    bd: {
        width: "200px"
    },
    ejes: {
        width: "400px"
    }
});

class QueHacemos extends React.Component{
    render (){
        const { classes } = this.props;
        return (
            <div>
                <img src={Bd} alt="PDN" className={classes.bd}/>
                <Typography>
                ¿Qué estamos haciendo?
                </Typography>

                <Typography>
                    Trabajamos en cinco ejes clave para desarrollar y fomentar el uso de la Plataforma

                    <ul>
                        <li>Diseño centrado en las usuarias-os y sus necesidades</li>
                        <li>Construcción gradual, modular, escalable, ágil y flexible</li>
                        <li>Datos interoperables y abiertos</li>
                        <li>Seguridad de la información y protección de datos personales</li>
                        <li>Creación de impacto y entrega de valor público en el centro</li>
                    </ul>
                </Typography>

                <Typography>
                    La PDN permitirá que las base de datos de los sistemas estén estandarizadas y sean interoperables.
                    <br/>
                    El objetivo es contar con datos de calidad, para apoyar esfuerzos ecistentes y detonar nuevos mecanismos
                    inteligentes, eficientes y eficaces para combatir la corrupción, de manera multidisciplinaria, colaborativa y multisectorial.
                </Typography>
                <img src = {Ejes} alt="Ejes" className={classes.ejes}/>
            </div>
        )
    }
}

QueHacemos.propTypes = {
    classes : PropTypes.object.isRequired
};

export default withStyles(styles) (QueHacemos);
