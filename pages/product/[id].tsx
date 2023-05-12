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
import SquareIcon from '@mui/icons-material/Square';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
import Image from "next/image";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import DoneIcon from '@mui/icons-material/Done';
import Reviews from '@/shared/productpage-shared/review-section';
import SimilarProducts from '@/shared/productpage-shared/similar-products';

function Product({ product }: { product: any }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(3)
  const [selected, setSelected] = useState<string>("");
  const [defaultValue, setDefaultValue] = useState<boolean>(true);
  const [weight, setWeight] = useState<string>("");

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
    <div className='product-section-page'>
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
          <div className='product-benefits'>
            <h6>Product Benefits</h6>
            <p><DoneIcon className='tick-icon'/>Helps in Muscle Building</p>
            <p><DoneIcon className='tick-icon'/>Generally Consumed With Water or Milk</p>
            <div className='product-benefits-flex'>
              <div>
                <h6>Protein</h6>
                 <p> 24 g </p>
              </div>
              <div>
                <h6>Protein % per Serving</h6>
                 <p> 79.0 </p>
              </div>
              <div>
                <h6>Kcal</h6>
                 <p> 117 </p>
              </div>
            </div>
          </div>
        </div>
        <div className='product-page-info'>
          <div className='div-flex-top'>
            <div className='category-tags'>
              <h5>Category: <span>Apparel</span></h5>
              <h5>Tag: <span>Powders</span></h5>
            </div>
            <p className='in-stock'>IN STOCK</p>
          </div>

          <h6 className='product-heading'>Naturally Flavored Gold Standard 100% Whey</h6>
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
          {/* <p className='num-in-stock'>
                  <span><SentimentSatisfiedSharpIcon/></span>
                  50 in stock(can be back ordered)
                </p> */}
          <p>Sold: <span>30/62</span></p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className='div-flex-buttons'>
            <QuantityBox handleBundleTotal={handleBundleTotal} price='' />
            <button className="hover-up">
              <span>ADD TO CART</span>
            </button>
            <FavoriteOutlinedIcon
              className={"wishlist-icon"}
              width={60}
              height={60}
            />
            <p onClick={() => { handlewWishList }} className='browse'>Browse Wishlist</p>
          </div>
                
        <div className='delviery-pdp'>
              <input
                type="text"
                name="PINCODE"
                placeholder="Enter Pincode"
                className="pincode-input"
                />
                <button>Check</button>    
                <GpsFixedIcon className='gps-icon'/> 
                <p>Use my location</p>
        </div>
          <div className='product-weight'>
            <h5>Weight</h5>
            <div>
            <button onClick={() => setWeight("KG")} className={weight === "KG" ? "div-color-right": ""}>KG</button>
            <button onClick={() => setWeight("LB")} className={weight === "LB" ? "div-color-left": ""}>LB</button>
            </div>
          </div>
          <div className='weights-flex'>
            <button>
              <h6>2 Lb</h6>
              <p>₹3431</p>
            </button>
            <button>
              <h6>1 Lb</h6>
              <p>₹1802</p>
            </button>
            <button>
              <h6>3.74 Lb</h6>
              <p>₹5807</p>
            </button>
            <button>
              <h6>5 Lb</h6>
              <p>₹7126</p>
            </button>
            <button>
              <h6>2 Sachets/pack</h6>
              <p>₹704</p>
            </button>
          </div>
          <div className='flavour'>
            <h5>Flavour</h5>
            <div className='weights-flex'>
            <button>
              <h6>Double Rich Chocolate</h6>
            </button>
            <button>
              <h6>Banana Cream</h6>
            </button>
            <button>
              <h6>Chocolate Malt</h6>
            </button>
            <button>
              <h6>Coffee</h6>
            </button>
            <button>
              <h6>Cookies & Cream</h6>
            </button>
          </div>
          </div>
          <div className='special-offers'>
                <h5>Special Offers</h5>
                <h6>With these offers and coupons</h6>
                  <ul>
                    <li>
                      <Image
                      alt="nutritrix"
                      src="https://i.ibb.co/rxr8v23/icici.jpg"
                      width={80}
                      height={25}
                      priority
                    />
                    <p>Flat Rs.200 Cashback On Min. Order Of Rs.2000 For First Time Users Of Airtel Payments Bank On HealthKart. Offer Valid Till 30th April 2023 <span>T&C.</span></p>
                    </li>
                    <li>
                      <Image
                      alt="nutritrix"
                      src="https://i.ibb.co/Bwb2b11/airtel.png"
                      width={80}
                      height={15}
                      priority
                    />
                    <p>Pay Using ICICI Net banking and get flat 300 Rs HK cashback <span>T&C.</span></p>

                    </li>
                  </ul>
        </div>
          <div className='div-flex-icons'>
            <p>Share:</p>
            <div className='social-icons'>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div>
  

        </div>
      </div>
      <div className='product-headings-lower'>
        <div className='div-flex-info'>
          <h5
            className={
              defaultValue || selected === "default"
                ? "selected-heading"
                : ""
            }
            onClick={() => setSelected("default")}
          >
            PRODUCT DETAILS
          </h5>
          <h5
            className={selected === "additional" ? "selected-heading" : ""}
            onClick={() => {
              setSelected("additional");
              setDefaultValue(false);
            }}
          >
            <SquareIcon className='square-icon' />ADDITIONAL INFORMATION
          </h5>
          <h5
            className={selected === "QA" ? "selected-heading" : ""}
            onClick={() => {
              setSelected("QA");
              setDefaultValue(false);
            }}
          >
            <SquareIcon className='square-icon' />FAQs
          </h5>
        </div>
      </div>
      <div className='product-content-lower'>
        {defaultValue || selected === "default" ?
          <div className='description-content'>
            <p>Ullam maiores autem culpa sint est magni est sit. Accusamus ut tenetur et accusamus aperiam ipsum velit. Voluptatem dolor laboriosam veniam iure autem mollitia ut. Quis ut consectetur officiis ullam vel.</p>
            <p>Ullam maiores autem culpa sint est magni est sit. Accusamus ut tenetur et accusamus aperiam ipsum velit. Voluptatem dolor laboriosam veniam iure autem mollitia ut. Quis ut consectetur officiis ullam vel.</p>
            <p>Ullam maiores autem culpa sint est magni est sit. Accusamus ut tenetur et accusamus aperiam ipsum velit. Voluptatem dolor laboriosam veniam iure autem mollitia ut. Quis ut consectetur officiis ullam vel.</p>
          </div> : ""}
        {selected === "additional" ? <div className='add-info-content'>
          <table>
            <tr>
              <th>Weight</th>
              <td>176 kg</td>
            </tr>
            <tr>
              <th>Dimensions</th>
              <td>119 × 150 × 28 cm</td>
            </tr>
          </table>
        </div> : ""}
        {selected === "QA" ?
          <div className='faq-product-section'>
            <h5 className='faq-heading'>FAQs Related to Gold Standard Whey Double Rich Chocolate 2 lbs</h5>
            <h6 className='faq-ques'>Q1: Is ON Gold Standard Double Rich Chocolate available in other flavours?</h6>
            <p className='faq-ans'>Ans: Yes, Optimum Nutrition whey protein is available in different flavours. One can choose between 12 flavour options including double-rich chocolate. These are Banana Cream, Chocolate Malt, Coffee, Cookies & Cream, Delicious Strawberry, Extreme Milk Chocolate, French Vanilla Cream, Mocha Cappuccino, Rocky Road, Vanilla Ice Cream, And unflavoured.</p>

            <h6 className='faq-ques'>Q2: What is the cost of 2 lbs ON Whey Protein Double Rich Chocolate powder?</h6>
            <p className='faq-ans'>Ans: 2 lbs ON Whey Protein Double Rich Chocolate powder costs Rs. 3900. However, schemes, discounts and offers are available to make the whey powder affordable.</p>

            <h6 className='faq-ques'>Q3: What is the protein per serving in ON Gold Standard Double Rich Chocolate?</h6>
            <p className='faq-ans'>Ans: ON Gold Standard 2lbs Double Rich Chocolate has a protein per serving percentage of 79%.</p>

            <h6 className='faq-ques'>Q4: How much protein will ON Gold Standard Double Rich Chocolate 2lbs deliver?</h6>
            <p className='faq-ans'>Ans: ON Gold Standard Double Rich Chocolate 2lbs  contains 24 gm of pure high-quality protein. It has 11 gm of EAAs, 5.5 gm of BCAAs and 4 gm of naturally occurring Glutamine and Glutamic Acid.</p>

            <h6 className='faq-ques'>Q5: Why use ON Gold Standard Double Rich Chocolate 2lbs whey protein?</h6>
            <p className='faq-ans'>Ans: Whey protein can help increase results from regular exercise. Optimum Nutrition Whey protein delivers 24 gm of high-quality protein to help build muscle and increase strength.</p>
          </div>
          : ""}
      </div>
      <Reviews/>
      <SimilarProducts/>
      <Footer />
      </div>
    </>
  );
}

export default Product;