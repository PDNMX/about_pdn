import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

});

class Sistemas extends React.Component {

    render () {
        return (
            <div>
                <Typography>
                    Sistemas prioritarios
                </Typography>
            </div>
        )
    }
}

export default withStyles(styles)(Sistemas);