'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../../public/images/logo-2.png'
import headerStyle from './header.module.css'
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={logo}
            width={70}
            height={70}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={headerStyle.navLink}>
            <Link href={'/home'} className='nav-link'>HOME</Link>
            <Link href={'/about'} className='nav-link'>ABOUT US</Link>
            <Link href={'/impact'} className='nav-link'>IMPACT STORIES</Link>
            <Link href={'/contact'} className='nav-link'>CONTACT US</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
