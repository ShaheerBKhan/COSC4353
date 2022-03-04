import '../index.css';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { GetUserAccountInformation } from '../Controllers/FrontendControllers';

export const UserAccountInstance = (props) => {
    return (
      <div className="useraccount-instance">
        <div className="content">
          <div>Full Name: {props.fullName}</div>
          <div>Address 1: {props.address1}</div>
          <div>Address 2: {props.address2}</div>
          <div>City: {props.city}</div>
          <div>State: {props.state}</div>
          <div>Zip Code: {props.zipCode}</div>
        </div>
      </div>
    );
};
  
export const UserAccount = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    const result = await GetUserAccountInformation(userId);
  }, []);

  const HandleClick = () => {
    navigate(`/DashboardLoggedIn/${userId}`);
  }

  const UserInstanceList = [
    <UserAccountInstance
      fullName={"John Smith"}
      address1={"12338 Main St"}
      address2={""}
      city={"Houston"}
      state={"TX"}
      zipCode={"77002"}
    ></UserAccountInstance>,
  ];
  return (
    <div className="container">
        <div style={{ marginTop: "15px", fontSize: "24px" }}>User Account</div>
        <div className="fuelQuoteHistory-container">{UserInstanceList}</div>
        <button className='return-button' onClick={() => HandleClick()}>Return to Dashboard</button>
    </div>
  );
}