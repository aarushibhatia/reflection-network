const trueResponse = {
    result: true,
    results: {
        "loadBalancingLogs": [{
                Date: "25/12/1997",
                TriggeringOriginEvent: "jhf",
                PoolStatus: "Yes"
            },
            {
                Date: "27/12/1997",
                TriggeringOriginEvent: "jhfd",
                PoolStatus: "No"
            },
            {
                Date: "20/12/1997",
                TriggeringOriginEvent: "jhfdgh",
                PoolStatus: "Yes"
            }
        ]
    }
};

const falseResponse = {
    result: false,
    results: {
        "loadBalancingLogs": [{
            Date: "We couldn't find any events matching the selected filters"
        }]
    }
};

exports.doService = async jsonReq => {
    try {
        return trueResponse;
    } catch (error) {
        LOG.error(error);
    }
}