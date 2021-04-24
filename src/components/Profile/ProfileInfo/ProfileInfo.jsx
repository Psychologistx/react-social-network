import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';

let ProfileInfo = (props) => {

	const jobStatus = props.profile?.lookingForAJob ? "Ищу работу" : "Работу не ищу";

	if (!props.profile) {
		return <Preloader />
	}
	console.log(props.profile)
	return (
		<div>
			<div>
				<img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock}>
				<img className={s.avatar} src={props.profile.photos.large} alt="" />
				{/* <img className={s.avatar} src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt="profile" /> */}
				<section className={s.profileInformation}>
					<div><b>Name:</b> {props.profile.fullName || "Неизвестно"}</div>
					<div><b>About me:</b> {props.profile.aboutMe || "Неизвестно"}</div>
					<div><b>Job status:</b> {jobStatus}</div>
					<div><b>Contacts:</b> {Object.entries(props.profile.contacts).map(([key, value]) => {
						return value && <div key={value}>{key} : {value}</div>
					})}</div>
				</section>

			</div>
		</div>
	)
};

export default ProfileInfo;