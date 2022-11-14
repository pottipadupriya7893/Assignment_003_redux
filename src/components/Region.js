import React from 'react';
import data from '../mock/mockdata';
import Values from './values';

class Region extends React.Component {
  render() {
    return (
      <div>
         <h1>REDUX COUNTRIES APP</h1>
        <Values  Data = {this.props.Data}/>
      </div>
    )
  }
}
Region.defaultProps ={
  Data: data
}
export default Region;