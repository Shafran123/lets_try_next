import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default class Layout extends Component {
    render() {
        return (
            <div className="content">
                <Navbar />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}
