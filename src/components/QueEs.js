import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

});

class QueEs extends React.Component{


    render (){
        return (
            <div>
                <Typography>¿Qué es la</Typography>
                <Typography>Plataforma Digital Nacional</Typography>
            </div>
        )
    }
}


export default withStyles(styles)(QueEs);