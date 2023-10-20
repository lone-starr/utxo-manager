import { Fragment, useEffect, useState } from "react";
import "dotenv/config";

const utxo_service_url = process.env.SERVER_UTXO_URI;
const [utxos, setUtxos] = useState([]);

const getUtxos = async () => {
  try {
    const response = await fetch(utxo_service_url);
    const jsonData = await response.json();
    setUtxos(jsonData);
  } catch (error) {
    console.error((error).message);
  }
};

useEffect(() => {
  getUtxos();
});

const UtxoList = () => {
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
          {utxos.map((utxo) => (
            <tr key={utxo.txid}>
              <td>
                {utxo.txid}:{utxo.outnum}
              </td>
              <td>{utxo.address}</td>
              <td>{utxo.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default UtxoList;
