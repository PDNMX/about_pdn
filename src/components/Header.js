import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => {

};


class Header extends React.Component{

    render (){
        const {classes} = this.props;
        return <Typography>Header </Typography>
    }
}

export default withStyles(styles)(Header);