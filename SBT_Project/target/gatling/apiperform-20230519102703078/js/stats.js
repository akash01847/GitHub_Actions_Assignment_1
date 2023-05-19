var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "50",
        "ok": "47",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "4820",
        "ok": "4820",
        "ko": "10105"
    },
    "maxResponseTime": {
        "total": "13349",
        "ok": "13349",
        "ko": "10153"
    },
    "meanResponseTime": {
        "total": "8018",
        "ok": "7883",
        "ko": "10134"
    },
    "standardDeviation": {
        "total": "2156",
        "ok": "2154",
        "ko": "21"
    },
    "percentiles1": {
        "total": "7509",
        "ok": "7319",
        "ko": "10143"
    },
    "percentiles2": {
        "total": "9718",
        "ok": "9631",
        "ko": "10148"
    },
    "percentiles3": {
        "total": "11883",
        "ok": "11890",
        "ko": "10152"
    },
    "percentiles4": {
        "total": "12999",
        "ok": "13020",
        "ko": "10153"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 47,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.571",
        "ok": "3.357",
        "ko": "0.214"
    }
},
contents: {
"req_get-request-6b074": {
        type: "REQUEST",
        name: "GET Request",
path: "GET Request",
pathFormatted: "req_get-request-6b074",
stats: {
    "name": "GET Request",
    "numberOfRequests": {
        "total": "50",
        "ok": "47",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "4820",
        "ok": "4820",
        "ko": "10105"
    },
    "maxResponseTime": {
        "total": "13349",
        "ok": "13349",
        "ko": "10153"
    },
    "meanResponseTime": {
        "total": "8018",
        "ok": "7883",
        "ko": "10134"
    },
    "standardDeviation": {
        "total": "2156",
        "ok": "2154",
        "ko": "21"
    },
    "percentiles1": {
        "total": "7509",
        "ok": "7319",
        "ko": "10143"
    },
    "percentiles2": {
        "total": "9718",
        "ok": "9631",
        "ko": "10148"
    },
    "percentiles3": {
        "total": "11883",
        "ok": "11890",
        "ko": "10152"
    },
    "percentiles4": {
        "total": "12999",
        "ok": "13020",
        "ko": "10153"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 47,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.571",
        "ok": "3.357",
        "ko": "0.214"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
