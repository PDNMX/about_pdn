import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({root: {}});

class Uso extends React.Component{
    render(){

        return(
            <div>
                <Typography variant="title">Conoce como se han usado los datos para combatir la corrupción en México:</Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Uso);