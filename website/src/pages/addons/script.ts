import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if(ExecutionEnvironment.canUseDOM) {
	const cardColumns = document.querySelector<HTMLElement>(".card-columns");

	cardColumns.dataset.listView = document.querySelector<HTMLInputElement>("#checkbox-list-view").checked + "";
	cardColumns.dataset.showEasterEgg = document.querySelector<HTMLInputElement>("#checkbox-easter-egg").checked + "";

	cardColumns.removeAttribute("hidden");

	const changeView = event => cardColumns.dataset.listView = event.target.checked;
	const changeEgg = event => cardColumns.dataset.showEasterEgg = event.target.checked;
}
