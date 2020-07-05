import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactlist: [],
    };
  }

  componentDidMount() {
    fetch(" http://localhost:4040/contacts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contactlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        
          {this.state.contactlist.map((contact, index) => (
            <p style={{border:"1px solid black",padding:"10px",width:"680px"}} key={index}> 
              
              <table>
                <tr>
                  <th>Name</th>
                  <th>Mobile number</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>{contact.name.first} {contact.name.last}</td>
                  <td>{contact.mobile}</td>
                  <td>  {contact.email}</td>
                </tr>
              </table>
            </p>
          ))}
        
      </div>
    );
  }
}

export default Contact;
