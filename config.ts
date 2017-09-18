
export class AppConfig {
    public config = {
        "DEV": {
            "baseURL": "npt-develop.paas-dev-njrar-01.ams1907.com"
        },
        "QA": {
            "baseURL": "npt-qa1.paas-dev-njrar-01.ams1907.com"
        }

    }
    public getEnv() {        
        var url = window.location.href;
        if (url.indexOf('-develop') > -1) {
            return this.config.DEV;
        }
        else if (url.indexOf('-qa1') > -1) {
            return this.config.QA;
        }
        else {
            return this.config.DEV;
        }
    }
    baseURL = this.getEnv().baseURL;
    public URLS = {
        'COUNTRY_CODE': "https:../../src/app/data//tsnm-flow-services-" + this.baseURL + "/rest/tsnm/historicalSearchCriteria/countryCode",
        'ORIGIN_SORT': "https://tsnm-flow-services-" + this.baseURL + "/rest/tsnm/historicalSearchCriteria/originSort",
        'LANDING_PAGE': "../../src/app/data/landingPage.json",
        'MOCK_SLIC': "../../src/app/data/slicData.json",
        'MOCK_COUNTRY': "../../src/app/data/countryCode.json",
        'MOCK_SORT': "../../src/app/data/originSort.json",
        // VIEW HISTORICAL VISIBILITY FLOW PLAN DATA
        'LOAD_HISTORICAL_GRID': "https://tsnm-flow-services-" + this.baseURL + "/rest/tsnm/historicalData/filter",

        /* UPS LOCATION ICONS */
        'UPS_HUB': "../../../assets/images/ups_hub.png",
        'UPS_GATEWAY': "../../../assets/images/ups_gateway.png",
        'UPS_PACK': "../../../assets/images/ups_pack.png",
        'UPS_LOCATION': "../../../assets/images/ups_location.png",
        'UPS_SHIPPING': "../../../assets/images/ups_shipping.png",
        'UPS_CHAIN': "../../../assets/images/ups_chain.png",
        'UPS_PARKING': "../../../assets/images/ups_parking.png",
        'ORIGIN_SLIC':"https://tsnm-flow-services-" + this.baseURL +"/rest/tsnm/historicalSearchCriteria/originSLIC",
        'MAP_SERVICE':"https://tsnm-flow-services-npt-develop.paas-dev-njrar-01.ams1907.com/rest/tsnm/mapSupport",
        'credentials': "AheQ3ci5x8cT_eVaC6e7veZFwngv5t_Ai3HfvMOIKS1urD8CBSVIPu1AlHiyNxBp"

    }

}