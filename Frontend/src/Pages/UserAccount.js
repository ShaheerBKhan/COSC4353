import '../index.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { GetUserAccountInformation } from '../Controllers/FrontendControllers';

const UserAccountInstance = (props) => {
  let isSecondAddress = true;
  if(props.addresstwo == "undefined") {
    isSecondAddress = false;
  }

  return(
    <div className="useraccount-instance">
        <div className="content">
            <div>Fullname: {props.fullname}</div>
            <div>City: {props.city}</div>
            <div>State: {props.state}</div>
            <div>Zipcode: {props.zipcode}</div>
            <div>Address (Primary): {props.addressone}</div>
            <div style={{display: (isSecondAddress ? 'block' : 'none')}}>Address (Secondary): {props.addresstwo}</div>
        </div>
    </div>
  );
}

export const UserAccount = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [userInformation, setUserInformation] = useState([]);

  useEffect(async () => {
    const result = await GetUserAccountInformation(userId);
    setUserInformation(result);
  }, []);

  const HandleClick = () => {
    navigate(`/DashboardLoggedIn/${userId}`);
  }

  const UserAccountList = userInformation.map((userInfo, index) => {
    return(
      <UserAccountInstance key={index}
      fullname={userInfo.fullname} city={userInfo.city} state={userInfo.state}
      zipcode={userInfo.zipcode} addressone={userInfo.addressone} addresstwo={userInfo.addresstwo}></UserAccountInstance>
    );
  })
  
  return (
    <div className="container">
      <div className='navbar'><Link to={`/`}>Log Out.</Link></div>
      <div style={{ marginTop: "15px", fontSize: "24px" }}>User Account</div>
      <div className="fuelQuoteHistory-container">
        {UserAccountList}
      </div>
      <button className='return-button' onClick={() => HandleClick()}>Return to Dashboard</button>
    </div>
  );
}