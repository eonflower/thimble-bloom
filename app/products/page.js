import ItemCard from "../components/ItemCard"
import plant1 from "/app/assets/images/plant1.jpg"
import plant2 from "/app/assets/images/plant2.jpg"
import plant3 from "/app/assets/images/plant3.jpg"
import plant4 from "/app/assets/images/plant4.jpg"

export default function Products() {
    return (
        <div className="h-full mt-32 mb-32">
            <h1 className="flex justify-center text-primary-100 mt-4">Products</h1>
            <div className="w-full flex gap-8 justify-center flex-wrap py-6">
                <ItemCard item={{image: plant1, name: "briefs", price: 25}} />
                <ItemCard item={{image: plant2, name: "gridded fleece", price: 120}} />
                <ItemCard item={{image: plant3, name: "collared fleece pullover", price: 120}} /> 
                <ItemCard item={{image: plant4, name: "jogger fleece sweats", price: 65}} />
                <ItemCard item={{image: plant1, name: "shorts", price: 40}} />
                <ItemCard item={{image: plant2, name: "hat", price: 15}} />
            </div>
        </div>
        
    )
}