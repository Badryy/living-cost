import React, { useState } from 'react';
//import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import {
	StyledMinNav,
	LogoContainer,
	NavigationContainer,
	MenuHeader,
} from '../styles/comonentsStyles/minNavStyles';

import logo from '../assets/logo.svg'
import ham from '../assets/hambuger.svg';

const MinNav = () => {
	const [showMenu, setShowMenu] = useState(false);

	//Toggle navbar
	const openNav = () => {
		setShowMenu(true);
	};
	const closeNav = () => {
		setShowMenu(false);
	};

	return (
		<StyledMinNav>
			<LogoContainer>
				<Link href='/'>
					<Image src={logo} alt='SoftShop Logo' />
				</Link>
			</LogoContainer>

			<div>
				{showMenu && (
					<NavigationContainer
						// as={motion.div}
						// initial={{ x: 0, opacity: 0 }}
						// animate={{ x: 0, opacity: 1 }}
						// transition={{ type: 'tween', duration: 0.3 }}
						// exit={{
						// 	x: '1000vw',
						// 	transition: { ease: 'easeInOut', duration: 0.5 },
						// }}
						className='menu'
					>
						<MenuHeader>
							<h3>Menu</h3>
							<span className='close-menu' onClick={closeNav}>
								&times;
							</span>
						</MenuHeader>
						<ul className='nav-ul'>
							<li>
								<a href='#' className='dropBtn'>
									Home
								</a>
							</li>

							<li>
								<a href='#' className='dropBtn'>
									Landlord
								</a>
							</li>

							<li>
								<a href='#' className='dropBtn'>
									Tenant
								</a>
							</li>
              <li>
								<a href='#' className='dropBtn'>
									Contact Us
								</a>
							</li>

						</ul>
					</NavigationContainer>
				)}
			</div>

			<Image
				src={ham}
				alt='toggle-menu-ham'
				onClick={openNav}
			/>
		</StyledMinNav>
	);
};

export default MinNav;
