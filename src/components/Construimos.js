import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Ejes from '../assets/grafico-ejes.svg';


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    greenText: {
        color: '#96cb99'
    },
    whiteText: {
        color: '#e6e6e6'
    },
    titles: {
        background: '#96cb99',
        color: '#ffffff',
        textAlign: 'center',
        padding: theme.spacing.unit* .5
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
        paddingBottom: theme.spacing.unit *2
    },
    ejes: {
        padding: theme.spacing.unit,
        maxWidth: '350px'
    }
});


class Construimos extends React.Component{
    render (){
        const {classes} = this.props;

        return (
            <div className={classes.root}>

                <Typography variant="display2" className={classes.greenText}>
                    Conoce cómo construimos la PDN
                </Typography>

                <br/>
                <br/>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Typography variant="title" className={classes.titles }>Principios</Typography>
                        <ul className={classes.ul}>
                            <li className={classes.li}><Typography variant="subheading"> <span className={classes.bullet}/> Diseño centrado en las usuarias-os y sus necesidades</Typography></li>
                            <li className={classes.li}><Typography variant="subheading"> <span className={classes.bullet}/> Construcción gradual, modular, escalable, ágil y flexible</Typography></li>
                            <li className={classes.li}><Typography variant="subheading"> <span className={classes.bullet}/> Datos interoperables y abiertos</Typography></li>
                            <li className={classes.li}><Typography variant="subheading"> <span className={classes.bullet}/> Seguridad de la información y protección de datos personales</Typography></li>
                            <li className={classes.li}><Typography variant="subheading"> <span className={classes.bullet}/> Creación de impacto y entrega de valor público en el centro</Typography></li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} style={{textAlign: 'center'}} >
                        <Typography variant="title" className={classes.titles}>Ejes de trabajo</Typography>

                        <img className={classes.ejes} src={Ejes} alt="Ejes"/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Construimos.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Construimos);