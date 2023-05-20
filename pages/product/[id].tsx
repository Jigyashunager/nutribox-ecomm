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
import Image from "next/image";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import Reviews from '@/shared/productpage-shared/review-section';
import SimilarProducts from '@/shared/productpage-shared/similar-products';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentDrawer from '@/components/mobilepage-components/bottom-drawer';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MobileReviewsSection from '@/components/mobilepage-components/mobile-review';

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
      <div className='desktop-single-product-page'>
        <div className='product-section-page'>
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
                <p><DoneIcon className='tick-icon' />Helps in Muscle Building</p>
                <p><DoneIcon className='tick-icon' />Generally Consumed With Water or Milk</p>
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
              <h4>Price: $90.00</h4>
              <h4 className='discounted-price'>MRP: $90.00</h4>
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
                <GpsFixedIcon className='gps-icon' />
                <p>Use my location</p>
              </div>
              <div className='product-weight'>
                <h5>Weight</h5>
                <div>
                  <button onClick={() => setWeight("KG")} className={weight === "KG" ? "div-color-right" : ""}>KG</button>
                  <button onClick={() => setWeight("LB")} className={weight === "LB" ? "div-color-left" : ""}>LB</button>
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
          <Reviews />
          <SimilarProducts />
        </div>
      </div>
      <div className='mobile-single-product-page'>
        <div className='select-delivery'>
          <h5><LocationOnIcon className='location-icon' /> Select delivery address <KeyboardArrowDownIcon className='down-arrow' /></h5>
        </div>
        <div className='page-distribution-heading'>
          <Link href="/"><h6>Homepage</h6> </Link>
          <span><ArrowForwardIosIcon /></span>
          <h6>Category</h6>
          <span><ArrowForwardIosIcon /></span>
          <h5>Product</h5>
        </div>
        <div className='mobile-single-product-page-slider'>
          <div className="main-mobile-slider">
            <Swiper
              modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={false}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="hero-image">
                  <Image
                    className="slider-image"
                    alt="nutritrix"
                    src={"/fatp.png"}
                    width={600}
                    height={600}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-image">
                  <Image
                    className="slider-image"
                    alt="nutritrix"
                    src={"/fatp.png"}
                    width={600}
                    height={600}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-image">
                  <Image
                    className="slider-image"
                    alt="nutritrix"
                    src={"/fatp.png"}
                    width={600}
                    height={600}
                    priority
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-image">
                  <Image
                    className="slider-image"
                    alt="nutritrix"
                    src={"/fatp.png"}
                    width={600}
                    height={600}
                    priority
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='product-single-page'>
          <div className='category-flex'>
            <h6 className='category'>Whey Protiens</h6>
            <p className='in-stock'>IN STOCK</p>
          </div>
          <h4 className='product-title'>MB Fuel One Whey Protien, 2kg (4.4 lb), Chocolate</h4>
          <div className="stars-rating">
            <h5 className='product-by'>By <span>MB Fuel One<ArrowForwardIosIcon /></span></h5>

            <div >
              <Rating
                className="stars"
                name="read-only"
                value={value}
                readOnly
              />
              <span className="stars-count">(3 reviews)</span>
            </div>
          </div>
          <h5 className='price'>Price: <span>$300</span><span className='discounted-percent'>25% off</span></h5>
          <h5 className='discounted-price'>MRP: <span>$500</span><span className='discounted-text'>Inclusive of all taxes</span></h5>
          <h5 className='premium-text'><LocalOfferIcon className='offer-icon' /> $250 for Premium Member <ArrowForwardIosIcon /></h5>
        </div>
        <div className='gray-space'></div>
        <h5 className='interest-free'>3 interest free payments of $50 with our partner services</h5>
        <div className='gray-space'></div>
        <div className='select-variant-mobile'>
          <h5>Select Variant</h5>
          <ContentDrawer openName="weight" anchor="bottom" />
          <ContentDrawer openName="flavour" anchor="bottom" />
        </div>
        <div className='gray-space'></div>
        <div className='delviery-pdp'>
          <h5>Delivery & Services</h5>
          <div className='div-flex'>
            <input
              type="text"
              name="PINCODE"
              placeholder="Enter Pincode"
              className="pincode-input"
            />
            <button>Check</button>
          </div>
          <p className='location'><span><MyLocationIcon className='location-icon' /></span> Use my location</p>
          <p><span><LocalShippingIcon className='location-icon' /></span> Free Shipping</p>
          <p><span><MonetizationOnIcon className='location-icon' /></span> Cash on Delivery Available</p>
          <p><span><AssignmentReturnIcon className='location-icon' /></span> 14 days return policy</p>
        </div>
        <div className='gray-space'></div>
        <div className='special-offers'>
          <h5>Special Offers</h5>

          <ul>
            <li>
              <Image
                alt="nutritrix"
                src="https://i.ibb.co/rxr8v23/icici.jpg"
                width={1300}
                height={150}
                priority
              />
              <p>Flat Rs.200 Cashback On Min. Order Of Rs.2000 For First Time Users Of Airtel Payments Bank On HealthKart. Offer Valid Till 30th April 2023 <span>T&C.</span></p>
            </li>
            <li>
              <Image
                alt="nutritrix"
                src="https://i.ibb.co/Bwb2b11/airtel.png"
                width={600}
                height={150}
                priority
              />
              <p>Pay Using ICICI Net banking and get flat 300 Rs HK cashback <span>T&C.</span></p>
            </li>
          </ul>
        </div>
        <div className='gray-space'></div>
        <div className='mobile-product-page-combo'>
          <div className='combo-header'>
            <p>Combo <span>1</span></p>
            <p>Combo <span>2</span></p>
            <p>Combo <span>3</span></p>
            <p>Combo <span>4</span></p>
            <p>Combo <span>5</span></p>
            <p>Combo <span>6</span></p>
            <p>Combo <span>7</span></p>
            <p>Combo <span>8</span></p>
            <p>Combo <span>9</span></p>
            <p>Combo <span>10</span></p>
          </div>
        </div>
        <div className='combo-products'>
          <div className='product-flex'>
            <Image
              alt="nutritrix"
              src={"/fatp.png"}
              width={400}
              height={400}
              priority
            />
            <div>
              <h5>MuscleBlaze Biozyme Performance Whey, 4.4lb...</h5>
              <h6>$300 <span className='discounted-price'>$500</span> <span className='discounted-percent'>25% OFF</span></h6>
            </div>
          </div>
          <div className='plus '><p className='text-8xl'>+</p></div>
          <div className='product-flex'>
            <Image
              alt="nutritrix"
              src={"/fatp.png"}
              width={400}
              height={400}
              priority
            />
            <div>
              <h5>MuscleBlaze Biozyme Performance Whey, 4.4lb...</h5>
              <h6>$300 <span className='discounted-price'>$500</span> <span className='discounted-percent'>25% OFF</span></h6>
            </div>
          </div>
          <div className='gray-line'></div>
          <div className='combo-flex'>
            <div>
              <h5>Total Price</h5>
              <h4><span>Save extra $40</span> on this combo</h4>
            </div>
            <div>
              <h5>$350</h5>
              <span className='discounted-price'>$500</span>
            </div>
          </div>
          <button className='add-to-cart'>Add To Cart</button>
          <div className='gray-space'></div>
          <div className='mobile-product-page-combo'>
            <div className='combo-header'>
              <p>Overview</p>
              <p>Details</p>
              <p>Information</p>
              <p>Other Information </p>
            </div>
          </div>

        </div>
        <div className='overview'>
          <div>
            <h5>Overview</h5>
            <div className='overview-box'>
              <div className='div-flex-contents'>
                <div>
                  <h6>25g</h6>
                  <p>Protien</p>
                </div>
                <div className='horizontal-line'></div>
                <div>
                  <h6>5.51g</h6>
                  <p>BCAA</p>
                </div>
                <div className='horizontal-line'></div>
                <div>
                  <h6>11.75g</h6>
                  <p>EAA</p>
                </div>
                <div className='horizontal-line'></div>
                <div>
                  <h6>4.38g</h6>
                  <p>Glumatic Acid</p>
                </div>
              </div>
              <div className='product-benefits'>
                <h6>Product Benefits</h6>
                <h6><DoneIcon />Helps in muscle building</h6>
                <p>Per 36gm of 56 servings Contains</p>
              </div>
            </div>
          </div>
        </div>
        <div className='gray-space'></div>
        <div className='details'>
          <h5>
            Details
          </h5>
          <div className='details-box'>
            <h6>
              About the product
            </h6>
            <ul>
              <li>
                <p>MuscleBlaze Pre-Workout 200 Xtreme is a potent Pre-Workout formula that is crafted to let your body prepare itself for intense workouts. In just a single serving of this product, you’ll feel energized and focused enough to perform heavy-duty exercises. This Pre-Workout fuel is packed with 200mg Caffeine + 200mg Theanine to to give you instant and sustained release of energy.</p>
              </li>
              <li>
                <p>This powerful Pre-Workout aid is enriched with L-citrulline to enhance pump and Beta Alanine to add to the endurance. It is available in exhilarating Fruit Punch flavour to let you have a refreshing experience before workouts.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='gray-space'></div>
        <div className='product-information'>
          <h5> Product Information </h5>
          <div className='product-information-box'>
            <h6>General Traits</h6>
            <div className='traits-flex'>
              <p>Weight</p>
              <p>4.4 lb</p>
            </div>
            <div className='traits-flex'>
              <p>Weigt(kg)</p>
              <p>2.0</p>
            </div>
            <div className='traits-flex'>
              <p>Protein % per sharing</p>
              <p>69.0</p>
            </div>
            <div className='traits-flex'>
              <p>Price per kg</p>
              <p>2049.5</p>
            </div>
            <div className='traits-flex'>
              <p>Number of Servings</p>
              <p>56</p>
            </div>
            <div className='traits-flex'>
              <p>Serving Size</p>
              <p>36 g</p>
            </div>
            <div className='traits-flex'>
              <p>Protein per Serving</p>
              <p>25 g</p>
            </div>
            <div className='supplement-info'>
              <h6>Supplement info</h6>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        <div className='gray-space'></div>
        <div className='other-info'>
          <h5>Other Information</h5>
          <div className='other-info-box'>
            <h6>Biozyme Performance Whey-Recognized by the World!</h6>
            <p>
              HealthKart brings you a new trustable biotin supplement, HealthKart HK Vitals Biotin 60 tablets, which enhances hair, skin and nail health. It gets made up of premium-quality biotin extracted from organic and enriched corn leaves. It has also received a safety-verified certificate.

              The biotin is also known as vitamin H or B7. It is a part of the B-complex group of vitamins. This water-soluble vitamin promotes the strengthening of hair, hair growth, and skin repair and provides natural oils to the skin. It breaks down the fats, carbohydrates, and proteins in the food and turns them into energy.
            </p>

          </div>

        </div>
        <div className='gray-space'></div>
        <h6 className='ranked'>Ranked: #1 in Whey Proteins, #1 in Proteins & #1 in Sports Nutrition</h6>
        <div className='gray-space'></div>

        <div className='mobile-review'>
              <MobileReviewsSection/>
        </div>
      </div>
    </>
  );
}

export default Product;