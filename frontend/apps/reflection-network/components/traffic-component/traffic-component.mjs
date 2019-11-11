import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { router } from "/framework/js/router.mjs";

const populateTable = async(tableData) => {
    try {
        router.loadPage(APP_CONSTANTS.TRAFFIC_THTML, tableData);
        // let rowData = [];
        // // responseObject.results.users.forEach(user => rowData.push({
        // //     "column": [user.username, user.fullName]
        // // }));

        // let data = {
        //     "headers": ["Health", "Hostname", "Available Pools", "TTL", "Proxied", "Enabled"],
        //     "rows": rowData
        // }

        // monkshu_env.components["data-table"].displayResults(data, 5);
    } catch (error) {
        console.error(error);
    }
};

// const populateLoadBalancingLogsTable = async(tableData) => {
//     try {
//         router.loadPage(APP_CONSTANTS.TRAFFIC_THTML, tableData);
//     } catch (error) {
//         console.error(error);
//     }
// };

function register() {
    monkshu_component.register("traffic-component", `${APP_CONSTANTS.APP_PATH}/components/traffic-component/traffic-component.html`, traffic_component);
}

const trueWebComponentMode = true;

export const traffic_component = { trueWebComponentMode, register, populateTable }