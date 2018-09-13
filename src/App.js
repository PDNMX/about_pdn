import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Typography from "@material-ui/core/Typography";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Typography>
                    Landing body
                </Typography>

                <Footer/>
            </div>
        );
  }
}

export default App;
