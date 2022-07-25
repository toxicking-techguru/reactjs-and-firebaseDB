import React from "react";


import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";



const Home = () => {


const handleClick = () => {
  console.log('hello welcome to our services');
}






  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  
  return (
    <>
    <body className="bing">
  
      

        <div className="vickt">
          Hello Welcome to our Homepage  <br />
          <form   className="upper">
            <label>
              enter the values and subscribe to our services
              Name:
              <input type="text" name="name" />
            </label>

            <label>
              AGE
              <input type="text" age="name" />
            </label>

            <label>
              Gender
              <input type="text" gender="name" />
            </label>

            <label>
              email
              <input type="text" email="name" />
            </label>

            <label>
              chronicledesease
              <select name="wgtmsr" id="wgtmsr">
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  
</select>
            </label>

            <input type="submit" value="Submit" className="g-btn"

            />
          </form>










          

          <form className="g-name" id="g-bmi" onsubmit="console.log('You clicked submit.'); return false">
            <label>
              BMI
              entere Height,
              <select name="wgtmsr" id="wgtmsr">
  <option value="Height">Height</option>
  <option value="Weight">Weight</option>
  
</select>
            </label>

            <input type="submit" value="Submit" className="g-btn"   />
            
          </form>

          <form className="g-name">
            <label>
              Blood pressurre;

             select ENTER BLOOD pressure
             
              <select name="wgtmsr" id="wgtmsr">
  <option value="Normal">Normal</option>
  <option value="Elevated: 120 to 129/less than 80">Elevated: 120 to 129/less than 80</option>
  <option selected value="Stage 1 high blood pressure: 130 to 139/80 to 89.">Stage 1 high blood pressure: 130 to 139/80 to 89</option>
  <option value="Stage 2 high blood pressure: 140 and above/90 and above.">Stage 2 high blood pressure: 140 and above/90 and above.</option>
  <option value="Hypertension crisis: above 180/above 120.">Hypertension crisis: above 180/above 120.</option>
  
</select>
            </label>

            <input type="submit" value="Submit" className="g-btn" />
          </form>

          <form>
            <label>
              Diabeties
              enter values

              <select name="wgtmsr" id="wgtmsr">
  <option value="grapefruit">blood sugar level of 200 milligrams per deciliter</option>
  <option value="lime"> less than 100 mg/dL (5.6 mmol/L)</option>
  <option selected value="coconut"> less than 100 mg/dL (5.6 mmol/L)</option>
  <option value="mango">between 140 and 199 mg/dL</option>
</select>
            </label>

            <input type="submit" value="Submit" className="g-btn" />
          </form>


          <form>
            <label>
              Gastric problems
              symptoms;
              <select name="wgtmsr" id="wgtmsr">
  <option value="grapefruit">bacterial</option>
  <option value="lime">viral</option>
  <option selected value="coconut">parasitic</option>
  
</select>
            </label>

            <input type="submit" value="Submit" className="g-btn" />
          </form>


          <form>
            <label>
              cOVID

              19 yes/ no (to build immunity)

              <select name="wgtmsr" id="wgtmsr">
  <option value="grapefruit">yes</option>
  <option value="lime">No</option>
 
</select>
            </label>

            <input type="submit" value="Submit" className="g-btn" />
          </form>

          <form>
            <label>
              thyroid
              enter value
              <select name="wgtmsr" id="wgtmsr">
  <option value="grapefruit">Thyrotoxic phase</option>
  <option value="lime">Hypothyroid phase</option>
  <option selected value="coconut">Euthyroid phase:</option>
 
</select>
            </label>

            <input type="submit" value="Submit" className="g-btn" />
          </form>


          <form>
            <label>
              Pregnancy
              entere Height,Weight
              <select name="wgtmsr" id="wgtmsr">
  <option value="grapefruit">month 2</option>
  <option value="lime">month 3</option>
  <option selected value="coconut">month 1</option>
  <option value="mango">month 4 and above</option>
</select>
            </label>

            <input type="submit" value="Submit" className="g-btn" />
          </form>

        </div>
        </body>
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout} className="toxic">
            Log out
          </Button>
        </div>
      

    </>
  );
};

export default Home;
