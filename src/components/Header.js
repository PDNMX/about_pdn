import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({

});


class Header extends React.Component{

    render (){
        const {classes} = this.props;
        return (
            <div>

                <Typography>Plataforma Digital Nacional</Typography>
                <Typography>Inteligencia de Datos Anticorrupcion</Typography>

                <div>Beta</div>

            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);