import React, {useEffect, useState} from 'react';
import Layout from '../shared/layout/Layout';
import { getAvatar } from '../../dataServices/avatar';
import parse from 'html-react-parser';
import { Button } from '../shared/Button';

import '../../assets/css/userProfile.css';

export default function UserProfile({accesGranted}) {

  const [personalData, setPersonalData] = useState([]);
  const [profesionalData, setProfesionalData] = useState([]);
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    getAvatar()
      .then(response => setUserAvatar(parse(response.data)));
  }, [])

  return (
    <Layout title={'USER INFORMATION'} accesGranted={ accesGranted }>
      <div className="container-grid">
        <div className="user-avatar">{userAvatar}</div>
        <div className="peronal-information">
          <table>
            <thead>
              <tr>
                <th> PERSONAL INFORMATON </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>NOMBRE:</th>
              </tr>
              <tr>
                <th>NOMBRE:</th>
              </tr>
              <tr>
                <th>NOMBRE:</th>
              </tr>
              <tr>
                <th>NOMBRE:</th>
              </tr>
              <tr>
                <th>NOMBRE:</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="professional-information">
          {profesionalData.length > 0 ? 
            <table>
              <thead>
                <tr>
                  <th>PROFEESIONAL INFORMATION</th>
                </tr>
              </thead>
            </table>
          :
            <Button 
                type="submit"
                className="loginForm-submit"
                variant="primary"
            >
            ADD PROFESSIONAL INFO
            </Button> 
          }
        </div>
      </div>
    </Layout>
  )
}
