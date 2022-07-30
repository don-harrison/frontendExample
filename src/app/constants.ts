export class Constants {
    static serviceBase = "localhost:8080"

    static get serviceUrl() {
        return this.serviceBase + ""
    }

    static get productsUrl() {
        return this.serviceUrl + "/products"
    }

    static get customersUrl() {
        return this.serviceUrl + "/customers"
    }

    static get inventoryUrl() {
        return this.serviceUrl + "/inventory"
    }

    static get saveUrl() {
        return this.serviceUrl + "/save";
    }

    static get saveCustomersUrl() {
        return this.serviceUrl + "/customers";
    }
}