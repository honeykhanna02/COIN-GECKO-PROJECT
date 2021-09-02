import React from "react";
import "font-awesome/css/font-awesome.css";
import "../App";

const Content = (props) => {
  return (
    <>
      <tbody>
        <tr className="align-middle">
          <td className="rank">
            <div className="heading">
              <i className="fa fa-star star-icon"></i>
              <span>{props.rank}</span>
            </div>
          </td>
          <td className="coin-main">
            <div className="coin-data">
              <img src={props.coinImg} alt="crypto" />
              <p>{props.coinName}</p>
            </div>
          </td>
          <td className="symbol-data">
            <div className="coin-symbol">
              <span className="coin-cat">{props.coinSymbol.toUpperCase()}</span>
              <span className="coin-buy">Buy</span>
            </div>
          </td>
          <td className="coin-price">${props.currentPrice.toFixed(2)}</td>
          {props.perChange1h < 0 ? (
            <td className="hour-percent">
              <p className="red">{props.perChange1h.toFixed(2)}</p>
            </td>
          ) : (
            <td className="hour-percent">
              <p className="green">{props.perChange1h.toFixed(2)}</p>
            </td>
          )}
          {props.perChange24h < 0 ? (
            <td className="day-percent">
              <p className="red">{props.perChange24h.toFixed(2)}</p>
            </td>
          ) : (
            <td className="day-percent">
              <p className="green">{props.perChange24h.toFixed(2)}</p>
            </td>
          )}
          {props.perChange7d < 0 ? (
            <td className="week-percent">
              <p className="red">{props.perChange7d.toFixed(2)}</p>
            </td>
          ) : (
            <td className="week-percent">
              <p className="green">{props.perChange7d.toFixed(2)}</p>
            </td>
          )}
          <td className="volume">${props.volume.toLocaleString()}</td>
          <td className="mkt-cap">${props.marketCap.toLocaleString()}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Content;
