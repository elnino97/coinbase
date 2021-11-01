import { ReactComponent as EurSvg } from "../Assets/eur.svg";
import { ReactComponent as BtcSvg } from "../Assets/btc.svg";
import { ReactComponent as SepaLogo } from "../Assets/sepa.svg";
import classes from "./InputCard.module.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const InputCard = () => {
  const optionsCurrency = [
    {
      value: "eur",
      label: (
        <div className={classes["inputcard__option-currency"]}>
          <EurSvg /> EUR
        </div>
      ),
    },
    {
      value: "btc",
      label: (
        <div className={classes["inputcard__option-currency"]}>
          <BtcSvg /> BTC
        </div>
      ),
    },
  ];
  const optionsPayment = [
    {
      value: "sepa",
      label: (
        <div className={classes["inputcard__option-payment"]}>
          <SepaLogo /> Bank transfer
        </div>
      ),
    },
  ];

  return (
    <div className={classes.inputcard}>
      <div className={classes.inputcard__inputgroup}>
        <label className={classes.inputcard__label} for="pay">
          Pay
        </label>
        <input className={classes.inputcard__input} type="number" id="pay" />
        <Dropdown
          options={optionsCurrency}
          value={optionsCurrency[0]}
          className="dropdown__currency"
        />
      </div>
      <div className={classes.inputcard__inputgroup}>
        <label className={classes.inputcard__label} for="buy">
          Buy
        </label>
        <input className={classes.inputcard__input} type="number" id="buy" />
        <Dropdown
          options={optionsCurrency}
          value={optionsCurrency[1]}
          className="dropdown__currency"
        />
      </div>
      <div className={classes.inputcard__inputgroup}>
        <p>Payment method</p>
        <Dropdown
          options={optionsPayment}
          value={optionsPayment[0]}
          className="dropdown__payment"
        />
      </div>
      <div className={classes.inputcard__buttonwrapper}>
        <button>Buy BTC</button>
      </div>
    </div>
  );
};

export default InputCard;
