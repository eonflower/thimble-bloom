import Image from 'next/image';
import Link from 'next/link';

const ItemCard = ({ item }) => {
    return (
        <div className="w-48 h-56 relative border rounded-lg p-2 transition duration-300 ease-in-out hover:border-red-800">
        <Link href={`/shop/${item.name}`}>
            <Image 
                className='rounded-xl flex mx-auto mb-4'
                width={100} 
                height={100} 
                src={item.image} 
                alt={item.name} />
                <h1 className='text-red-500'>{item.name}</h1>
            <h1>{item.price}</h1>
        </Link>
            <button className="bg-red-800 absolute mt-1 right-2 text-white rounded-lg p-1">Add to Cart</button>
        </div>
    )
}

export default ItemCard;