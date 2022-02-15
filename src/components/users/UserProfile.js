import React, {useEffect, useState} from 'react';
import Layout from '../shared/layout/Layout';
import { getAvatar } from '../../dataServices/avatar';
import parse from 'html-react-parser';
import { Button } from '../shared/Button';
import storage from '../../utils/storage';
import UserPersonalTable from './userPersonalTable';
import UserProfessionalTable from './UserProfessionalTable';
import UserProfessionalForm from './UserProfesionalInfoForm';

import '../../assets/css/userProfile.css';

export default function UserProfile({accesGranted}) {

  const [personalData, setPersonalData] = useState('');
  const [profesionalData, setProfesionalData] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [seeProfessional, setSeeProfessional] = useState(false);

  useEffect(() => {
    getAvatar()
      .then(response => setUserAvatar(parse(response.data)));

    setPersonalData(storage.get(process.env.REACT_APP_KEY_USERINFO));
    storage.get(process.env.REACT_APP_KEY_PROFESSIONALINFO) ? 
      setProfesionalData(storage.get(process.env.REACT_APP_KEY_PROFESSIONALINFO)) 
      : 
      console.log('professional info empty');

  }, []);

  const changeVisibility = () => {
    setSeeProfessional(!seeProfessional);
  }

  const takeProfessionalDetails = (professionalData) => {
    setProfesionalData(professionalData);
    storage.set('professionalInfo', professionalData);
  }

  return (
    <Layout title={'USER INFORMATION'} accesGranted={ accesGranted }>
      <div className="container-grid">
        <div className="user-avatar">{userAvatar}</div>
        <div className="peronal-information">
          <UserPersonalTable personalData={personalData} />
        </div>
        <div className="professional-information">
          {profesionalData ? 
            <UserProfessionalTable professionalData={profesionalData} />
          :
          <>
            <Button 
                type="submit"
                className="loginForm-submit"
                variant="primary"
                onClick={changeVisibility}
            >
            ADD PROFESSIONAL INFO
            </Button> 
            <UserProfessionalForm seeProfessional={seeProfessional} takeProfessionalDetails={takeProfessionalDetails} changeVisibility={changeVisibility}/>
          </>
          }
        </div>
      </div>
    </Layout>
  )
}
