import React, { Component } from 'react';
import Currency from "../components/Currency/Currency";

class ConvCurrency extends Component
{
    state = 
    {
        target: "",
        source: "",
        target_Value: "XX.XX",
        source_Value: "XX.XX",
        amount: "",
        options:null,
        rates:null
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

        fetch('./currency-country.json')
        .then(res => res.json())
        .then(res => 
            {
                this.setState( {options:res} )
            })
        .catch(err => console.log(err));

    }

    componentWillUnmount()
    {
       
    }

     
    
 
    render() 
    {
        return <Currency 
        amount={this.state.amount}
        targetVal = {this.state.target_Value}
        sourceVal={this.state.source_Value}
        target={this.state.target}
        source={this.state.source}
        options={this.state.options}
        pickCurrency = {this.pickCurrency}
        convertCurrency = {this.convertCurrency}
        inputHandler = {this.inputHandler} />
    }
    }


export default ConvCurrency;