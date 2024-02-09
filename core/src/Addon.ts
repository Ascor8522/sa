import Settings from "../common/Settings.js";
import Auth from "./Auth.js";
import Self from "./Self.js";

/**
 * An addon.
 * @property {Self} self
 * @property {Auth} auth
 * @property {Settings} settings
 */
export default class Addon {
	constructor(info) {
		this.self = new Self(this, info);
		this.auth = new Auth(this);
		this.settings = new Settings(this);
	}

	/**
	 * @abstract
	 * @private
	 */
	get _path() {
		throw new Error("Subclasses must implement this.");
	}
}
