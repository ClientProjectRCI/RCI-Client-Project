import React from 'react';
import '../ProviderProfile/ProviderProfile.css';
import { Link } from 'react-router-dom';

export default function ProviderProfile() {
    return (
        <div className="row">
            <div className="column">
                <img
                    style={{ borderRadius: 20 }}
                    src="https://static.wixstatic.com/media/3d076e_adb70c8b93b845f1b93d50028c5013e8~mv2.jpeg/v1/crop/x_0,y_727,w_1242,h_1173/fill/w_412,h_389,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/695BF34C-4BAC-4D41-85DD-95CE130DAA57%20-%20S.jpeg"
                />
                <button>Email</button>
                <button>Edit</button>
            </div>
            <div className="column">
                <div className="info">Name / Occupation</div>
                <div className="info">Bio</div>
                <div className="info">Insurance</div>
            </div>
            <div className="column">
                <div className="info">Phone number</div>
                <ul className="info">
                    <h4>Services:</h4>
                    <li>Phone</li>
                    <li>Online</li>
                    <li>In-Patient</li>
                    <li>Out-Patient</li>
                </ul>
                <ul className="info">
                    <h4>Specialialties:</h4>
                </ul>
            </div>
        </div>
    );
}
