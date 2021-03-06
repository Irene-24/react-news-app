import React, { Component } from 'react';
import Currency from "../components/Currency/Currency";




class ConvCurrency extends Component
{
    _isMounted = false;
    state = 
    {
        target: "",
        source: "",
        target_Value: "XX.XX",
        source_Value: "XX.XX",
        amount: 1.00,
        options:null,
        rates:null,
        error:false
      };

    inputHandler = event => 
    {
      event.preventDefault();
      
     
        this.setState({ amount: event.target.value });
    
    }; 

    convFromEur = (amt) =>
    {
        const sourceCurrencyInEuro = (+amt)/(+this.state.rates[this.state.source]);

        const targetValue = sourceCurrencyInEuro*(+this.state.rates[this.state.target]);

        return targetValue;
    }

    pressedEnter = event =>
    {
        event.preventDefault();

        if (event.keyCode === 13) 
        {
          this.convertCurrency();
        }
    }
    
    convertCurrency = () =>
    {
        if(this.state.source && this.state.target)
        {
            const source_Value = (+this.state.amount).toFixed(4);
        
            const target_Value = this.convFromEur(this.state.amount).toFixed(4);  
            
          this.setState({source_Value,target_Value});
         

        }
       
    }

    pickCurrency = event =>
    {
        
        if(event.target.id === "target")
        {
            this.setState({target:event.target.value});
        }
        else
        {
            this.setState({source:event.target.value});
        }
    }
   
    componentDidMount()
    {
        this._isMounted = true;
        fetch('./currency-country.json')
        .then(res => res.json())
        .then(res => 
            {
                if(this._isMounted)
                {
                    this.setState( {options:res} )
                }
              
            })
        .catch(err => console.log(err));

       const url = `http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_CURRENCY_KEY}&format=1`;

       fetch(url)
       .then(res => res.json())
       .then( res =>
        {
            if(this._isMounted)
            {
                this.setState({ rates:res.rates,error:false });
            }
           
           
        } )
        .catch( () =>
        {
            this.setState({error:true})
        });

    }

    componentWillUnmount() {
        this._isMounted = false;
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
        pressedEnter = {this.pressedEnter}
        error={this.state.error}
        pickCurrency = {this.pickCurrency}
        convertCurrency = {this.convertCurrency}
        inputHandler = {this.inputHandler} />
    }
    }


export default ConvCurrency;