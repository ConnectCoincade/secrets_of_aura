import React from 'react'

const Payment = () => {

    // const loadScript =  (src) =>{
    //       return new Promise((resolve)=>{
    //         const script = document.createElement('script');
    //         script.src = src;
            
    //         script.onload=()=>{
    //             resolve(true);
    //         }
    //         script.onerror = () =>{
    //             resolve(false);
    //         }
    //         document.body.appendChild(script);
    //       })
    // }
    const displayRazorPay = async(price)=>{

        // const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    
        // if(!res){
        //     alert('you are offline failed to load sdk')
        //     return;
        // }
        var options = {
          key:"rzp_test_Fj7bmVOyv14Z4S",
          key_secret:"",
          amount: price*100,
          currency:"INR",
          name:"Test_Project",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill:{
            name:"mady",
            email:"mady@gmai.com",
            contact:"8828768148",
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme:{
            color:'#3399cc'
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }

  return (
    <div>payment
        <button onClick={()=>displayRazorPay(100)}>buyNow</button>
    </div>
    
  )
}

export default Payment