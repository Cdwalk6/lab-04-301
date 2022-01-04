
import React from 'react';
// import dataJson from './data.json';
import Form from 'react-bootstrap/Form';



class Myform extends React.Component {
  render() {
    return (
      <>
        <h2 className='select'>select number of Horns you want to preview</h2>
        <Form.Control  className='select' onChange={this.props.hornsFunc} as="select" size="lg">
          <option value=''>all</option>
          <option value='1'>1</option>
          <option value='2'> 2</option>
          <option value='3'>3</option>
        </Form.Control>
        <br />
        <hr />

      </>
    );
  }
}
export default Myform;