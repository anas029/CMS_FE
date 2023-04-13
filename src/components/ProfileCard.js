import { Button, Spinner } from 'react-bootstrap';
import { auth } from '../firebase';

export default function ProfileCard(props) {
    return (
        <div className="card shadow-sm w-100">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-auto">

                        <div className="position-relative d-inline-block">
                            <img referrerPolicy='no-referrer' src={props.currentUser.avatarURL || "/guest.jpeg"} alt="Profile" className="rounded-circle" style={{ width: 100, height: 100, objectFit: 'cover' }} />
                            {props.isLoading && (
                                <div className="position-absolute top-50 start-50 translate-middle bg-white p-2 rounded-circle">
                                    <Spinner animation="border" size="lg" />
                                </div>
                            )}
                            <div className="position-absolute bottom-0 end-0 mb-1">
                                <label htmlFor="profileImageInput" className="btn btn-primary rounded-circle position-relative" style={{ width: "2rem", height: "2rem" }}>
                                    <i className="fas fa-arrow-up-from-bracket position-absolute top-50 start-50 translate-middle" style={{ fontSize: "1rem" }}></i>
                                </label>
                                <input type="file" id="profileImageInput" accept="image/*" onChange={props.handleImageChange} className="visually-hidden" hidden />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2 className="mb-0">{props.currentUser.firstName} {props.currentUser.lastName}</h2>
                        <p className="text-muted mb-0">{props.currentUser.type}</p>
                    </div>
                    <div className="col-auto mt-2">
                        {auth.currentUser.providerData[0].providerId === 'password' ? (
                            <>
                                <Button variant="primary" onClick={props.handleOpenModal}>Change Password</Button>
                                {' '}
                            </>


                        ) : null}
                        <Button variant="primary" onClick={props.handleOpenNameModal}>Change Name</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
