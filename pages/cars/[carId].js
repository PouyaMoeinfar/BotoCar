import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetails from "../../components/templates/CarDetails";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const carsDetails = carsData[carId - 1];

  return <CarDetails {...carsDetails}/>
  ;
}

export default CarDetail;
