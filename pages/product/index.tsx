import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Rating from "@mui/material/Rating";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Header from '@/components/homepage-components/main-header';
import Footer from '@/shared/homepage-shared/footer';
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QuantityBox from '@/shared/homepage-shared/quantity-box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Product({ product }: { product: any }) {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(3)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlewWishList = () => {

      }

    const images = [
        {
            original: 'https://i.ibb.co/x8bNrqy/maxPC.jpg',
            thumbnail: 'https://i.ibb.co/x8bNrqy/maxPC.jpg',
        },
        {
            original: 'https://i.ibb.co/Tck0tF8/naturePC.jpg',
            thumbnail: 'https://i.ibb.co/Tck0tF8/naturePC.jpg',
        },
        {
            original: 'https://i.ibb.co/mD2NPwy/grassPC.jpg',
            thumbnail: 'https://i.ibb.co/mD2NPwy/grassPC.jpg',
        },
    ];

    useEffect(() => {
        const progressBar = document.querySelector(".progress-bar");
        const progress = document.querySelector<HTMLElement>(".progress");
        let progressWidth = 0;
        function updateProgress() {
          progressWidth += 10; // adjust based on your needs
          if (progress) {
            progress.style.width = `${progressWidth}%`;
          }
        }
      }, []);
    
      const handleBundleTotal = () => {

      }
    return (
        <>
            <Header wishlistCount={"2"} />
            <div className='page-distribution-heading'>
                <Link href="/"><h6>Homepage</h6> </Link>
                <span><ArrowForwardIosIcon /></span>
                <h6>Category</h6>
                <span><ArrowForwardIosIcon /></span>
                <h5>Product</h5>
            </div>
            <div className='div-flex'>
            <div className='image-slider'>
                <ImageGallery items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    slideInterval={1000}
                    thumbnailPosition={"left"}
                    showThumbnails={true}
                />
            </div>
            <div className='product-page-info'>
                <p className='in-stock'>IN STOCK</p>
                <h6>Naturally Flavored Gold Standard 100% Whey</h6>
                <div className='div-flex'>
                <div className="stars-rating">
                  <Rating
                    className="stars"
                    name="read-only"
                    value={value}
                    readOnly
                  />
                  <span className="stars-count">(3 reviews)</span>
                </div>
                <h5>Brand:<span>Gym Sports</span></h5>
                <h5>SKU:<span>BE4VGRT</span></h5>
                </div>
                <h4>$90.00</h4>
                <h3 className='product-content'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser mollit anim id est laborum.</h3>
                <p>Sold: <span>30/62</span></p>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <div className='div-flex-buttons'>
                <QuantityBox handleBundleTotal={handleBundleTotal} price=''/>
                <button className="hover-up">
                    <span>ADD TO CART</span>
                </button>
                <FavoriteOutlinedIcon
                  className={"wishlist-icon"}
                  width={60}
                  height={60}
                />
                <p onClick={() => {handlewWishList}} className='browse'>Browse Wishlist</p>
                </div>
                <div className='category-tags'>
                <h5>Category:<span>Apparel</span></h5>
                <h5>Tag:<span>Powders</span></h5>
                </div>
                <div className='div-flex-icons'>
                    <p>Share:</p>
                    <div className='social-icons'>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <InstagramIcon/>
                        <PinterestIcon/>
                </div>
                </div>
            </div>
            <div>
                
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;