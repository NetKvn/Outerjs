export default class UriBuilder {
    constructor(uri) {
        this._uri = uri;
    }

    get uri() {
        return this._uri;
    }
}