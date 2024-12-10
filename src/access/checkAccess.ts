import ACCESS_ENUM from "./accessEnum";

const checkAccess = (
	loginUser: API.LoginUserVO,
	needAccess = ACCESS_ENUM.NOT_LOGIN
) => {
	const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
	if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
		return true;
	}
	if (needAccess === ACCESS_ENUM.USER) {
		return loginUserAccess !== ACCESS_ENUM.NOT_LOGIN;
	}
	if (needAccess === ACCESS_ENUM.ADMIN) {
		return loginUserAccess === ACCESS_ENUM.ADMIN;
	}
	return false;
};

export default checkAccess;
