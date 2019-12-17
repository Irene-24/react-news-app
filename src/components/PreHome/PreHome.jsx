import React from "react";
import classes from "./PreHome.module.css";
import ConvCurrency from "../../containers/ConvCurrency";

const preHome = props => {
  return (
    <div className={classes.Container}>
      
      <div className={classes.Carousel}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        quod. Qui ad tempore architecto tempora ex quis quas cum itaque, culpa
        consectetur, harum ea enim repellat excepturi incidunt, voluptatibus
        mollitia laudantium. Praesentium aperiam sapiente alias recusandae,
        tempore, voluptates culpa quia amet nisi commodi obcaecati ducimus ipsa.
        Dolorem asperiores, odit eius dolor laborum dignissimos soluta provident
        nobis. Quam perferendis doloribus, libero culpa molestias nisi error
        accusantium, pariatur veniam ad provident accusamus quaerat iure
        blanditiis commodi eaque voluptas repellendus facilis totam at,
        temporibus nemo. In omnis doloremque doloribus laboriosam repellendus
        sit, atque, ut ipsam esse ipsum temporibus architecto, cumque eius.
        Voluptate, libero.
     
      </div>

      <div className={classes.Currency_Weather}>
        <ConvCurrency />
      </div>
      
    </div>
  );
};

export default preHome;
