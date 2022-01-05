//lets create class component this time
import React from "react";

class AddContact extends React.Component {
    // ---- make class state (it will be object ). //
    state = {
        name:'',
        email:'',
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert('All the fields are mandatory');
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""})
        
    }
    render() {
        return(
            <div className="ui main add_contact">
                <h1> Add Contact </h1>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="">Name :</label>
                        <input type="text" name='name' placeholder="Name" value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Email :</label>
                        <input type="text" name='email' placeholder="yourmail@com"
                        value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}
export default AddContact;