import Input from "../componets/Input";
import "../styles/forms.css";
import "../styles/button.css";
import Nav from "../componets/Nav";
import Button from "../componets/Button";

const Register = () => {
  return (
    <>
      <Nav className="mb-r" />
      <div className="row">
        <form className="formC">
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm Password" />

          <Button type="submit" className="formbutton" text="Sign Up" />
        </form>
        <div className="background"></div>
      </div>
    </>
  );
};

export default Register;
