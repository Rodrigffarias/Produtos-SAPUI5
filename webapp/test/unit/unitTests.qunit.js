/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"br/com/infoprodutos/Produtos/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});