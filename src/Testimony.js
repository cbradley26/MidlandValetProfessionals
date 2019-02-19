import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Jumbotron } from 'react-bootstrap';

class Testimony extends Component {

    render() {
        const starStyle = {
            color: "gold"
        }

        return (
            <section>
                <Jumbotron className="m-3">
                    <div className="row">
                        <h1 className="col-md-large"> Reece Parry</h1>
                  
                    <div className="col text-right ">
                        <FontAwesome
                            name='star'
                            style={starStyle}>
                        </FontAwesome>
                        <FontAwesome
                            name='star'
                            style={starStyle}>
                        </FontAwesome>
                        <FontAwesome
                            name='star'
                            style={starStyle}>
                        </FontAwesome>
                        <FontAwesome
                            name='star'
                            style={starStyle}>
                        </FontAwesome>
                        <FontAwesome
                            name='star'
                            style={starStyle}>
                        </FontAwesome>
                    </div>
                    </div>

                    <p>Brought the shine back to my car, excellent service.</p>
                </Jumbotron>
            </section>
        );
    }
}

export default Testimony;