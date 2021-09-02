import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import Modal from 'react-modal';

const Graph = (props) => {
    const [pricesGraph, setPricesGraph] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getDataChart = async () => {
            setLoading(true)
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=7`)
            const dataGraph = await response.json()

            const l = props?.coinSymbol?.toUpperCase();
            const x = [];
            const y = [];
            dataGraph.prices?.forEach((val) => {
                x.push(val[0])
                y.push(val[1])
                setPricesGraph({
                    labels: x,
                    datasets: [{
                        label:l,
                        data: y,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ]
                    }]
                })
            })
            
            setLoading(false)
        }
        getDataChart()
    }, [props?.id,props?.coinSymbol])
    return (
        <>  
            <Modal isOpen={props.isOpen} onRequestClose={props.toClose} style={{
                overlay: {
                    background: '#1F1F1F77',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    padding: '0',
                    opacity: '1',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#FFFFFF',
                    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.09)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    width: '80%'
                },

            }} >
             {loading ? <div>Loading...</div> :
                        <Line
                            data={pricesGraph}
                        />

             }
            </Modal>

        </>
    )
}

export default Graph
