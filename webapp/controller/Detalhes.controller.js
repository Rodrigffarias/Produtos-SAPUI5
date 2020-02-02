sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("br.com.infoprodutos.Produtos.controller.Detalhes", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.getRoute("Detalhes").attachMatched(this._onRoute, this);
		},

		_onRoute: function (evt) {
			var oModel = this.getView().getModel(); // ODataModel
			var sIdProd = evt.getParameters().arguments.idProd; //retorna o Id do Produto
			// var that = this;
			oModel.metadataLoaded().then(function () {
				var sPath = oModel.createKey("/Products", {
					ProductID: sIdProd
				});
				this.getView().bindElement(sPath);
			}.bind(this));

			//var oArgs = evt.getParameter("arguments");
			//var oView = this.getView();
			//var sURL = "Products(" + oArgs.idProd + ")";

/*			oView.bindElement({
				path: sURL,
				parameters: {
					expand: "/Category"
				},
				events: {
					dataRequested: function () {
						oView.setBusy(true);
					},
					dataReceiver: function () {
						oView.setBusy(false);
					}
				}
			});*/
		},
		
		onBeforeRendering: function(){
			this.getView().byId("form0").bindElement("Supplier");
		},
		
		onNavBack: function(evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.navTo("Produtos", {}, false);
		}

	});

});