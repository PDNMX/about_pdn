import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root : {

    },
    title: {
        textAlign: 'center'
    }
});

class QueEs extends React.Component{

    render (){
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.title}>
                <Typography>¿Qué es la</Typography>
                <Typography>Plataforma Digital Nacional</Typography>
                    </div>
            </div>
        )
    }
}


export default withStyles(styles)(QueEs);