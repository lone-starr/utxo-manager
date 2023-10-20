import { Fragment, useEffect, useState } from "react";
//import "dotenv/config";


const UtxoList = () => {

  const [utxos, setUtxos] = useState([]);

  const getUtxos = async () => {
    try {
      const response = await fetch('http://127.0.0.1:7000/utxos');
      const jsonData = await response.json();
      setUtxos(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUtxos();
  });


  return (
    <Fragment>
       <h1>Below is a list of your UTXOs</h1>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>TXID</th>
            <th>Address</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {utxos.map((o) => (
            <tr key={o.txid}>
              <td>
                {o.txid}
              </td>
              <td>{o.address}</td>
              <td>{o.amount}</td>
            </tr>
          ))}
        </tbody>
      </table> 

    </Fragment>
  );
};

export default UtxoList;
