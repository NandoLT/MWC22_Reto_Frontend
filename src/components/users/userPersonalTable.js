import React from 'react';

export default function UserPersonalTable({personalData}) {
    return (
        <table className="t-personal table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th colSpan="2"> PERSONAL INFORMATON </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>NAME: </th>
                    <th>{personalData.nameSurname}</th>
                </tr>
                <tr>
                    <th>EMAIL: </th>
                    <th>{personalData.email}</th>
                </tr>
                <tr>
                    <th>DESCRIPTION:</th>
                    <th>{personalData.description}</th>
                </tr>
                <tr>
                    <th>COUNTRY</th>
                    <th>{personalData.country}</th>
                </tr>
                <tr>
                    <th>STATE:</th>
                    <th>{personalData.state}</th>
                </tr>
                <tr>
                    <th>CITY:</th>
                    <th>{personalData.city}</th>
                </tr>
            </tbody>
        </table>
    )
}
