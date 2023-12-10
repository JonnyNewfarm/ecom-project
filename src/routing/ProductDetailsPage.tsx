import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Hei</div>;
};

export default ProductDetailsPage;
