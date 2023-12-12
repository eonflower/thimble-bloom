"use client"
import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

import Image from 'next/image';
import Link from 'next/link';

const ItemCard = ({ item }) => {
    const [itemInfo, setItemInfo] = useState(item);
    const [quantity, setQuantity] = useState(1);
    const [toggleModal, setToggleModal] = useState(false);

    const toggleOpen = () => setToggleModal(!toggleModal);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleAddToCart = () => {
        // Implement your logic to add the selected quantity to the cart
        alert(`Added ${quantity} ${item.name} to the cart.`);
        toggleOpen();
    };

    const capitalizedName = item.name.split(' ').map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');

    const nameForUrl = item.name.split(' ').map((word) => {
        return word.toLowerCase();
    }).join('-');

    const slug = `${nameForUrl}`;


    return (
        <>
        <div className="w-52 h-72 relative bg-dark-surface-500 shadow-3-strong rounded-lg font-light">
        <Link href={`/products/item/${[slug]}`}>
            <Image 
                className='h-44 mb-3 rounded-t-lg transition duration-800 ease-in-out hover:opacity-80'
                src={item.image} 
                alt={item.name} />
                <h1 className='text-dark-surface-100 pl-4 pb-1'>{capitalizedName}</h1>
            <h1 className='text-dark-surface-100 pl-4'>$ {item.price}</h1>
        </Link>
        <MDBBtn 
        color='dark'
        className="bg-dark-surface-300 shadow-none absolute bottom-2 right-2 text-primary-600 rounded-lg p-1 text-xs font-extralight" 
        onClick={toggleOpen}>
            add to cart
        </MDBBtn>

        </div>


        <MDBModal open={toggleModal} setopen={setToggleModal} tabIndex='-1'>
        <MDBModalDialog>
            <MDBModalContent>
            <MDBModalHeader>
                <MDBModalTitle>
                    <h1 className='text-black'>Are you sure you want to add this item to your cart?</h1>
                </MDBModalTitle>
                <MDBBtn 
                className='btn-close' 
                color='none' 
                onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='text-black flex'>
                <div>
                <Image
                className='rounded-lg'
                src={item.image}
                alt={item.name}
                width={200}
                />
                </div>
                <div className='my-auto mx-auto'>
                <h1 className='text-black flex text-xl tracking-widest'>{capitalizedName}</h1>
                <h1 className='text-black flex text-lg'>${item.price}</h1>

                <MDBDropdown>
                <MDBDropdownToggle 
                    color="dark"
                    size="sm"
                    className="mt-6 bg-dark-surface-600">
                    Quantity: {quantity}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    {[1, 2, 3, 4, 5].map((value) => (
                    <MDBDropdownItem link
                        className=''
                        key={value} 
                        onClick={() => handleQuantityChange(value)}>
                        {value}
                    </MDBDropdownItem>
                    ))}
                </MDBDropdownMenu>
                </MDBDropdown>

                </div>
            </MDBModalBody>

            <MDBModalFooter>
                <MDBBtn
                color='danger'
                className='bg-primary-200' 
                onClick={toggleOpen}>
                Close
                </MDBBtn>
                <MDBBtn 
                className='bg-dark-surface-100'
                color='dark'
                onClick={handleAddToCart}>
                    Add to Cart</MDBBtn>
            </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
        </MDBModal></>
    )
}

export default ItemCard;