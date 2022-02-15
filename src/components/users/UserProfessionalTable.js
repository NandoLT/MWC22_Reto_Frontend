import React from 'react'

import '../../assets/css/dataTables.css';

export default function UserProfessionalTable({professionalData}) {
    return (
        <table className="t-personal table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th colSpan="2"> PROFESSIONAL INFORMATION </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>SECTOR: </th>
                    <th>{professionalData.sector}</th>
                </tr>
                <tr>
                    <th>EXPERIENCE: </th>
                    <th>{professionalData.yearsOfExperience} {professionalData.yearsOfExperience>1 ? 'years' : 'year'}</th>
                </tr>
                <tr>
                    <th>SKILLS:</th>
                    <th>{professionalData.skills.map(skill => {
                        return <tag>{skill}</tag>
                    })}</th>
                </tr>
            </tbody>
        </table>
    )
}
