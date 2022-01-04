import React from 'react';

class Header extends React.Component {
   constructor(props){
       super(props);
        this.state = {
        title :"Lab 1"
       }
   }
  
    render() {
       return(
       <h1>Lab 1</h1>
      );
   };
}

    
  
  export default Header;