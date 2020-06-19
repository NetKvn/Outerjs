const UriFormat = {
    GET: "Get",
    JSON: "Json",
    getValues() {
        return [this.GET, this.JSON];
    },
    isDefined(uriFormat) {
        switch(uriFormat) {
            case UriFormat.GET:
            case UriFormat.JSON:
                return true;
            default:
                return false;
        }
    }
};

export default UriFormat;