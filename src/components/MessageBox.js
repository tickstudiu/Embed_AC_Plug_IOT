// MessageBox.js
import React, {Component} from 'react';
import trim from 'trim';
import { Button } from 'reactstrap';
class MessageBox extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange(e){
    this.setState({
      message: e.target.value
    });
    console.log(this.state.message)
  }
  onClick(e){
    if(trim(this.state.message) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(this.state.message)
      });
      this.setState({
        message: ''
      });
    }
  }
render() {
    return (
    <div>
      <form>
       <textarea 
          className="textarea"
          placeholder="Type a message"
          cols="100"
          onChange={this.onChange}
          value={this.state.message}>
       </textarea>
       <Button style={{marginTop:10}} color="primary" placeholder="New Data" onClick={this.onClick} > 
        Add
       </Button>
      </form>
      </div>
    )
  }
}
export default MessageBox