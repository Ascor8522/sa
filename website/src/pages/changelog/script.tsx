import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if(ExecutionEnvironment.canUseDOM) {
	(() => {
		const params = new URLSearchParams(location.search);

		if(!params.has("versionname")) return;

		let ver = params
			.get("versionname")
			.replace("-notif", "");
		if(!ver.startsWith("v")) ver = "v" + ver;

		if(document.getElementById(ver)) return; // $(() => document.getElementById(ver).scrollIntoView());
	})();
}
