import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if(ExecutionEnvironment.canUseDOM) {
	fetch("chrome-extension://fbeffbjdlemaoicjdapfpikkikjoneco/images/cs/icon.svg")
		.then(res => res.text())
		.then(text => {
			// Redirect to settings if extension is installed (Chromium only)
			if(typeof text !== "string" || !text.startsWith("<svg")) return;
			location.href = "https://scratch.mit.edu/scratch-addons-extension/settings";
		})
		.catch(err => { });
}
