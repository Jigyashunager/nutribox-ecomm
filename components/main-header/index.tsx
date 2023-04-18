import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import React, { useState, useEffect, forwardRef, Fragment } from "react";
import PagesHeader from "../header-tags";
import HeaderHero from "../header-hero-tags";
import Slider from "@/shared/slider";

function CollapsibleExample({wishlistCount}: {wishlistCount:string}) {
  const [show, setShow] = useState(false);
  const [showCurrent, setShowCurrent] = useState<string>("sports-header-name");
  const [defaultValue, setDefaultValue] = useState<boolean>(true);

  const showDropdown = (e: any) => {
    setShow(!show);
  };
  const hideDropdown = (e: any) => {
    setShow(false);
  };

  useEffect(() => {
    
    var getElement = document.getElementById('collasible-nav-dropdown');

    if (getElement) {
      var attributeValue = getElement.getAttribute('aria-expanded')
      if (attributeValue) {
        setDefaultValue(true)
      }
    }


    // Get the list item and hidden div elements
    var listItemSports = document.getElementById("sports-header-name");
    var listItemVitamins = document.getElementById("vitamins-header-name");
    var listItemHerbs = document.getElementById("herbs-header-name");
    var listItemHealth = document.getElementById("health-header-name");
    var listItemFitness = document.getElementById("fitness-header-name");
    var listItemWelness = document.getElementById("welness-header-name");

    listItemSports?.addEventListener("mouseover", function () {
      setShowCurrent("listItemSports");
      setDefaultValue(false);
    });

    listItemVitamins?.addEventListener("mouseover", function () {
      setShowCurrent("listItemVitamins");
      setDefaultValue(false);
    });

    listItemHerbs?.addEventListener("mouseover", function () {
      setShowCurrent("listItemHerbs");
      setDefaultValue(false);
    });

    listItemHealth?.addEventListener("mouseover", function () {
      setShowCurrent("listItemHealth");
      setDefaultValue(false);
    });

    listItemFitness?.addEventListener("mouseover", function () {
      setShowCurrent("listItemFitness");
      setDefaultValue(false);
    });

    listItemWelness?.addEventListener("mouseover", function () {
      setShowCurrent("listItemWelness");
      setDefaultValue(false);
    });
    if(defaultValue){
      setShowCurrent("listItemSports")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  


  return (
    <>
      <HeaderHero />
      <Navbar collapseOnSelect className="navbar" expand="lg">
        <Container>
          <Image
            alt="nutritrix"
            className="logo"
            src="/logo.svg"
            width={150}
            height={200}
            priority
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div className="search-bg">
            <NavDropdown
              title="SHOP BY CATEGORY"
              id="collasible-nav-dropdown"
              className="search-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <ul className="categories-header">
                <li id="sports-header-name" className={showCurrent === "listItemSports" || defaultValue ? 'underline-text' : ''}>Sports Nutrition</li>
                <li id="vitamins-header-name" className={showCurrent === "listItemVitamins" ? 'underline-text' : ''}>Vitamins & Supplements</li>
                <li id="herbs-header-name" className={showCurrent === "listItemHerbs" ? 'underline-text' : ''}>Ayurveda & Herbs</li>
                <li id="health-header-name" className={showCurrent === "listItemHealth" ? 'underline-text' : ''}>Health Food & Drinks</li>
                <li id="fitness-header-name" className={showCurrent === "listItemFitness" ? 'underline-text' : ''}>Fitness</li>
                <li id="welness-header-name" className={showCurrent === "listItemWelness" ? 'underline-text' : ''}>Welness</li>
              </ul>
              {showCurrent === "listItemSports" || defaultValue ? (
                <div id="sports-category-show">
                  <ul className="sports-category-list">
                    <li className="top-heading">Proteins</li>
                    <li>Whey Protein</li>
                    <li>Beginners Whey Protei</li>
                    <li>Whey Protein Isolat</li>
                    <li>Raw Whey Protein</li>
                    <li>Plant Protein</li>
                    <li>Protein for Wome</li>
                    <li>Protein Blends</li>
                    <li>Casein Protein</li>
                    <li>Soy Proteins</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Gainers</li>
                    <li>Weight Gainers</li>
                    <li>Mass Gainers</li>
                    <li>Herbal Weight Gainers</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Protein Foods</li>
                    <li>Peanut Butter</li>
                    <li>Muesli</li>
                    <li>Protein Shakes</li>
                    <li>Oats</li>
                    <li>Cereals</li>
                    <li>Granola</li>
                    <li>Protein Bars</li>
                    <li>Protein Water</li>
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
                    <li className="top-heading">Workout Essentials</li>
                    <li>Fat Burners</li>
                    <li>L Carnitine</li>
                    <li>Multivitamins for Bodybuilding</li>
                    <li>Pre Hormone</li>
                    <li>ZMA</li>
                  </ul>
                </div>
              ) : showCurrent === "listItemVitamins" ? (
                <div id="vitamins-category-show">
                  <ul className="sports-category-list">
                    <li className="top-heading">Omega Fatty Acids</li>
                    <li>Omega 3</li>
                    <li>Fish Oil</li>
                    <li>Flaxseed Oil</li>
                    <li>Cod Liver Oil</li>
                    <li>Krill Oil</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Multivitamins</li>
                    <li>Multivitamins - Men</li>
                    <li>Multivitamins - Women</li>
                    <li>Multivitamins - General</li>
                    <li>Multivitamins - Children</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Vitamins</li>
                    <li>Vitamin C</li>
                    <li>Biotin</li>
                    <li>Vitamin B</li>
                    <li>Vitamin B Complex with B12</li>
                    <li>Vitamin D</li>
                    <li>Vitamin A</li>
                    <li>Vitamin K</li>
                    <li>Vitamin E</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Minerals</li>
                    <li>Calcium</li>
                    <li>Magnesium</li>
                    <li>Iron</li>
                    <li>Chromium</li>
                    <li>Zinc</li>
                    <li>Selenium</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Antioxidants</li>
                    <li>CoQ10</li>
                    <li>Grape Seed Extract</li>
                    <li>Alpha Lipoic Acid</li>
                    <li>DHEA</li>
                    <li>Glutathione</li>
                    <li>Other Antioxidants</li>
                  </ul>
                </div>
              ) : showCurrent === "listItemHerbs" ? (
                <div id="herbs-category-show">
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Weight Loss</li>
                    <li>Green Coffee Bean Extracts</li>
                    <li>Garcinia Cambogia</li>
                    <li>Green Tea Extract</li>
                    <li>Guggul</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Vital Herbs</li>
                    <li>Ginseng</li>
                    <li>Ginkgo Biloba</li>
                    <li>Herbal Weight Gainer</li>
                    <li>Lutein</li>
                    <li>Other Herbal Supplements</li>
                    <li>Women Health Care</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Antioxidants</li>
                    <li>Milk Thistle</li>
                    <li>Spirulina</li>
                    <li>Tulsi</li>
                    <li>Turmeric</li>
                    <li>Amla</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Immunity</li>
                    <li>Giloy</li>
                    <li>Ayush Kwath</li>
                    <li>Amla</li>
                    <li>Turmeric</li>
                    <li>Ashwagandha</li>
                    <li>Neem</li>
                    <li>Ginger</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Personal Care</li>
                    <li>Ashwagandha</li>
                    <li>Shilajit</li>
                    <li>Musli</li>
                    <li>Maca</li>
                    <li>Horny Goat Weed</li>
                  </ul>
                </div>
              ) : showCurrent === "listItemHealth" ? (
                <div id="health-category-show">
                  <ul className="sports-category-list">
                    <li className="top-heading">Vital Herbs</li>
                    <li>Ginseng</li>
                    <li>Ginkgo Biloba</li>
                    <li>Herbal Weight Gainer</li>
                    <li>Lutein</li>
                    <li>Other Herbal Supplements</li>
                    <li>Women Health Care</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Antioxidants</li>
                    <li>Milk Thistle</li>
                    <li>Spirulina</li>
                    <li>Tulsi</li>
                    <li>Turmeric</li>
                    <li>Amla</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Immunity</li>
                    <li>Giloy</li>
                    <li>Ayush Kwath</li>
                    <li>Amla</li>
                    <li>Turmeric</li>
                    <li>Ashwagandha</li>
                    <li>Neem</li>
                    <li>Ginger</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Personal Care</li>
                    <li>Ashwagandha</li>
                    <li>Shilajit</li>
                    <li>Musli</li>
                    <li>Maca</li>
                    <li>Horny Goat Weed</li>
                  </ul>
                </div>
              ) : showCurrent === "listItemFitness" ? (
                <div id="fitness-category-show">
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Immunity</li>
                    <li>Giloy</li>
                    <li>Ayush Kwath</li>
                    <li>Amla</li>
                    <li>Turmeric</li>
                    <li>Ashwagandha</li>
                    <li>Neem</li>
                    <li>Ginger</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Vital Herbs</li>
                    <li>Ginseng</li>
                    <li>Ginkgo Biloba</li>
                    <li>Herbal Weight Gainer</li>
                    <li>Lutein</li>
                    <li>Other Herbal Supplements</li>
                    <li>Women Health Care</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Antioxidants</li>
                    <li>Milk Thistle</li>
                    <li>Spirulina</li>
                    <li>Tulsi</li>
                    <li>Turmeric</li>
                    <li>Amla</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Immunity</li>
                    <li>Giloy</li>
                    <li>Ayush Kwath</li>
                    <li>Amla</li>
                    <li>Turmeric</li>
                    <li>Ashwagandha</li>
                    <li>Neem</li>
                    <li>Ginger</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Personal Care</li>
                    <li>Ashwagandha</li>
                    <li>Shilajit</li>
                    <li>Musli</li>
                    <li>Maca</li>
                    <li>Horny Goat Weed</li>
                  </ul>
                </div>
              ) : showCurrent === "listItemWelness" ? (
                <div id="fitness-category-show">
                  <ul className="sports-category-list">
                    <li className="top-heading">Antioxidants</li>
                    <li>Milk Thistle</li>
                    <li>Spirulina</li>
                    <li>Tulsi</li>
                    <li>Turmeric</li>
                    <li>Amla</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Vital Herbs</li>
                    <li>Ginseng</li>
                    <li>Ginkgo Biloba</li>
                    <li>Herbal Weight Gainer</li>
                    <li>Lutein</li>
                    <li>Other Herbal Supplements</li>
                    <li>Women Health Care</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Antioxidants</li>
                    <li>Milk Thistle</li>
                    <li>Spirulina</li>
                    <li>Tulsi</li>
                    <li>Turmeric</li>
                    <li>Amla</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Immunity</li>
                    <li>Giloy</li>
                    <li>Ayush Kwath</li>
                    <li>Amla</li>
                    <li>Turmeric</li>
                    <li>Ashwagandha</li>
                    <li>Neem</li>
                    <li>Ginger</li>
                  </ul>
                  <ul className="sports-category-list">
                    <li className="top-heading">Herbs For Personal Care</li>
                    <li>Ashwagandha</li>
                    <li>Shilajit</li>
                    <li>Musli</li>
                    <li>Maca</li>
                    <li>Horny Goat Weed</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </NavDropdown>
            <span>
              <ArrowForwardIosIcon />
            </span>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Collapse>
              <FormGroup>
                <FormControl
                  className="search-input"
                  type="text"
                  placeholder="Search products..."
                />
              </FormGroup>
              <span className="search-icon" style={{ top: "5px" }}>
                <SearchIcon />
              </span>
            </Navbar.Collapse>
          </Navbar.Collapse>
          <div className="header-right">
            <PersonOutlineIcon />
            <span>Sign In / Register</span>
            <br />
            <div className="icons">
              <FavoriteBorderIcon className="heart-icon" />
              <p className="circle">{wishlistCount}</p>
              <ShoppingBagOutlinedIcon />
              <p className="circle">0</p>
            </div>
          </div>
        </Container>
      </Navbar>
      <PagesHeader />
      <Slider value="" />
    </>
  );
}

export default CollapsibleExample;
