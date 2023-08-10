import React from 'react'
import { saveAs } from 'file-saver';
import { Button } from 'react-bootstrap';
import RootChakraMurladhara  from '../../song/RootChakraMurladhara.mp3'
import SacralChakraSavdhisthana from '../../song/SacralChakraSavdhisthana.mp3'
import SolarPlexusChakraManipura from '../../song/SolarPlexusChakraManipura.mp3';
import HeartChakraAnahata from '../../song/HeartChakraAnahata.mp3';
import ThroatChakraVishuddha from '../../song/ThroatChakraVishuddha.mp3';
import ThirdEyeChakraAjna from '../../song/ThirdEyeChakraAjna.mp3'
import CrownChakraSahasrara from '../../song/CrownChakraSahasrara.mp3'

const Payment = (props) => {

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
    const displayRazorPay = async(price,chakraSongName)=>{

      const musicName = chakraSongName.replaceAll(' ','')
      const songs = {
        RootChakraMurladhara,
        SacralChakraSavdhisthana,
        SolarPlexusChakraManipura,
        HeartChakraAnahata,
        ThroatChakraVishuddha,
        ThirdEyeChakraAjna,
        CrownChakraSahasrara,
      };
  
      const songUrl = songs[musicName];

        var options = {
          key:"rzp_test_Fj7bmVOyv14Z4S",
          key_secret:"",
          amount: price*100,
          currency:"INR",
          name:"Test_Project",
          description:"for testing purpose",
          handler: function(response){
            if(!response){
              alert('payment not successfull')
            }else{
              saveAs(songUrl, `${chakraSongName}.mp3`);
             // alert(response.razorpay_payment_id);             
            }
            
          },
          // prefill:{
          //   name:"mady",
          //   email:"mady@gmai.com",
          //   contact:"8828768148",
          // },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme:{
            color:'#20b2aa'
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }

  return (
    <>
        <Button style={{background:'#6D6FA7',width:'50%'}} onClick={()=>displayRazorPay(99,props.chakra)} >Buy</Button>
    </>
    
  )
}

export default Payment