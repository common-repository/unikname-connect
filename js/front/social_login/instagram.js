var heateorSsParentWindow = window.opener ? window.opener : window;
function theChampInitializeInstaLogin() {
	var a =
		"undefined" != typeof theChampLinkingRedirection &&
		"" != theChampLinkingRedirection
			? theChampLinkingRedirection
			: theChampTwitterRedirect;
	theChampLoginPopup(
		"https://instagram.com/oauth/authorize/?client_id=" +
			theChampInstaId +
			"&redirect_uri=" +
			encodeURI(theChampSiteUrl + "?ssredirect=") +
			a +
			"&response_type=token"
	);
}
function theChampGetHashValue(a) {
	a = "string" != typeof a ? "" : a.toLowerCase();
	var b = location.hash.toLowerCase().match(new RegExp(a + "=([^&]*)")),
		c = "";
	return b && (c = b[1]), c;
}
function theChampGetParameterByName(a) {
	a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
		c = b.exec(location.search);
	return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "));
}
var theChampInstagramHash = theChampGetHashValue("access_token");
if ("" != theChampInstagramHash) {
	var redirection = theChampGetParameterByName("ssredirect");
	(redirection +=
		1 == heateorSsParentWindow.heateorMSEnabled
			? (redirection.indexOf("?") >= 0 ? "&" : "?") + "heateorMSEnabled=1"
			: ""),
		(heateorSsParentWindow.location.href =
			theChampSiteUrl +
			"?SuperSocializerInstaToken=" +
			theChampInstagramHash +
			"&wp_unikname_redirect_to=" +
			(redirection || theChampTwitterRedirect)),
		window.close();
}
