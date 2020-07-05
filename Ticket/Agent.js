import React from "react";

class Agent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agentlist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/agents")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ agentlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        
          {this.state.agentlist.map((agent, index) => (
            <p style={{border:"1px solid black",padding:"10px",width:"680px"}} key={index}> 
              <table>
                <tr>
                  <th>Name</th>
                  <th>Mobile number</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>{agent.name.first} {agent.name.last}</td>
                  <td>{agent.mobile}</td>
                  <td>{agent.email}</td>
                </tr>
              </table>
            </p>
          ))}
        
      </div>
    );
  }
}

export default Agent;
