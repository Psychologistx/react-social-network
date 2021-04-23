import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';

let ProfileInfo = (props) => {
	if(!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock}>
				<img className={s.avatar} src={props.profile.photos.large} alt="" />
				{/* <img className={s.avatar} src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt="profile" /> */}
		 + description
		</div>
		</div>
	)
};

export default ProfileInfo;