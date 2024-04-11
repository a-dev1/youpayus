// import React from 'react';

// function App() {
//   return (
//     <div>
//       <a href="upi://pay?am=21.00&amp;cu=INR&amp;mc=6300&amp;pa=rzpwcbairtelpaymentsbankltd@yesbank&amp;pn=AirtelPaymentsBankltd&amp;tn=AirtelPaymentsBankltd&amp;tr=MCOe8VFU5hyC3a">CLICK TO PAY SUDARSHAN</a>
//       <br />
//       <br />
//       <br />
//       <a href="paytmmp://pay?am=2.00&amp;cu=INR&amp;mc=6300&amp;pa=rzpwcbairtelpaymentsbankltd@yesbank&amp;pn=AirtelPaymentsBankltd&amp;tn=AirtelPaymentsBankltd&amp;tr=MCV5SidUTB9wf3">PAYTM merchant</a>
//       <br />
//       <a href="paytmmp://upi/pay?am=2.00&amp;cu=INR&amp;mc=6300&amp;pa=rzpwcbairtelpaymentsbankltd@yesbank&amp;pn=AirtelPaymentsBankltd&amp;tn=AirtelPaymentsBankltd&amp;tr=MCV5SidUTB9wf3">PAYTM merchant ios chrom</a>
//       <br />
//       <a href="phonepe://pay?pa=9891532913@upi&amp;pn=YourName&amp;tn=Note&amp;am=1&amp;cu=INR">Phonepe</a>
//       <br />
//       <br />
//       <a href="tez://upi/pay?pa=9891532913@upi&amp;pn=YourName&amp;tn=Note&amp;am=1&amp;cu=INR">tez upi //pay?</a>
//       <br />
//       <br />
//       <br />
//       <a href="tez://upi/pay?cu=INR&amp;mc=6300&amp;pa=rzpwcbairtelpaymentsbankltd@yesbank&amp;pn=AirtelPaymentsBankltd&amp;tn=AirtelPaymentsBankltd&amp;tr=MCVUujdFCkClEj&amp;am=21.00">FROM SIT GPAY</a>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    pa: '',
    pn: '',
    mc: '',
    tid: '',
    tr: '',
    tn: '',
    am: '',
    mam: '',
    cu: '',
    url: '',
    mode: '',
    sign: '',
    orgid: '',
    mid: '',
    msid: '',
    mtid: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use formData to make the upi://pay URL
    // const upiPayUrl = `upi://pay?pa=${formData.pa}&pn=${formData.pn}&mc=${formData.mc}&tid=${formData.tid}&tr=${formData.tr}&tn=${formData.tn}&am=${formData.am}&mam=${formData.mam}&cu=${formData.cu}&url=${formData.url}&mode=${formData.mode}&sign=${formData.sign}&orgid=${formData.orgid}&mid=${formData.mid}&msid=${formData.msid}&mtid=${formData.mtid}&query=${formData.query}`;
    const upiPayUrl = `upi://pay?am=${formData.am}&amp;cu=INR&amp;mc=6300&amp;pa=${formData.pa}&amp;pn=${formData.pn}&amp;tn=AirtelPaymentsBankltd&amp;tr=MCOe8VFU5hyC3a`;
    console.log(upiPayUrl);
    // You can use the upiPayUrl to redirect the user to the UPI payment app
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Payee VPA:
          <input type="text" name="pa" value={formData.pa} onChange={handleChange} />
        </label>
        <br />
        <label>
          Payee name:
          <input type="text" name="pn" value={formData.pn} onChange={handleChange} />
        </label>
        <br />
        <label>
          Amount (INR):
          <input type="text" name="am" value={formData.am} onChange={handleChange} />
        </label>
        <br />
        {/* Add more input fields for other parameters */}
        <br />
        <button type="submit">Generate UPI Link</button>
      </form>
    </div>
  );
}

export default App;
