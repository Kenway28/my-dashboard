var options = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 170, 200, 190],
    },
  ],
  chart: {
    height: 300,
    type: "area",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    // text: "Product Trends by Month",
    align: "center",
    color: 100,
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.25,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
};

var chart = new ApexCharts(document.querySelector(".chart-1"), options);
chart.render();

/************** */

var options2 = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 400,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    title: {
      //   text: '$ (thousands)'
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart2 = new ApexCharts(document.querySelector(".chart-2"), options2);
chart2.render();


/************************** */

var options3 = {
    series: [200, 110, 50],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Basic', 'Pro', 'Ultimate'],
  responsive: [{
    breakpoint: 1000,
    options: {
      chart: {
        width: 500
      },
      legend: {
        position: 'left'
      }
    }
  }]
  };

  var chart3 = new ApexCharts(document.querySelector(".chart-3"), options3);
  chart3.render();


  // dycalendar.draw({
  //   target: "#dycalendar",
  //   type: "month",
  //   dayformat: "full",
  //   monthformat: "full",
  //   highlighttargetdate: true,
  //   prevnextbutton:"show"
  // });