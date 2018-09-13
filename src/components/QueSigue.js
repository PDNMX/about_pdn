import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({});

class QueSigue extends React.Component{
    render (){
        return (
            <div>
                <Typography>
                ¿Qué sigue?
                </Typography>
            </div>
        )
    }
}

export default withStyles(styles)(QueSigue);