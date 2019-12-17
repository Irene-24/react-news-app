import React  from "react";
import convert from "../../assets/img/convert.svg";
import convert_hori from "../../assets/img/convert_hori.svg";
import classes from "./Currency.module.css";

const currency = (props) => 
{

    return (
      <div className={classes.Converter}>
        <p className={classes.Converter_Header}>Currency Converter</p>

        <div className={classes.Converter_Grid}>
          <div className={classes.Inputs}>
            <label htmlFor="source"> Select source </label>

            <select onChange={props.pickCurrency} id="source">
              <option value="">Select source currency</option>
              <option value="">h</option>
              <option value="">a</option>
              <option value="">v</option>
              <option value="">e</option>
            </select>

            <label htmlFor="target"> Select target </label>

            <select onChange={props.pickCurrency} id="target">
              <option value="">Select target currency</option>
              <option value="">m</option>
              <option value="">e</option>
              <option value="">a</option>
              <option value="">t</option>
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
              <p className={classes.Value}>100</p>
              <p className={classes.Symbol}>#</p>
            </div>

            <div className={classes.Convert_Icon}>
              <img className={classes.Vert} src={convert} alt="two vertical arrows icon" />
              
              <img className={classes.Hori} src={convert_hori} alt="two horizontal arrows icon" />
            </div>

            <div className={classes.Currency}>
              <p className={classes.Value}>100</p>
              <p className={classes.Symbol}>#</p>
            </div>

          </div>
        </div>
      </div>
    );
}


export default currency;
