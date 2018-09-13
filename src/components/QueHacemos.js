import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({});

class QueHacemos extends React.Component{
    render (){
        return (
            <div>
                <Typography>
                ¿Qué estamos haciendo?
                </Typography>
            </div>
        )
    }
}


export default withStyles(styles) (QueHacemos);
