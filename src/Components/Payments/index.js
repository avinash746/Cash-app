import React from "react";
import PaymentColumn from "../../assets/payments/payments-column.png";
import PaymentPhone from "../../assets/payments/payments-phone 1.png";
import PaymentPillerLarge from "../../assets/payments/payments-pillar-large.png";
import PaymentPillerMedium from "../../assets/payments/payments-pillar-medium.png";
import PaymentPillerSmall from "../../assets/payments/payments-pillar-small.png";

import "./style.css";

const Payments = () => {
  return (
    <section className="payments">
      <div className="payment_upper">
        <div className="text">
          <h1 className="font-agrandir">Payments</h1>
          <p className="font-mulish">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
      </div>
      <div className="payments_below">
        <div className="payments_bg"></div>
        <div className="payments_imgs">
          <img
            className="paymentColumn1"
            src={PaymentColumn}
            alt="paymentColumn"
          />
          <img className="paymentPhone" src={PaymentPhone} alt="paymentPhone" />
          <img
            className="paymentPillerMedium1"
            src={PaymentPillerMedium}
            alt="paymentPillerMedium"
          />
          <img
            className="paymentPillersmall"
            src={PaymentPillerSmall}
            alt="paymentPillersmall"
          />
          <img
            className="paymentPillerMedium2"
            src={PaymentPillerMedium}
            alt="paymentPillerMedium"
          />
          <img
            className="paymentPillerLarge"
            src={PaymentPillerLarge}
            alt="paymentPillerLarge"
          />
          <img
            className="paymentPillerMedium3"
            src={PaymentPillerMedium}
            alt="paymentPillerMedium"
          />
          <img
            className="paymentPillerMedium"
            src={PaymentPillerMedium}
            alt="paymentPillerMedium"
          />

          <img
            className="paymentColumn2"
            src={PaymentColumn}
            alt="paymentColumn1"
          />
          <img
            className="paymentColumn3"
            src={PaymentColumn}
            alt="paymentColumn"
          />
        </div>
      </div>
    </section>
  );
};

export default Payments;
