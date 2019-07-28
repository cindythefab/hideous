dataSetVersion = "2019-07-27"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    name: "Sunwoo",
    img: "H70VmT9.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Umji",
    img: "9ppefeq.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Taehyun",
    img: "HGoF909.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Soojin",
    img: "NQztQv8.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mark Lee",
    img: "DkdXEIW.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "IN",
    img: "8k4UIvk.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jooheon",
    img: "x7T058n.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Shinwon",
    img: "NOOklBp.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jhope",
    img: "Ly6FU9r.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Dean",
    img: "1Sc8MoT.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hueningkai",
    img: "sTHijDR.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jae",
    img: "YgdZUin.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Wendy",
    img: "MYFa3eu.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Zico",
    img: "uBZTEhj.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jinwoo",
    img: "rJDOvhX.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Haebin",
    img: "3Vwn8eX.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Scoups",
    img: "dIxGl1e.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Park Bom",
    img: "6wa1LDl.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Woojin",
    img: "K9896Gy.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Yeosang",
    img: "aX94J3n.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Yugyeom",
    img: "1cNHb5w.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Moonbyul",
    img: "1d4HaYd.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Vernon",
    img: "hqcjDJk.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Seonghwa",
    img: "c4mRYNA.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jooe",
    img: "f6d0Uo1.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Dongwoo",
    img: "ExHX3KK.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Chen",
    img: "imAG8Ey.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Chaeryeong",
    img: "9Btm8Pj.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "BM",
    img: "pwndd6J.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "PO",
    img: "zuvwB7T.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Ziu",
    img: "fOI420v.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Bang Chan",
    img: "pdxPgmo.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Jinjin",
    img: "uHv3K4h.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yoseob",
    img: "pE27xuB.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jimin",
    img: "JkygrdR.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hwasa",
    img: "zlhtntO.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Siwon Choi",
    img: "UlbBsMy.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mark Tuan",
    img: "Dc1XLqt.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hyolyn",
    img: "66W7hDM.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
    {
    name: "Johnny",
    img: "oXTm4y3.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Ilhoon",
    img: "Ue7AQem.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hendery",
    img: "mxIVvXi.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mingi",
    img: "vEZo0rB.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Bobby",
    img: "bbVfYOd.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Leo",
    img: "czmFyFj.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
   {
    name: "Heechul",
    img: "isRdhKh.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Amber",
    img: "9VVfZGf.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Daesung",
    img: "fQ22Y1s.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Peniel",
    img: "vOr6VOm.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  }
];
