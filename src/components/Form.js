import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form className="row contact_form" action="contact_process.php" method="post" noValidate="novalidate">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Your Full name" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" className="form-control" name="number" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows="1" placeholder="Review" />
                        </div>
                    </div>
                    <div className="col-md-12 text-right">
                        <button type="submit" value="submit" className="btn_3">
                            Submit Now
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;