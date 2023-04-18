import React, { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from "next/image";


const PagesHeader = () => {
  const [name, setName] = useState("");

  const showDropdown = (e: any) => {
    setName(e.target.innerHTML);
  };
  const hideDropdown = (e: any) => {
    setName("");
  };


  const [showCurrent, setShowCurrent] = useState<string>("sports-header-name");
  const [hoveredItem, setHoveredItem] = useState('1');

  const handleItemMouseEnter = (eventKey: any) => {
    setHoveredItem(eventKey);
  };


  return (
    <>
      <div>
        <hr className="line" />
        <ul className="header-lists">
          <li className="header-list-mains">
            <div className="best-sellers-div">
              <NavDropdown
                title="Best Sellers"
                id="collasible-nav-dropdown"
                className="search-dropdown"
                show={name === "Best Sellers" ? true : false}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <div className="dropdown-items">
                <Dropdown.Item
                  eventKey="1"
                  href=""
                  className={hoveredItem === "1" ? "color-white" : ""}
                  onMouseEnter={() => handleItemMouseEnter('1')}
                >
                  Sport Nutrition
                  <ArrowForwardIosIcon className="arrow-span" width={60} height={60} />
                 {hoveredItem === "1" ?  <div className="best-sellers-list">
                    <ul>
                        <li>Protein Powder</li>
                        <li>Whey Protein</li>
                        <li>Whey Protein Isolate</li>
                        <li>Mass Gainer</li>
                        <li>BCAA</li>
                        <li>Fat Burners</li>
                        <li>Pre Workout</li>
                        <li>Creatine</li>
                        <li>Protein Bars</li>
                        <li>Weight Gainer</li>
                        <li>Carb Blends</li>
                        <li>Other Support</li>
                        <li>Casein Protein</li>
                    </ul>
                  </div>: ""}
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="1"
                  onMouseEnter={() => handleItemMouseEnter('2')}
                >
                  Fitness
                  <ArrowForwardIosIcon className="arrow-span" width={60} height={60} />
                  {hoveredItem === "2" ?  <div className="best-sellers-list">
                    <ul>
                      <li>Multivitamins</li>
                      <li>Omega 3</li>
                      <li>Ayurveda & Herbs</li>
                      <li>Fish Oil</li>
                      <li>Biotin</li>
                      <li>Apple Cider Vinegar</li>
                      <li>Protein Shakes</li>
                      <li>Meal Replacement</li>
                      <li>Kids Protein</li>
                      <li>Peanut Butter</li>
                    </ul>
                  </div>: ""}
                </Dropdown.Item >
                <Dropdown.Item
                  eventKey="1"
                  onMouseEnter={() => handleItemMouseEnter('3')}
                >
                  Sport Nutrition
                  <ArrowForwardIosIcon className="arrow-span" width={60} height={60} />
                  {hoveredItem === "3" ?  <div className="best-sellers-list">
                    <ul>
                        <li>Dumbbells</li>
                        <li>Gym Shakers</li>
                        <li>Resistance Bands</li>
                        <li>Yoga Mats</li>
                        <li>Wrist Support</li>
                        <li>Fitness Trackers</li>
                        <li>Hand Grips</li>
                        <li>Home Gym</li>
                      <li>Peanut Butter</li>
                    </ul>
                  </div>: ""}
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="1"
                  onMouseEnter={() => handleItemMouseEnter('4')}
                >
                  Wellness                
                  <ArrowForwardIosIcon className="arrow-span" width={60} height={60} />
                  {hoveredItem === "4" ?  <div className="best-sellers-list">
                    <ul>
                        <li>Serum</li>
                        <li>Hair Oil</li>
                        <li>Men Grooming</li>
                        <li>Hair Serum</li>
                        <li>Toner</li>
                        <li>Cleansers</li>
                        <li>Speciality Shampoo</li>
                    </ul>
                  </div>: ""}
                </Dropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </li>
          <li className="header-list-mains">
            <div className="brands-div">
            <NavDropdown
              title="Brands"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Brands" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
               <div id="sports-category-show">
                  <ul className="sports-category-list">
                    <li className="top-heading">Sports Nutrition</li>
                      <li>Muscleblaze</li>
                      <li>MB Fuel One</li>
                      <li>GREEN</li>
                      <li>Optimum Nutrition</li>
                      <li>Ultimate Nutrition</li>
                      <li>MuscleTech</li>
                      <li>MyProtein</li>
                      <li>Isopure</li>
                      <li>Dymatize</li>
                      <li>GNC</li>
                      <li>Labrada</li>
                      <li>MusclePharm</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Vitamins & Supplements</li>
                        <li>Healthkart HK Vitals</li>
                        <li>TrueBasics</li>
                        <li>GNC</li>
                        <li>Wow Life Science</li>
                        <li>NOW</li>
                        <li>Healthvit</li>
                        <li>INLIFE</li>
                        <li>Natures Velvet</li>
                        <li>Swisse</li>
                        <li>NutraFirst</li>
                        <li>Boldfit</li>
                        <li>Plix Olena</li>
                        <li>HealthyHey Nutrition</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Health Food And Drinks</li>
                      <li>Myfitness</li>
                      <li>MuscleBlaze</li>
                      <li>Healthkart HK Vitals</li>
                      <li>Bagrrys</li>
                      <li>True Elements</li>
                      <li>Yoga Bar</li>
                      <li>Gritzo</li>
                      <li>Alpino</li>
                      <li>RiteBite</li>
                      <li>Amway</li>
                      <li>The Whole Truth</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Pre/Post Workout</li>
                    <li>Pre-Workout</li>
                    <li>Creatine</li>
                    <li>Beta Alanine</li>
                    <li>BCAAs</li>
                    <li>Carb Blends</li>
                    <li>Electrolytes</li>
                    <li>EAA</li>
                    <li>Nitric Oxide</li>
                    <li>Other Supports</li>
                    <li>Citrulline Malate</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Fitness</li>
                      <li>Noise</li>
                      <li>beatXP</li>
                      <li>BULLAR</li>
                      <li>Strauss</li>
                      <li>MuscleXP</li>
                      <li>GHC</li>
                      <li>Fitinc</li>
                      <li>Love4ride</li>
                      <li>B Fit USA</li>
                      <li>Gionee</li>
                      <li>John Ally</li>
                      <li>Biofit</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Wellness</li>
                    <li>Ustraa</li>
                    <li>NutraFirst</li>
                    <li>Bold Care</li>
                    <li>Amway</li>
                    <li>Kozicare</li>
                    <li>Himalayan Organics</li>
                    <li>Organic Harvest</li>
                    <li>INLIFE</li>
                  </ul>
                </div>
                <div className="brands-logo">
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh1.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh2.png"
                      width={50}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh3.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh4.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh5.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh6.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh7.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh8.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh9.png"
                      width={250}
                      height={50}
                      priority
                    />
                    <Image
                      alt="nutritrix"
                      className="logo"
                      src="/logoh10.png"
                      width={250}
                      height={50}
                      priority
                    />
                </div>
              
            </NavDropdown>
            </div>
          </li>
          <li className="header-list-mains">
            <div className="deals-div">
            <NavDropdown
              title="Deals"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Deals" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <div className="deal-icons">
              <Image
                      alt="nutritrix"
                      src="/deal1.png"
                      width={100}
                      height={60}
                      priority
                    />
              <Image
                      alt="nutritrix"
                      src="/deal2.png"
                      width={100}
                      height={60}
                      priority
                    />
              <Image
                      alt="nutritrix"
                      src="/deal3.png"
                      width={100}
                      height={60}
                      priority
                    />
              <Image
                      alt="nutritrix"
                      src="/deal4.png"
                      width={100}
                      height={60}
                      priority
                    />
              </div>
            </NavDropdown>
            </div>
          </li>
          <li className="header-list-mains">
            <NavDropdown
              title="Blogs"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
            </NavDropdown>
          </li>
          <li className="header-list-mains">
            <NavDropdown
              title="Gift Card"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
            </NavDropdown>
          </li>
          <li className="header-list-mains">
            <div className="customer-div">
            <NavDropdown
              title="Customer Support"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={name === "Customer Support" ? true : false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
                <ul className="sports-category-list">
                  <li>Chat with us</li>
                  <li>Email us</li>
                  <li>Ask our Experts</li>
                  <li>Returns policy</li>
                  <li>FAQs</li>
                  <li>Terms & Conditions</li>
                  </ul>
            </NavDropdown>
            </div>
          </li>
          <li className="header-list-mains">
            <NavDropdown
              title="Store Locator"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={false}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
            </NavDropdown>
          </li>

        </ul>
      </div>
    </>
  );
};

export default PagesHeader;
