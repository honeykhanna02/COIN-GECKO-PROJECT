import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Graph from "./components/Graph";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoingeckoData } from "./store/actions/coingeckoAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const coinData = useSelector((state) => state?.reducerCoinGecko?.data?.data);
  const [graphModal, setGraphModal] = useState(false);
  const [idForGraph, setIdForGraph] = useState();
  const [nameChart, setNameChart] = useState();
  const [symbol, setSymbol] = useState();
  const loading = useSelector((state) => state.reducerCoinGecko.loading);
  const error = useSelector((state) => state.reducerCoinGecko.error);
  const [selectedSearch, setSelectedSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoingeckoData());
  }, [dispatch]);

  const filterData = () => {
    if (selectedSearch === "") {
      return coinData;
    }
    return coinData.filter((coin) =>
      coin.name.toLowerCase().includes(selectedSearch.toLowerCase())
    );
  };
  return (
    <>
      <Navbar
        onChange={(event) => {
          setSelectedSearch(event?.target?.value);
        }}
      />
      {loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      <div className="container">
      <table className="table border mb-0 mt-4 top_table">
              <p>#</p>
              <p className="coin_detail">Coin</p>
              <p className="coin_name">Coin Name</p>
              <p className="coin_price">Price</p>
              <p className="price_percent">Price%</p>
              <p className="mkt_percent">Mkt%</p>
              <p className="ath_percent">Ath%</p>
              <p className="hour_vol">24h Volume</p>
              <p className="mkt_cap">Mkt Cap</p>
          </table>
          {filterData()?.map((coin) => {
            return (
              <div onClick={() => {
                  setGraphModal(true);
                  setIdForGraph(coin?.id);
                  setNameChart(coin?.name);
                  setSymbol(coin?.symbol);
                }}
              >
        <table className="table border m-0">
                <Content
                  rank={coin?.market_cap_rank}
                  coinImg={coin?.image}
                  coinSymbol={coin?.symbol}
                  coinName={coin?.name}
                  currentPrice={coin?.current_price}
                  perChange1h={coin?.price_change_percentage_24h}
                  perChange24h={coin?.market_cap_change_percentage_24h}
                  perChange7d={coin?.ath_change_percentage}
                  volume={coin?.total_volume}
                  marketCap={coin?.market_cap}
                />
        </table>
              </div>
            );
          })}
          <Graph
            id={idForGraph}
            coinSymbol={symbol}
            name={nameChart}
            isOpen={graphModal}
            toClose={() => {
              setGraphModal(false);
            }}
          />
          
      </div>
    </>
  );
}

export default App;
