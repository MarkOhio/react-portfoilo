
import React, { useState } from "react";
import "../styles/payment-buttons.css";

const localBanks = [
  {
    id: "bank1",
    label: "GTBank",
    image: "flat.jpg",
    accountName: "Mark Obosojie Ohio",
    accountNumber: "0123456789"
  },
  {
    id: "bank2",
    label: "Access Bank",
    image: "tall.jpg",
    accountName: "Mark Obosojie Ohio",
    accountNumber: "0123456789"
  }
];

const onlineBanks = [
  {
    id: "paystack",
    label: "Paystack",
    image: "/icons/paystack.png",
    link: "https://google.com"
  },
  {
    id: "flutterwave",
    label: "Flutterwave",
    image: "/icons/flutterwave.png",
    link: "https//balls"
  },
  {
    id: "monnify",
    label: "Monnify",
    image: "/icons/monnify.png",
    link: "https//balls"
  }
];

export default function PaymentButtons() {
  const [expandedLeft, setExpandedLeft] = useState(false);
  const [expandedRight, setExpandedRight] = useState(false);

  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const toggleLeft = () => {
    setExpandedLeft(!expandedLeft);
    setExpandedRight(false);
    setActiveTooltip(null);
  };

  const toggleRight = () => {
    setExpandedRight(!expandedRight);
    setExpandedLeft(false);
    setActiveTooltip(null);
  };

  const openTooltip = (id: string) => {
    setActiveTooltip(activeTooltip === id ? null : id);
  };

  return (
    <div className="payments-wrapper">

      {/* LEFT — LOCAL BANKS */}
      <div className={`pay-control left ${expandedLeft ? "expanded" : ""}`}>
        <button className="pay-pill" onClick={toggleLeft}>
          Local Banks
        </button>

        <div className="pay-bar left-bar">
          <div className="icons-group">
            {localBanks.map((bank) => (
              <div className="icon-wrapper" key={bank.id}>
                <button
                  className={`pay-icon ${activeTooltip === bank.id ? "active" : ""}`}
                  onClick={() => openTooltip(bank.id)}
                >
                  <img src={bank.image} className="icon-img" />
                </button>

                {activeTooltip === bank.id && (
                  <div className="icon-tooltip">
                    <img src={bank.image} className="tooltip-image" />
                    <div className="tooltip-text">
                      {bank.label}<br />
                      {bank.accountName}<br />
                      {bank.accountNumber}
                    </div>
                    <div className="tooltip-arrow" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — ONLINE PAYMENTS */}
      <div className={`pay-control right ${expandedRight ? "expanded" : ""}`}>
        <button className="pay-pill" onClick={toggleRight}>
          Online Payments
        </button>

        <div className="pay-bar right-bar">
          <div className="icons-group">
            {onlineBanks.map((bank) => (
              <div className="icon-wrapper" key={bank.id}>
                <button
                  className={`pay-icon ${activeTooltip === bank.id ? "active" : ""}`}
                  onClick={() => openTooltip(bank.id)}
                >
                  <img src={bank.image} className="icon-img" />
                </button>

                {activeTooltip === bank.id && (
                  <div className="icon-tooltip">
                    <img src={bank.image} className="tooltip-image" />
                    <div className="tooltip-text">
                      Pay using {bank.label}.<br />
                      This will redirect you to the {bank.label} payment page.
                    </div>
                    <button onClick={() => window.open(bank.link, '_blank')}>Pay</button>
                    <div className="tooltip-arrow" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
