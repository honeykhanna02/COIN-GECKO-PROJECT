import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { propTypes } from "react-bootstrap/esm/Image";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <a className="navbar-brand" href="#"><img src="coingeckoLogo.png" style={{width: "35px"}} alt=""/></a>
        <a className="navbar-brand" href="#">
          CoinGecko
        </a>
        <button
          className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <a className="nav-link" href="#">Coins</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Exchanges</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">DeFi</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">NFT</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Publications</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Resources</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Community</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-mg-2 search-bar" type="search" placeholder="Search" 
            aria-label="Search" onChange={props.onChange}/>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
