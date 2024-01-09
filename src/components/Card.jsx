// export default function Card() {
//   return (
//     <div>
//       <p>Hello Card</p>
//     </div>
//   );
// }

// Arrow function
const Card = ({ data }) => {
  console.log(`inside card component :`, data);
  return (
    <div>
      <p>{data.title}</p>
      <img src={data.img} alt="" />
    </div>
  );
};
export default Card;
