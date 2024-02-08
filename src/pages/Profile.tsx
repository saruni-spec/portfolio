import Nav from "../componets/Nav";
import Input from "../componets/Input";
import { useState } from "react";
import "../styles/forms.css";
import "../styles/button.css";

function Profile() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      ></link>
      <Nav className="mb-r" />
      {step === 1 && <CreateProfile nextStep={nextStep} />}
      {step === 2 && <ProfileBio nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <SocialMedia prevStep={prevStep} />}
    </>
  );
}

type ProfileProps = {
  nextStep?: () => void;
  prevStep?: () => void;
};

const CreateProfile: React.FC<ProfileProps> = ({ nextStep }) => {
  return (
    <>
      <div className="row">
        <form className="formC">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Phone" />
          <Input type="text" placeholder="City" />
        </form>

        <form className="formC">
          <Input type="text" placeholder="Title" />
          <Input type="text" placeholder="Job Title" />
          <Input type="text" placeholder="Specialty" />
          <Input type="text" placeholder="Industry" />
          <Input type="text" placeholder="Current WorkPlace" />
        </form>

        <button
          type="button"
          className="pageButton iconButton"
          onClick={nextStep}
        >
          <i className="fas fa-angle-right"></i>
          <span className="buttonText">Next</span>
        </button>
      </div>
    </>
  );
};

const ProfileBio: React.FC<ProfileProps> = ({ nextStep, prevStep }) => {
  return (
    <>
      <div className="row">
        <button
          type="button"
          className="pageButton iconButton"
          onClick={prevStep}
        >
          <i className="fas fa-angle-left"></i>
          <span className="buttonText">Previous</span>
        </button>
        <div className="formC">
          <ul>
            <li></li>
          </ul>
        </div>

        <form className="formC">
          <Input type="text" placeholder="Domain Search" />
          <div>
            <Input type="text" placeholder="Add skill directly" />
            <button type="button" className="pageButton iconButton">
              <i className="fas fa-plus"></i> Add
            </button>
          </div>
          <div>
            <ul>
              <li>Skills</li>
            </ul>
          </div>
        </form>
        <button
          type="button"
          className="pageButton iconButton"
          onClick={nextStep}
        >
          <i className="fas fa-angle-right"></i>
          <span className="buttonText">Next</span>
        </button>
      </div>
    </>
  );
};

const SocialMedia: React.FC<ProfileProps> = ({ prevStep }) => {
  return (
    <>
      <div className="row">
        <button
          type="button"
          className="pageButton iconButton"
          onClick={prevStep}
        >
          <i className="fas fa-angle-left"></i>
          <span className="buttonText">Previous</span>
        </button>
        <div className="formC">
          <ul>
            <li></li>
          </ul>
        </div>

        <div className="formC">
          <Input type="text" placeholder="Your Website" />
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Beehance</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Profile;
