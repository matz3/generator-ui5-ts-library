/*!
 * ${copyright}
 */

import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Core from "sap/ui/core/Core";
import RenderManager from "sap/ui/core/RenderManager";
import Example from "./Example";
import { ExampleColor } from "./library";

/**
 * Example renderer.
 * @namespace
 */
export default {
	apiVersion: 2, // usage of DOM Patcher

	/**
	 * Renders the HTML for the given control, using the provided {@link RenderManager}.
	 *
	 * @param rm The reference to the <code>sap.ui.core.RenderManager</code>
	 * @param control The control instance to be rendered
	 */
	render: function (rm: RenderManager, control: Example) {
		const i18n = Core.getLibraryResourceBundle("<%= libId %>") as ResourceBundle;

		rm.openStart("div", control);
		if (control.getColor() === ExampleColor.Highlight) {
			rm.class("myLibPrefixExampleHighlight");
		} else {
			rm.class("myLibPrefixExample");
		}
		rm.openEnd();
		rm.text(`${i18n.getText("ANY_TEXT")}: ${control.getText()}`);
		rm.close("div");
	}
};
