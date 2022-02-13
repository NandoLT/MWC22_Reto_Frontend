import React from 'react';
import Layout from "../shared/layout/Layout";
import storage from "../../utils/storage";
import UserPersonalInfoForm from '../users/userPersonalInfoForm';
import { useNavigate } from 'react-router-dom';

export default function RegInit() {

    const navigation = useNavigate();

    const handleSubmit = async (userFields) => {
        await storage.set(process.env.REACT_APP_KEY_USERINFO, userFields);
        window.location.reload();
    }

    return(
        <Layout title="Página de Crear anuncios">
            <div className="loginPage">
                <h1 className="loginPage-title">REGISTER USER</h1>
                <UserPersonalInfoForm onSubmit={ handleSubmit } />
            </div>
        </Layout>
    )

}
