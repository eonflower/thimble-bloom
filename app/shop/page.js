import ItemCard from "../components/ItemCard"
import peach from "/app/assets/images/peach.jpg"

export default function Shop() {
    return (
        <div className="h-screen">
            <h1 className="flex justify-center mt-4">Shop</h1>
            <div className="w-full flex gap-8 justify-center flex-wrap py-6">
                <ItemCard item={{image: peach, name: "test", price: 10}} />
                <ItemCard item={{image: peach, name: "test", price: 10}} />
                <ItemCard item={{image: peach, name: "test", price: 10}} /> 
                <ItemCard item={{image: peach, name: "test", price: 10}} />
                <ItemCard item={{image: peach, name: "test", price: 10}} />
                <ItemCard item={{image: peach, name: "test", price: 10}} />
            </div>
        </div>
    )
}