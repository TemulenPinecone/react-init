import Card from "./Card";

const dummyData = [
  {
    title: 1,
    img: "https://wallpapers.com/images/high/nature-green-background-1920-x-1200-pwwqx25cddnlt13c.webp",
  },
  {
    title: 2,
    img: "https://wallpapers.com/images/high/nature-green-background-1920-x-1200-pwwqx25cddnlt13c.webp",
  },
  {
    title: 3,
    img: "https://wallpapers.com/images/high/nature-green-background-1920-x-1200-pwwqx25cddnlt13c.webp",
  },
];

export default function Cards() {
  return (
    <div>
      {/* {dummyData.map((card) => (
        <Card data={card} />
      ))} */}
      <Card data={dummyData[0]} />
      <Card data={dummyData[1]} />
      {/* <Card sendData={dummyData[1]} />
      <Card sendData={dummyData[2]} /> */}
    </div>
  );
}
