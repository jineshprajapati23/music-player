import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "IT’S OKAY",
      artist: "Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#B89068", "#090A0F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=55163",
    },
    {
      name: "Nightangle",
      artist: "Yaani",
      cover: "https://i1.sndcdn.com/artworks-000100533606-bg2glp-t500x500.jpg",
      id: uuidv4(),
      color: ["#D69A61", "#F2F2F2"],
      audio:
        "https://rildi.sunproxy.net/file/WkN5VFlDZ1B0NTBBejdEa3lOQ2RYMks4aW5FeTErODZXUDFtM3Jaa1F6cHJ0azlRUzZHSDRNQk92UEtZaDl5Snk2dENrTFlicnFLWnFoT3lRR2owRzZhS2Rlb0JKWXFCTzA4OFkwd0liQ2c9/YANNI_-_Rainmaker_Live_(Hydr0.org).mp3",
      active: false,
    },
    {
      name: "Upstream",
      artist: "Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E3C68C", "#491F1A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=55311",
    },
    {
      name: "Addison",
      artist: "Juniorodeo",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/1bcec532a76700819b9ca2853c175cdc54bccb02-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#F5D0A5", "#4F4241"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=55316",
    },
    {
      name: "Steady",
      artist: "J.Folk",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/9e6aaa4e04b9e4054f8ed2586d331113e82247da-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#442F28", "#353630"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58834",
    },
    {
      name: "Pending",
      artist: "J.Folk",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#B89068", "#090A0F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=58838",
    },
  ];
}

export default chillHop;
