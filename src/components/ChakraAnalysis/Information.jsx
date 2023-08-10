import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TriggerExample() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      To avail this service, we require a full-length photograph of yours. Upon receipt of the image, a comprehensive report will be compiled manually and delivered to you within a span of 24 hours. Directly have a word with us on WhatsApp.
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      
      <Button className='info' variant="flat">ⓘ</Button>
      
     
    
    </OverlayTrigger>
  );
}

export default TriggerExample;
