import React from 'react'
import classes from "./DummyCard.module.css";


const dummyCard = () => {

    return (
        <div className={classes.Card}>

            <div className={classes.CardPic}>


            </div>

            <div className={classes.Content}>
                <div className={classes.Author}>

                </div>

                <div className={classes.Date}>

                </div>

                <div className={classes.Text} >

                  <div></div>
                  <div></div>
                  <div></div>                   

                </div>

                <div className={classes.Out} >

                </div>
            </div>



        </div>

    );

}

export default dummyCard;
