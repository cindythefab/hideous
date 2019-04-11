dataSetVersion = "2019-04-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "IDOLS", tooltip: "01 - KPOP", key: "IDOL" }
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Yugyeom",
    img: "tYy9XE2.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Wendy",
    img: "UUL7xiJ.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Taemin",
    img: "mZIG4vv.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Taehyun",
    img: "jo6OlAf.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Soojin",
    img: "267JKF2.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Shinwon",
    img: "IVfsT4q.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Johnny",
    img: "gxQUO8g.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mingi",
    img: "3uoc2Ri.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jinjin",
    img: "dxlaT67.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Jhope",
    img: "Abt3Jhy.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Peniel",
    img: "wo4gg6H.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Scoups",
    img: "Iz9ILJg.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mark Tuan",
    img: "z911CZ9.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mark Lee",
    img: "gWvxBdq.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hueningkai",
    img: "FOLrpDf.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Dongwoo",
    img: "St3SEbu.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Feeldog",
    img: "uVl0DQ4.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Daesung",
    img: "IFlJwiR.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Bobby",
    img: "ezbD3T4.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Chaeryeong",
    img: "oShAP7F.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Ziu",
    img: "i9zY3d5.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Bang Chan",
    img: "IDESW2Q.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Yoseob",
    img: "zgJtYQB.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jimin",
    img: "RRZ0dSx.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Dean",
    img: "RVkEOti.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Vernon",
    img: "o2RQspn.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jooe",
    img: "QDVWBKQ.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Haebin",
    img: "M3S19CM.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Leo",
    img: "KtSZne9.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Siwon Choi",
    img: "pqT81qz.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kenta",
    img: "jLv0Qof.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Seonghwa",
    img: "J12QdYl.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Heechul",
    img: "TkZtF94.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jseph",
    img: "0CQ2boW.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Ilhoon",
    img: "zl7knnI.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hwasa",
    img: "OGp9HQY.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jihyo",
    img: "iwLMnSm.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "BM",
    img: "BE35pHy.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Chen",
    img: "JTEsaC8.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Amber",
    img: "xsThjEf.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  }
];
