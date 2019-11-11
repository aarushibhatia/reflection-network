/* 
 * (C) 2015 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
const FRONTEND = "http://localhost:3030";
const BACKEND = "http://localhost:9000";
const APP_PATH = `${FRONTEND}/apps/reflection-network`;

export const APP_CONSTANTS = {
    FRONTEND,
    BACKEND,
    APP_PATH,

    TRAFFIC_THTML: APP_PATH + "/components/traffic-component/traffic-component.html",
    MAIN_THTML: APP_PATH + "/main.html",

    API_LOADBALANCING: BACKEND + "/apps/reflection-network/load-balancing",
    API_LOADBALANCINGLOGS: BACKEND + "/apps/reflection-network/load-balancing-logs",

    SESSION_NOTE_ID: "com_monkshu_ts",

    USERID: "id",
    USER_ROLE: "user",
    PERMISSIONS_MAP: {
        user: [APP_PATH + "/main.html", APP_PATH + "/components/traffic-component/traffic-component.html", $$.MONKSHU_CONSTANTS.ERROR_THTML],
    }
}