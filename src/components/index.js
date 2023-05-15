import React, { Component } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';

const LayoutContent = (props) => {
    return (
        <React.Fragment>
            <div id="wrapper">
                <Header />
                <div className='content-page'>
                    <div className='content'>
                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

class Layout extends Component {
    constructor(props) {
        super(props);
        console.log("layout==>", this.props.children);
    }


    getRenderLayout = (value) => {
        return <LayoutContent {...this.props} />
    }
    render() {
        return (
            <React.Fragment>
                <LayoutContent  {...this.props} />
            </React.Fragment>
        )
    }
}

export default Layout;