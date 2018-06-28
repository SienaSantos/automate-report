module.exports = {
    dccr : {
      title: "Daily Cash Collection Report",
      url: "http://pyreport.mybluemix.net/dccr",
      dateRange : true,
    },
    booking : {
      title: "Booking Report",
      url: "http://pyreport.mybluemix.net/booking",
      dateRange : true,
    },

    aging : {
      title: "Aging Report",
      url: "https://3l8yr5jb35.execute-api.us-east-1.amazonaws.com/latest/reports/aging",
      dateRange : false,
    },

    monthlyIncome : {
      title: "Monthly Income Report",
      url: "http://pyreport.mybluemix.net/monthlyincome",
      dateRange : false,
    },

    turnAroundTime : {
      title: "Turn Around Time Report",
      url: "https://3l8yr5jb35.execute-api.us-east-1.amazonaws.com/latest/reports/turnaround",
      dateRange : true,
    },

    merchandizer : {
      title: "Incentive Report",
      url: "http://pyreport.mybluemix.net/incentive",
      dateRange : true,
    },

    sales : {
      title: "Sales Report",
      url: "generateSalesReportJSON",
      dateRange : true,
    },



}
