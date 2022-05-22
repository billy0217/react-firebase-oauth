import React from 'react'
import "./Profile.css"

const Profile = (props) => {
	console.log(props)
	return (
		<div className="c-profile">
			<div className="c-profile__img">
				<img src={props.user.photoURL} alt="" />
			</div>
			<div className="c-profile__info">
				<h2 className="c-profile__name">Hi {`${props.user.displayName}`}</h2>
				<p className="c-profile__email">Email: <a className="c-profile__link" href={ `mailto:${props.user.email}`} >{props.user.email}</a></p>
			</div>
		</div>
	)
}

export default Profile;