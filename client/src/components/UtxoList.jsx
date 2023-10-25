import { Fragment, useEffect, useState } from "react";
//import "dotenv/config";


const UtxoList = () => {

  const [utxos, setUtxos] = useState([]);
  const [loaded, setLoaded] = useState([]);

  const getUtxos = async () => {
    try {
      if (!loaded){
        setLoaded(True);
      }
      const response = await fetch('http://127.0.0.1:7000/utxos');
      const jsonData = await response.json();
      setUtxos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUtxos();
  }, [loaded]);


  return (
    <Fragment>
       <h1>Below is a list of your UTXOs</h1>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>TXID:Output Number</th>
            <th>Address</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {utxos.map((o) => (
            <tr key={o.txid}>
              <td>
                <a href={"https://blockstream.info/testnet/tx/" + o.txid} target="_blank">{o.txid}:{o.outnum}</a>
              </td>
              <td>
                <a href={"https://blockstream.info/testnet/address/" + o.address} target="_blank">{o.address}</a>
              </td>
              <td>{o.amount}</td>
            </tr>
          ))}
        </tbody>
      </table> 

    </Fragment>
  );
};

export default UtxoList;
