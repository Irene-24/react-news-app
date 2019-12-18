import React  from "react";
import convert from "../../assets/img/convert.svg";
import convert_hori from "../../assets/img/convert_hori.svg";
import classes from "./Currency.module.css";

const currency = (props) => 
{
    const options = [];
    // eslint-disable-next-line no-unused-vars
    for (const countryCode in props.options) 
    {
        const option = { countryCode,...props.options[countryCode] };
        options.push(option);
    }

    options.sort((a,b) => a.currencyName > b.currencyName ?1 : -1);   
    

    return (
      <div className={classes.Converter}>
        <p className={classes.Converter_Header}>Currency Converter</p>

        <div className={classes.Converter_Grid}>
          <div className={classes.Inputs}>
            <label htmlFor="source"> Select source </label>

            <select onChange={props.pickCurrency} id="source">
              <option value=""> Select source currency</option>
              {
                options.map( opt => 
                    {
                return <option key={opt.currencyName} value={opt.countryCode}> {opt.currencyName}  { `( ${opt.currencySymbol} )` }</option> 
                    } )
              }

            </select>

            <label htmlFor="target"> Select target </label>

            <select onChange={props.pickCurrency} id="target">
              <option value="">Select target currency</option>

              {
                options.map( opt => 
                    {
                return <option key={opt.currencyName} value={opt.countryCode}> {opt.currencyName}  { `( ${opt.currencySymbol} )` }</option> 
                    } )
              }
             
            </select>

            <label htmlFor="amt"> Enter amount </label>

            <input
              value={props.amount}
              onChange={props.inputHandler}
              type="number"
              id="amt"
            />

            <button onClick = {props.convertCurrency} className={classes.Convert_Btn}>Convert</button>
          </div>
          <div className={classes.Display}>

            <div className={classes.Currency}>
              <p className={classes.Value}>{props.sourceVal}</p>
              <p className={classes.Symbol}>
              {
                      props.source !== "" ? 
                      props.options[props.source].currencySymbol : '#'
                  }
              </p>
            </div>

            <div className={classes.Convert_Icon}>
              <img className={classes.Vert} src={convert} alt="two vertical arrows icon" />
              
              <img className={classes.Hori} src={convert_hori} alt="two horizontal arrows icon" />
            </div>

            <div className={classes.Currency}>
              <p className={classes.Value}>{props.targetVal}</p>
              <p className={classes.Symbol}>
                  {
                      props.target !== "" ? 
                      props.options[props.target].currencySymbol : '#'
                  }
              </p>
            </div>

          </div>
        </div>
      </div>
    );
}


export default currency;
