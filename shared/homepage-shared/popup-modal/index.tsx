import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Rating from "@mui/material/Rating";
import QuantityBox from '../quantity-box';
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

function PopupModal({ product }: { product: any }) {
    const [show, setShow] = useState(false);
    const [num, setNum] = useState<Array<number>>([]);

    const handlewWishList = (productIndex:number) => {
      if(num.indexOf(productIndex) === -1){
        setNum([...num, productIndex])
      } else {
        const filteredNumbers = num.filter(number => number !== productIndex);
        setNum(filteredNumbers)
      }
    }
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://i.ibb.co/tD0NsbC/gallery2.jpg',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://i.ibb.co/WcgVcH1/gallery1.jpg',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://i.ibb.co/Jqwsh63/gallery4.jpg',
        },
    ];

    return (
        <>
            <div className="circle-quickview" onClick={handleShow}>
                <VisibilityIcon className="quickview-icon" />
            </div>

            <Modal show={show} onHide={handleClose}>
                <div className='div-flex'>
                    <Modal.Body>
                        <ImageGallery items={product.images}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            slideInterval={1000}
                            // thumbnailPosition={"left"}
                            showThumbnails={false}
                        />
                    </Modal.Body>

                    <div className='product-right-modal'>
                        <div className='modal-gallery'>
                            <div className='product-top-modal'>
                                <h5>{product.name}</h5>
                            </div>
                        </div>
                        <div>
                            <div className="stars-rating">
                                <Rating
                                    className="stars"
                                    name="read-only"
                                    value={product.rating}
                                    readOnly
                                />
                                <span className="stars-count">(3)</span>
                            </div>
                            <div className="product-price">
                                <h5>$90.00</h5>
                            </div>
                            <div>
                                <p>Et aut non sit voluptatum. Commodi nobis et commodi nihil commodi sit. Debitis qui omnis accusantium accusantium ut rerum. Qui sint voluptas quaerat.</p>
                            </div>
                            <div className='div-flex-quantity'>
                                <QuantityBox />
                                <button className="hover-up">
                                    <span>ADD TO CART</span>
                                </button>
                            </div>
                            <div className='div-flex-icons'>
                            <FavoriteOutlinedIcon
                                onClick={() => {handlewWishList(product.id)}}
                                className={num.includes(product.id) ? "wishlist-icon-color" : "wishlist-icon"}
                                width={40}
                                height={40}
                                />
                            </div>
                            <p className='category'>Category: {product.category}</p>
                        </div>

                    </div>
                </div>

            </Modal>
        </>
    );
}

export default PopupModal;