import React, {useEffect, useRef} from 'react'
import { useReactToPrint } from 'react-to-print';
import { Button, Modal, Table } from 'react-bootstrap';
import { useGlobalContext } from '../../context/QuestionContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ReactPdfPrint = () => {

    const { answersList, userData,
        setUserData,pdfPopup, setPdfPopup
        } = useGlobalContext();
    //console.log(answersList,userData);

    const pdfRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>pdfRef.current,
        copyStyles: true,
        documentTitle:'report',
        // onBeforePrint: ()=>alert('print success'),
        // removeAfterPrint:()=>true
    });
    // const handlePrint = () =>{
    //     const input = pdfRef.current;
    //     // html2canvas(input).then((canvas)=>{
    //     //     const imgData = canvas.toDataURL('image/png');
    //     //     const pdf = new jsPDF('p','mm','a4',true);
    //     //     const pdfWidth = pdf.internal.pageSize.getWidth;
    //     //     const pdfHeight = pdf.internal.pageSize.getHeight;
    //     //     const imgWidth = canvas.width;
    //     //     const imgHeight = canvas.height;
    //     //     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight/imgHeight);
    //     //     const imgX = (pdfWidth - imgWidth * ratio)/2;
    //     //     const imgY = 30;
    //     //     pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
    //     //     pdf.save('report.pdf');
    //     // })


    //     html2canvas(input).then((canvas)=>{
    //         console.log(input, canvas);
    //         const imgData = canvas.toDataURL('img/png');
    //         const doc = new jsPDF('p', 'mm', 'a4');
    //         const componentWidth = doc.internal.pageSize.getWidth();
    //         const componentHeight = doc.internal.pageSize.getHeight();
    //         doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
    //         doc.save('receipt.pdf');
    //       })

    //     // useReactToPrint({
    //     //         content:()=>componentRef.current,
    //     //         documentTitle:'report',
    //     //         onafterprint: ()=>alert('print success')
    //     //     })
    // }
   
    
  return (
    <>
    <Modal
    show={pdfPopup}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="SOA-modal "
    dialogClassName="modal-90w"
    onHide={() => setPdfPopup(false)}
  >
    <div ref={pdfRef} style={{padding:60}} >
    <div className="receipt-organization-logo" >
            <img alt="secretoflogo" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/logo.png" />
            </div>

            {/* organization name */}
            <h4 style={{fontWeight:'bold'}}>Secret Of Aura</h4>

            {/* street address and unit number */}
            <h7>
            603, 6TH FLR, LAXMI PLAZA, LAXMI IND ESTATE,{''}
            </h7>
            <h7 style={{display:'block'}} >
             NEW LINK ROAD,
             ANDHERI WEST, Mumbai City, MH, 400053, INDIA
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

            <h5 style={{textAlign:'center',fontWeight:'bold'}}>Chakra Report</h5>
            <p style={{margin:'0px 0px'}} >Name: {userData? userData.firstName+" "+userData.lastName : " "}</p>
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
    <button onClick={handlePrint()}>print</button>
    </Modal>
    </>
    
  )
}

export default ReactPdfPrint