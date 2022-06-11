import { GoogleLoginResponse } from "react-google-login";

export const refreshTokenSetup = (res: GoogleLoginResponse) => {
	if (res.tokenObj) {
		let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000; 

		const refreshToken = async () => {
			const newAuthRes = await res.reloadAuthResponse();
			refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
			console.log("novo token:", newAuthRes);
			// saveUserToken(newAuthRes.access_token);  <-- save new token
			localStorage.setItem("token", newAuthRes.id_token);

			// Setup the other timer after the first one
			setTimeout(refreshToken, refreshTiming);
		};

		// Setup first refresh timer
		setTimeout(refreshToken, refreshTiming);
	}
};
