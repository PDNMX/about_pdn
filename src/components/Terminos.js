import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PDNAppBar from './PDNAppBar';
import by from '../assets/by.svg';

const styles = theme => ({
    root: {
        flexGrow:1
    },
    section: {
        maxWidth: '1024px',
        paddingRight: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 4
    }
});

class Terminos extends React.Component{
    render (){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <PDNAppBar/>
                <Grid container spacing={0} justify='center'>
                    <Grid item xs={12} className={classes.section}>
                        <Typography variant='title'>
                            Aceptación de términos de uso de plataformadigitalnacional.org
                        </Typography>
                        <Typography>
                            El uso del plataformadigitalnacional.org o de cualquiera de sus componentes, implica la aceptación expresa de los presentes “Términos y Condiciones”.
                        </Typography>
                        <br/>

                        <Typography variant='title'>
                            Sobre el uso de plataformadigitalnacional.org
                        </Typography>

                        <Typography>
                            Son obligaciones del usuario:
                        </Typography>

                        <ul>
                            <li><Typography>
                                No dañar, inutilizar o deteriorar los sistemas informáticos que puedan ser incorporados en este sitio, incluido el portal plataformadigitalnacional.org.
                            </Typography></li>
                            <li><Typography>
                                No modificar de ninguna manera los sistemas informáticos que puedan ser incorporados.
                            </Typography></li>
                            <li><Typography>
                                No utilizar versiones de sistemas modificados con el fin de obtener acceso no autorizado a cualquier sistema de información, contenido y/o servicios del portal.
                            </Typography></li>
                            <li><Typography>
                                No interferir ni interrumpir el acceso, funcionalidad y utilización del portal, servidores o redes conectados al mismo.
                            </Typography></li>
                            <li><Typography>
                                Los enlaces que son proporcionados en el sitio son sólo con fines informativos, por lo que los contenidos o recursos de esos sitios de internet o páginas gubernamentales, será responsabilidad exclusiva de los entes públicos , por lo que la autoría y reconocimiento de la misma, es responsabilidad del propio ente público. Lo anterior sin perjuicio de lo que establece la Ley Federal del Derecho de Autor y demás normatividad aplicable.
                            </Typography></li>
                            <li><Typography>
                                Este sitio contiene medidas de seguridad para proteger la información de cualquier alteración realizada por terceros.
                            </Typography></li>
                            <li><Typography>
                                La Secretaría Ejecutiva del Sistema Nacional Anticorrupción se deslinda de cualquier responsabilidad, perjuicio o daño que pueda generar el usuario por cualquier uso inadecuado del portal o la información contenida en plataformadigitalnacional.org.
                            </Typography></li>
                            <li><Typography>
                                El usuario se obliga a hacer buen uso del sitio, respetando la Ley General del Sistema Nacional Anticorrupción, la Ley Federal de Derechos de Autor y demás  normatividad aplicable.
                            </Typography></li>
                            <li><Typography>
                                Debe contar con un equipo que cumpla con las características mínimas necesarias para navegar en el sitio, recomendando su navegación en las últimas versiones de los navegadores Google Chrome, Mozilla Firefox y Safari para obtener la mejor experiencia.
                            </Typography></li>
                            <li><Typography>
                                Exime a la Secretaría Ejecutiva del Sistema Nacional Anticorrupción de toda responsabilidad por los daños que el uso del sitio le pudieran ocasionar en forma incidental o consecuente con su equipo, información, patrimonio o persona, así como ninguna responsabilidad por la la alteración o manipulación de los datos una vez publicados en él.
                            </Typography></li>
                            <li><Typography>
                                Acepta y se obliga a utilizar el sitio para fines lícitos y con apego a las disposiciones legales aplicables.
                            </Typography></li>
                            <li><Typography>
                                El destino y tratamiento de los datos que se obtengan de la plataforma, son responsabilidad exclusivamente del usuario, y de manera alguna señalarán el posicionamiento de ningún ente público, salvo que expresamente se refiera.
                            </Typography></li>
                        </ul>


                        <Typography variant='title'>
                            Del libre uso de los datos
                        </Typography>

                        <Typography>
                            Los presentes “Términos de libre uso” promueven el uso, reúso y redistribución de los conjuntos de datos abiertos, de conformidad con lo siguiente:
                            <br/>
                            <br/>
                            Usted puede:
                        </Typography>

                        <ul>
                            <li><Typography>Hacer y distribuir copias del conjunto de datos y su contenido;</Typography></li>
                            <li><Typography>Difundir y publicar el conjunto de datos y su contenido;</Typography></li>
                            <li><Typography>Adaptar o reordenar el conjunto de datos y su contenido;</Typography></li>
                            <li><Typography>Extraer total o parcialmente el contenido del conjunto de datos;</Typography></li>
                            <li><Typography>Explotar comercialmente el conjunto de datos y su contenido, y;</Typography></li>
                            <li><Typography>Crear conjuntos de datos derivados del conjunto de datos o su contenido.</Typography></li>
                        </ul>

                        <br/>
                        <br/>
                        <Typography>Condiciones:</Typography>
                        <ul>
                            <li><Typography>
                                Citar la fuente de origen de donde obtuvo el conjunto de datos:
                            </Typography>
                                <br/>
                                <ul>
                                    <li>
                                        <Typography>
                                            Nombre del conjunto de datos”, [Siglas de la institución publicante]; Liga de internet de los datos descargados, y la fecha de la de consulta en formato numérico [AAAA-MM-DD], puestos a disposición de tal manera que sean fácilmente accesibles para los usuarios, y en la forma que mejor se adecue al funcionamiento del bien o servicio;
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                            <li><Typography>
                                No utilizar la información con objeto de engañar o confundir a la población variando el sentido original de la información y su veracidad.
                            </Typography></li>
                            <li><Typography>
                                No aparentar que el uso que usted haga de los datos representa una postura.
                            </Typography></li>
                            <li><Typography>
                                Estos términos de libre uso de datos no lo autorizan para utilizar el contenido de terceros como pueden ser obras en cualquier formato que se encuentren dentro de los conjuntos de datos. En caso de que requiera utilizar dicho contenido, deberá buscar la autorización directamente del titular de los derechos correspondientes de conformidad con la Ley Federal de Derechos de Autor.
                            </Typography></li>
                            <li><Typography>Términos compatibles con <img src={by}/></Typography> </li>
                        </ul>

                        <br/>

                        <Typography variant='title'>
                            Actualización de los términos y condiciones
                        </Typography>

                        <Typography>
                            En cualquier momento estos términos y condiciones pueden cambiar, por lo que te pedimos revises constantemente nuestro portal.
                        </Typography>
                        <br/>
                        <Typography variant='title'>
                            Glosario
                        </Typography>
                        <Typography>

                            <b>plataformadigitalnacional.org:</b> El sitio de internet que habilita la operación de la Plataforma Digital Nacional establecida en el Artículo 9 de la Ley General del Sistema Nacional Anticorrupción.
                            <br/>
                            <br/>
                            <b>Sistemas informáticos:</b> componentes tecnológicos de infraestructura y software utilizados para la operación de la Plataforma Digital Nacional y los establecidos en el artículo 49 de la Ley del Sistemas que alimentan la información de los subsistemas, conjuntos de datos o
                            proveedores, y que en su conjunto conforman la Plataforma Digital Nacional.
                            <br/>
                            <br/>
                            <b>Subsistemas:</b> Conjuntos de datos e información concentrados, resguardados,
                            administrados y actualizados por los encargados que alimentan a los sistemas, y que
                            contendrán la información que establezca la Secretaría Ejecutiva para ser
                            interconectada e integrada en los sistemas,
                            <br/>
                            <br/>
                            <b>Usuario:</b> Las personas y entes con atribuciones y facultades para hacer uso
                            de los sistemas de la Plataforma, y/o para ejercer derechos o acceder a la
                            información, conforme a la normativa aplicable.

                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Terminos.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Terminos);