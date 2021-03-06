import React from 'react';
import './settings.css'

import { Link } from 'react-router-dom'

import {connect} from 'react-redux';

import firebase from 'firebase';

import { changecardsize, getfontcolor, setfontcolor} from '../actions/userActions';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class Settings extends React.Component {
  constructor(props) {
     super(props);
 
     this.state = {
       size: "medium",
       fontcolor: "white"
     };
   }


  handleChangesize = (event, index, value) => this.setState({size: value});

  handleColorchange = (event, index, value) => this.setState({fontcolor: value});
  

  changesize = () => {
      const size = this.state.size
      this.props.changecardsize(size)
  }

  signout = () => {
    firebase.auth().signOut();
 
  }


  setfontcolor = () => {
      const colorvalue = {
          fontcolor: this.state.fontcolor
      }
      this.props.setfontcolor(colorvalue)
      this.props.getfontcolor()
    
  }
  render() {
    return (
      <div>
        <SelectField
          fullWidth={true}
          floatingLabelText="Cardsize"
          value={this.state.size}
          onChange={this.handleChangesize}
        >
          <MenuItem value={"small"} primaryText="Small" onClick={this.changesize}/>
          <MenuItem value={"medium"} primaryText="Medium" onClick={this.changesize}/>
          <MenuItem value={"large"} primaryText="Large" onClick={this.changesize}/>
        </SelectField>
        <SelectField
          fullWidth={true}
          floatingLabelText="FontColor"
          value={this.state.fontcolor}
          onChange={this.handleColorchange}
        >
          <MenuItem value={"white"} primaryText="white" onClick={this.setfontcolor}/>
          <MenuItem value={"black"} primaryText="black" onClick={this.setfontcolor}/>
          <MenuItem value={"red"} primaryText="red" onClick={this.setfontcolor}/>
          <MenuItem value={"blue"} primaryText="blue" onClick={this.setfontcolor}/>
          <MenuItem value={"green"} primaryText="green" onClick={this.setfontcolor}/>
          <MenuItem value={"purple"} primaryText="purple" onClick={this.setfontcolor}/>
          <MenuItem value={"yellow"} primaryText="yellow" onClick={this.setfontcolor}/>
        </SelectField>
        <p className="centertext">OR</p>
        <Link to="/"><button className="buttonsignup" onClick={this.signout} >Sign Out</button></Link>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
    setfontcolor: colorvalue => dispatch(setfontcolor(colorvalue)),
    getfontcolor: () => dispatch(getfontcolor()),
    changecardsize: size => dispatch (changecardsize(size))
})


export default connect(mapStateToProps, mapDispatchToProps)(Settings);