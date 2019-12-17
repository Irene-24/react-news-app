import React, { Component } from 'react';
import Currency from "../components/Currency/Currency";

class ConvCurrency extends Component
{
    state = 
    {
        target: "",
        source: "",
        amount: ""
      };

    inputHandler = event => 
    {
      event.preventDefault();
      this.setState({ amount: event.target.value });
    }; 
    
    convertCurrency = () =>
    {
        console.log('converted');
    }

    pickCurrency = event =>
    {
        
        if(event.target.id === "target")
        {
            console.log('target');
        }
        else
        {
            console.log('source');
        }
    }
   
    componentDidMount()
    {
      
    }

    componentWillUnmount()
    {
       
    }

     
    
 
    render() 
    {
        return <Currency 
        amount={this.state.amount}
        pickCurrency = {this.pickCurrency}
        convertCurrency = {this.convertCurrency}
        inputHandler = {this.inputHandler} />
    }
    }


export default ConvCurrency;