import { useRouter } from "next/router"
import carsData from "../../data/carsData"
import CarList from "../../components/templates/CarsList"

function CategoryId() {
    const router=useRouter()
    const{categoryId}=router.query
    const filteredData=carsData.filter((car)=>car.category===categoryId)
  return (
    <div>
        <CarList data={filteredData}/>
    </div>
  )
}

export default CategoryId