import React, { useState } from 'react';
import {Button} from '../shared/Button';

import '../../assets/css/formFields.css';

export default function UserProfesionalInfoForm({seeProfessional, takeProfessionalDetails, changeVisibility}) {

    const initState = {
        yearsOfExperience: 0,
        sector:'',
        skills:''
    }

    const [professionalInfo, setProfesionalInfo] = useState(initState);
    const {yearsOfExperience, sector, skills} = professionalInfo;


    const handleChange = e => {
        let {name, value} = e.target;
        value = name==='skills' ? value.split(',') : value;
        setProfesionalInfo(oldInfo => ({
            ...oldInfo,
            [name]: value,
        }));
        console.log(professionalInfo);
    };

    const handleSubmit = e => {
        e.preventDefault();
        takeProfessionalDetails(professionalInfo);
    }

    return (
        <div className={`modal ${seeProfessional ? "is-active" : "" }`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <h3 className="modal-card-title">Professional information</h3>
                </header>
                <section className="modal-card-body">
                <form onSubmit={handleSubmit}>
                    <label className="formField-label"> Years of experience
                        <input className="formField-input" type="number" name="yearsOfExperience" value={yearsOfExperience} onChange={handleChange} required/>
                    </label> 
                    <select required name='sector' value={sector} onChange={handleChange}>
                        <option key='sector-default' value='default'>Select sector</option>
                        <option key='sector-front' value='Frontend'>Front</option>
                        <option key='sector-back' value='Backend'>Back</option>
                        <option key='sector-data' value='Data'>Data</option>
                        <option key='sector-mobile' value='Mobile'>Mobile</option>
                    </select>
                    <label className="formField-label"> skills(separated by commas)
                        <input className="formField-input" type="text" name="skills" value={skills} onChange={handleChange} required/>
                    </label>
                    <br></br>
                    <hr/>
                    <Button 
                        type="submit"
                        className="loginForm-submit"
                        variant="primary"
                        disabled={!yearsOfExperience || !sector || !skills}
                    >
                    SAVE CHANGES
                    </Button>
                </form>
                </section>
                <footer className="modal-card-foot">
                
                    <button className="button" onClick={() => changeVisibility()}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}
