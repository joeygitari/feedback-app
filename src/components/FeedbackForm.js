import { useState, useRef } from "react";
// import emailjs from 'emailjs-com';

export const FeedbackForm = () => {
  const formInitialDetails = {
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText] = useState('Send');
  
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  const form = useRef();

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails)
    setFormDetails(formInitialDetails);

    // emailjs.sendForm("service_uhx3rqi","template_6e2mqdf",form.current, "ApvPEcQ8qrd4VM4HZ")
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  const handleButtonClick = () => {
    if (formDetails.message === '') {
      setShowDangerAlert(true);
      setTimeout(() => {
        setShowDangerAlert(false);
      }, 3000); 
    } else {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000); 
      }
 };

  return (
    <>
    <section className="contact" id="connect">
        <div className="row d-flex justify-contents-center">
          <div className="col-md-5">
                <form ref = {form} onSubmit={handleSubmit}>
                  <div>
                    <div className="feedback">
                      <textarea rows="5" name="message" value={formDetails.message} placeholder="Feedback Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    </div>
                    <button type="submit" onClick={handleButtonClick}><span>{buttonText}</span></button>
    
                    {showSuccessAlert && (
                        <div className="mt-3 text-center" id="success">
                          <div className="alert alert-success" role="alert">
                            <strong>Success!</strong> Your feedback has been submitted.🤩
                          </div>
                        </div>
                      )}

                      {showDangerAlert && (
                        <div className="mt-3 text-center" id="error">
                          <div className="alert alert-danger" role="alert">
                            <strong>Empty fields!</strong> Please fill in the feedback.
                          </div>
                        </div>
                    )}

                  </div>
                </form>
          </div>
        </div>
    </section>
    </>
  )
}

export default FeedbackForm;