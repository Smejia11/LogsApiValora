import fs from "node:fs";

const array = [
  {
    _id: ObjectId("66ba7991c37d2a5a33d736d8"),
    statusText: "OK",
    idQueue: "25",
    placa: "GPQ978",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/25/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T21:07:29.933+0000"),
  },
  {
    _id: ObjectId("66ba795dc37d2a5a33d736cf"),
    statusText: "OK",
    idQueue: "24",
    placa: "JCN415",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/24/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T21:06:37.907+0000"),
  },
  {
    _id: ObjectId("66ba77bec37d2a5a33d736b8"),
    statusText: "OK",
    idQueue: "23",
    placa: "CMM115",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/23/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T20:59:42.868+0000"),
  },
  {
    _id: ObjectId("66ba76e4c37d2a5a33d736a1"),
    statusText: "OK",
    idQueue: "22",
    placa: "KJS602",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/22/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T20:56:04.141+0000"),
  },
  {
    _id: ObjectId("66ba6e77c37d2a5a33d73673"),
    statusText: "OK",
    idQueue: "21",
    placa: "CCX664",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/21/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T20:20:07.716+0000"),
  },
  {
    _id: ObjectId("66ba6e59c37d2a5a33d7366a"),
    statusText: "OK",
    idQueue: "20",
    placa: "JDQ262",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/20/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T20:19:37.380+0000"),
  },
  {
    _id: ObjectId("66ba6cf4c37d2a5a33d73658"),
    statusText: "OK",
    idQueue: "19",
    placa: "ENK556",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/19/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T20:13:40.835+0000"),
  },
  {
    _id: ObjectId("66ba6808c37d2a5a33d73631"),
    statusText: "OK",
    idQueue: "18",
    placa: "UBW725",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/18/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T19:52:40.863+0000"),
  },
  {
    _id: ObjectId("66ba67f7c37d2a5a33d73628"),
    statusText: "OK",
    idQueue: "17",
    placa: "DVL791",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/17/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T19:52:23.544+0000"),
  },
  {
    _id: ObjectId("66ba6704c37d2a5a33d73603"),
    statusText: "OK",
    idQueue: "16",
    placa: "GYX189",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/16/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T19:48:20.237+0000"),
  },
  {
    _id: ObjectId("66ba633fc37d2a5a33d735d6"),
    statusText: "OK",
    idQueue: "15",
    placa: "PFN596",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/15/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T19:32:15.062+0000"),
  },
  {
    _id: ObjectId("66ba6168c37d2a5a33d735bd"),
    statusText: "OK",
    idQueue: "14",
    placa: "LHN573",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/14/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T19:24:24.870+0000"),
  },
  {
    _id: ObjectId("66ba607bc37d2a5a33d735b4"),
    statusText: "OK",
    idQueue: "13",
    placa: "LIQ207",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/13/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T19:20:27.003+0000"),
  },
  {
    _id: ObjectId("66ba56efc37d2a5a33d7354c"),
    statusText: "OK",
    idQueue: "12",
    placa: "EJP846",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/12/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T18:39:43.463+0000"),
  },
  {
    _id: ObjectId("66ba4f89c37d2a5a33d73500"),
    statusText: "OK",
    idQueue: "11",
    placa: "JVS878",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/11/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T18:08:09.196+0000"),
  },
  {
    _id: ObjectId("66ba3793c37d2a5a33d734a6"),
    statusText: "OK",
    idQueue: "10",
    placa: "MKU746",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/10/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T16:25:55.337+0000"),
  },
  {
    _id: ObjectId("66ba3717c37d2a5a33d7349b"),
    statusText: "OK",
    idQueue: "8",
    placa: "JJO591",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/8/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T16:23:51.177+0000"),
  },
  {
    _id: ObjectId("66ba3716c37d2a5a33d73499"),
    statusText: "OK",
    idQueue: "9",
    placa: "HEW978",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/9/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T16:23:50.655+0000"),
  },
  {
    _id: ObjectId("66ba3591c37d2a5a33d73470"),
    statusText: "OK",
    idQueue: "7",
    placa: "LUS296",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/7/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T16:17:21.428+0000"),
  },
  {
    _id: ObjectId("66ba3506c37d2a5a33d7345e"),
    statusText: "OK",
    idQueue: "6",
    placa: "BST286",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/6/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T16:15:02.127+0000"),
  },
  {
    _id: ObjectId("66ba339ac37d2a5a33d73432"),
    statusText: "OK",
    idQueue: "5",
    placa: "DWQ114",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/5/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T16:08:58.144+0000"),
  },
  {
    _id: ObjectId("66ba2f6cc37d2a5a33d73427"),
    statusText: "OK",
    idQueue: "4",
    placa: "COK925",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/4/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T15:51:08.280+0000"),
  },
  {
    _id: ObjectId("66ba2a55c37d2a5a33d7340e"),
    statusText: "OK",
    idQueue: "3",
    placa: "GBR565",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/3/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T15:29:25.822+0000"),
  },
  {
    _id: ObjectId("66ba28e2c37d2a5a33d733f5"),
    statusText: "OK",
    idQueue: "2",
    placa: "MBT640",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/2/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T15:23:14.124+0000"),
  },
  {
    _id: ObjectId("66ba2655c37d2a5a33d733dc"),
    statusText: "OK",
    idQueue: "1",
    placa: "DDC464",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-12T15:12:21.842+0000"),
  },
  {
    _id: ObjectId("66b7b855c37d2a5a33d7320c"),
    statusText: "OK",
    idQueue: "1",
    placa: "RMQ653",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-10T18:58:29.466+0000"),
  },
  {
    _id: ObjectId("66b7b737c37d2a5a33d731fc"),
    statusText: "OK",
    idQueue: "1",
    placa: "UEM016",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-10T18:53:43.285+0000"),
  },
  {
    _id: ObjectId("66b79972c37d2a5a33d731c5"),
    statusText: "OK",
    idQueue: "1",
    placa: "JJQ778",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-10T16:46:42.518+0000"),
  },
  {
    _id: ObjectId("66b76c8bc37d2a5a33d73182"),
    statusText: "OK",
    idQueue: "1",
    placa: "LNR897",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-10T13:35:07.619+0000"),
  },
  {
    _id: ObjectId("66b6a4c7c37d2a5a33d73152"),
    statusText: "OK",
    idQueue: "1",
    placa: "LLS960",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T23:22:47.042+0000"),
  },
  {
    _id: ObjectId("66b69ef9c37d2a5a33d73142"),
    statusText: "OK",
    idQueue: "1",
    placa: "DLM487",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T22:58:01.717+0000"),
  },
  {
    _id: ObjectId("66b69454c37d2a5a33d7312b"),
    statusText: "OK",
    idQueue: "1",
    placa: "KTK408",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T22:12:36.706+0000"),
  },
  {
    _id: ObjectId("66b685c9c37d2a5a33d730e7"),
    statusText: "OK",
    idQueue: "2",
    placa: "RDM194",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/2/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T21:10:33.985+0000"),
  },
  {
    _id: ObjectId("66b6857fc37d2a5a33d730de"),
    statusText: "OK",
    idQueue: "1",
    placa: "DKS116",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T21:09:19.866+0000"),
  },
  {
    _id: ObjectId("66b67e61c37d2a5a33d730ae"),
    statusText: "OK",
    idQueue: "1",
    placa: "NDV358",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T20:38:57.799+0000"),
  },
  {
    _id: ObjectId("66b67afdc37d2a5a33d73095"),
    statusText: "OK",
    idQueue: "1",
    placa: "KNV727",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T20:24:29.986+0000"),
  },
  {
    _id: ObjectId("66b67965c37d2a5a33d73070"),
    statusText: "OK",
    idQueue: "1",
    placa: "RZH114",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T20:17:41.273+0000"),
  },
  {
    _id: ObjectId("66b677c5c37d2a5a33d73067"),
    statusText: "OK",
    idQueue: "1",
    placa: "BWA895",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T20:10:45.724+0000"),
  },
  {
    _id: ObjectId("66b67566c37d2a5a33d7305c"),
    statusText: "OK",
    idQueue: "1",
    placa: "AVG800",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T20:00:38.730+0000"),
  },
  {
    _id: ObjectId("66b672f7c37d2a5a33d73045"),
    statusText: "OK",
    idQueue: "1",
    placa: "HHP897",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T19:50:15.877+0000"),
  },
  {
    _id: ObjectId("66b66ce8c37d2a5a33d73019"),
    statusText: "OK",
    idQueue: "1",
    placa: "BRR433",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T19:24:24.972+0000"),
  },
  {
    _id: ObjectId("66b66a62c37d2a5a33d72ffb"),
    statusText: "OK",
    idQueue: "1",
    placa: "MCQ731",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T19:13:38.618+0000"),
  },
  {
    _id: ObjectId("66b6614ec37d2a5a33d72fb3"),
    statusText: "OK",
    idQueue: "1",
    placa: "HML989",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T18:34:54.668+0000"),
  },
  {
    _id: ObjectId("66b658a3c37d2a5a33d72f8a"),
    statusText: "OK",
    idQueue: "1",
    placa: "ZZT334",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T17:57:55.318+0000"),
  },
  {
    _id: ObjectId("66b65218c37d2a5a33d72f71"),
    statusText: "OK",
    idQueue: "2",
    placa: "GWR693",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/2/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T17:30:00.374+0000"),
  },
  {
    _id: ObjectId("66b65215c37d2a5a33d72f6f"),
    statusText: "OK",
    idQueue: "1",
    placa: "FWN848",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T17:29:57.709+0000"),
  },
  {
    _id: ObjectId("66b64beac37d2a5a33d72f4e"),
    statusText: "OK",
    idQueue: "1",
    placa: "HZQ502",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T17:03:38.124+0000"),
  },
  {
    _id: ObjectId("66b649bac37d2a5a33d72f24"),
    statusText: "OK",
    idQueue: "1",
    placa: "DEQ569",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T16:54:18.927+0000"),
  },
  {
    _id: ObjectId("66b648a3c37d2a5a33d72f14"),
    statusText: "OK",
    idQueue: "1",
    placa: "RAV029",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T16:49:39.435+0000"),
  },
  {
    _id: ObjectId("66b64266c37d2a5a33d72ef5"),
    statusText: "OK",
    idQueue: "1",
    placa: "BSV156",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T16:23:02.205+0000"),
  },
  {
    _id: ObjectId("66b63ba4c37d2a5a33d72ec8"),
    statusText: "OK",
    idQueue: "1",
    placa: "RLR233",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T15:54:12.850+0000"),
  },
  {
    _id: ObjectId("66b63385c37d2a5a33d72e7f"),
    statusText: "OK",
    idQueue: "1",
    placa: "KRS529",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T15:19:33.305+0000"),
  },
  {
    _id: ObjectId("66b62fd9c37d2a5a33d72e6d"),
    statusText: "OK",
    idQueue: "1",
    placa: "RET968",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T15:03:53.998+0000"),
  },
  {
    _id: ObjectId("66b62f64c37d2a5a33d72e64"),
    statusText: "OK",
    idQueue: "1",
    placa: "IGP553",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T15:01:56.547+0000"),
  },
  {
    _id: ObjectId("66b6240ac37d2a5a33d72dcc"),
    statusText: "OK",
    idQueue: "1",
    placa: "KSY244",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T14:13:30.730+0000"),
  },
  {
    _id: ObjectId("66b62215c37d2a5a33d72dbc"),
    statusText: "OK",
    idQueue: "1",
    placa: "FSL456",
    stateQueue: "COMPLETED",
    url: "https://fakeApi/api/v1/bgtask/1/leadValoraQueue/leadIntermediary",
    date: ISODate("2024-08-09T14:05:09.826+0000"),
  },
];

function ISODate(utcTime) {
  const date = new Date(utcTime);
  const offsetMinutes = -300; // Colombia is UTC-5, so we subtract 300 minutes from the UTC time
  const localDate = new Date(date.getTime() + offsetMinutes * 60 * 1000);

  return `${localDate.toLocaleString("es-CO", {
    hour12: true,
  })} hora local Colombia`;
}
function ObjectId(date) {
  return date;
}
//

const csvData = [["Placa", "Status Text", "State Queue", "Date", "url"]]
  .concat(
    array.map((item) => {
      return [
        item.placa ?? "",
        item.statusText ?? "",
        item.stateQueue ?? "",
        item.date ?? "",
        item.url ?? "",
      ];
    })
  )
  .map((value) => value.join(","))
  .join("\n");


fs.writeFile(`Logs`, csvData, "utf8", (err) => {
  if (err) {
    console.error("Error al escribir el archivo", err);
  } else {
    console.log("Archivo CSV creado con éxito");
  }
});
