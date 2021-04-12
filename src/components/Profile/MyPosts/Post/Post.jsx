import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://img1.freepng.ru/20180319/phq/kisspng-computer-icons-avatar-business-agent-icon-5ab04fe9a0d1f4.5568988615215042336587.jpg" alt="user" />
			{ props.message}
			<div>
				<span>Like {props.likes} </span>
			</div>
		</div>
	)
};

export default Post;