import React from 'react'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../common/Preloader';
import { UsersAPI } from '../../api/api';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.setIsFetching(true);
		UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.setIsFetching(true);
		UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.setIsFetching(false);
			this.props.setUsers(data.items)
		});
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching })(UsersContainer);