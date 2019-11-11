const init = async() => {
    try {
        const responseObject = await (await fetch(APP_CONSTANTS.API_LOADBALANCING, { method: "POST", body: JSON.stringify({}) })).json();
        if (!responseObject.result) {
            console.log("No load balancers.");
            monkshu_env.components["traffic-component"].populateTable(responseObject.results);
        } else {
            console.log("Data found..");
            monkshu_env.components["traffic-component"].populateTable(responseObject.results);
        }

        const tableData = await (await fetch(APP_CONSTANTS.API_LOADBALANCINGLOGS, { method: "POST", body: JSON.stringify({}) })).json();
        if (!tableData.result) {
            console.log("We couldn't find any events matching the selected filters");
        } else {
            responseObject.results.loadBalancingLogs = tableData.results.loadBalancingLogs;
            console.log("Data found..");
            console.log(responseObject.results);
            monkshu_env.components["traffic-component"].populateTable(responseObject.results);
        }
    } catch (error) {
        console.error(error);
    }
};

export const main = { init };