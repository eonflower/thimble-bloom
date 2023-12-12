"use client";

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import logo from '../assets/logos/light-logo-full.png'

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <>
    <div className="w-full fixed top-0 z-20 bg-primary-100">
      <MDBNavbar>
        <MDBContainer fluid>
        <MDBNavbarToggler
            className=''
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setshowMenu(!showMenu)}
          >
            <MDBIcon className="text-light" icon='bars' size='lg' fas />
          </MDBNavbarToggler>
        <MDBNavbarBrand className='mx-auto text-light' href='/'>
        <Image
              src={logo}
              height={75}
              width={'auto'}
              alt=''
              loading='lazy'
            />
        </MDBNavbarBrand>
            <MDBNavbarLink href='/cart'>
              <MDBIcon className="text-light" fas icon='shopping-cart' size='lg' />
            </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse navbar open={showMenu}>
          <MDBNavbarNav className='pl-4 text-sm pb-2'>
            <MDBNavbarItem>
              <MDBNavbarLink className='link-hover-secondary' href='/'>
                home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='link-hover-secondary' href='/about'>
                about
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='link-hover-secondary' href='/products'>
                products
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
    </div>
    </>
);
}
