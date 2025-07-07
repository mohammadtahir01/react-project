import img1 from "../image/payment.jpg";
import img2 from "../image/Loder.gif";
import { useState } from "react";
const PaymentMethod = () => {
  const [load, setLoad] = useState(true);

  setInterval(() => {
    setLoad(false);
  }, 2000);

  return (
    <>
      {load ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={img2} />
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={img1} alt="Payment" />
          </div>
        </>
      )}
    </>
  );
};
export default PaymentMethod;
