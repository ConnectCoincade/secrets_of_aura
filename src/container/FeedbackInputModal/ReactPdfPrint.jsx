import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print';
import { Button, Table } from 'react-bootstrap';
import { useGlobalContext } from '../../context/QuestionContext';

const ReactPdfPrint = () => {

    const { answersList, userData } = useGlobalContext();
    console.log(answersList,userData);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:'report',
        onafterprint: ()=>alert('print success')
    });
    
  return (
    <>
    <div ref={componentRef} style={{padding:60}} >
    <div className="receipt-organization-logo" >
            <img alt="secretoflogo" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/logo.png" />
            </div>

            {/* organization name */}
            <h5>Secret Of Aura</h5>

            {/* street address and unit number */}
            <h7>
            603, 6TH FLR, LAXMI PLAZA, LAXMI IND ESTATE, NEW LINK ROAD, ANDHERI WEST, Mumbai City, MH, 400053, INDIA
            </h7>

            {/* email-phone-and-website */}
            <div className="phone-and-website">
            <p style={{margin:0}}>Contact No - 8591965698</p> 
              <p>
                <a href={`mailto:connect@secretsodaura.com`}>
                connect@secretsodaura.com
                </a>
              </p>                 
            </div>

            <h4 style={{textAlign:'center'}}>Chakra Report</h4>
            <p>Name: {userData? userData.firstName+" "+userData.lastName : " "}</p>
            <p>Email: {userData? userData.email : " "}</p>
         <Table>
            <thead>
                <th>Sr.No</th>
                <th>Chakra</th>
                <th>Chakra Name</th>
                <th>Status</th>
            </thead>
            <tbody>

                {
                    answersList.map((data)=>{
                     return(
                        <tr>
                        <td>{data.number}</td>
                        <td><img style={{width:'12%'}} className="chakra-img" src={data?.image}/></td>
                        <td>{data.chakraName}</td>
                        <td>{data.ans > 5 ? "Opened": "Closed"}</td>
                        </tr>
                     )   
                    })
                }
            
            </tbody>
        </Table>
    </div>
    <button onClick={handlePrint}>print</button>
    </>
    
  )
}

export default ReactPdfPrint