const trueResponse = {
    result: true,
    results: {
        "loadBalancing": [{
                Health: "Good",
                HostName: "jhf",
                AvailablePools: "Yes",
                TTL: "nmf,mc,d",
                Proxied: "dshkmsdfn",
                Enabled: "Yes"
            },
            {
                Health: "Bad",
                HostName: "abcd",
                AvailablePools: "No",
                TTL: "nmf,bfm",
                Proxied: "dshnsdm,",
                Enabled: "Yes"
            },
            {
                Health: "Excellent",
                HostName: "abcde",
                AvailablePools: "Maybe",
                TTL: "nmf,sdm,nf",
                Proxied: "dshnmf ,.",
                Enabled: "Yes"
            }
        ]
    }
};

const falseResponse = {
    result: false,
    results: {
        "loadBalancing": [{
            Health: "No Load Balancers"
        }]
    }
};

exports.doService = async jsonReq => {
    try {
        return falseResponse;
    } catch (error) {
        LOG.error(error);
    }
}