import Header from '@/components/homepage-components/main-header'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import LeftBlogContent from '@/shared/productpage-shared/left-blog-content';
import SquareIcon from '@mui/icons-material/Square';
import Image from "next/image";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import Footer from '@/shared/homepage-shared/footer';
import BlogForm from '@/shared/productpage-shared/blog-form';

const SingleBlog = () => {
    return (
        <div>
            <div className='page-distribution-heading'>
                <Link href="/"><h6>Homepage</h6> </Link>
                <span><ArrowForwardIosIcon /></span>
                <Link href="/blogs"><h6>Blog</h6></Link>
                <span><ArrowForwardIosIcon /></span>
                <h5>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h5>
            </div>
            <div className='single-blog'>
                <div className='blogs'>
                    <LeftBlogContent />
                </div>
                <div className='right-content-single-blog'>
                    <div className='tag-date'>
                        <h5 className='tag-blog'>BUSINESS</h5>
                        <h5 className='date-blog'>
                            <SquareIcon className='square-icon' /> MARCH 18, 2023
                        </h5>
                    </div>
                    <div className='right-blog-start'>
                        <h1 className='main-blog-heading'>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h1>
                        <Image
                            alt="nutritrix"
                            src="https://i.ibb.co/WpXhXKp/b4.jpg"
                            width={850}
                            height={450}
                            priority
                            className='main-blog-image'
                        />
                        <div className='blog-para'>
                            Denim has been a fashion staple for decades, and in 2021, fashion to a whole new level. From classic denim jeans to modern denim jackets and dresses, denim is a versatile fabric that can be dressed up or down, making it perfect for kids of all ages.
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <h5 className='quote'><FormatQuoteOutlinedIcon /> A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be</h5>
                            <p className='quote-author'>-ABRAHAM MASLOW</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className='inside-blog-images'>
                                <Image
                                    alt="nutritrix"
                                    src="https://i.ibb.co/Ykrfbb3/blogI2.jpg"
                                    width={440}
                                    height={300}
                                    priority
                                    className='inside-blog-image-1'
                                />
                                <Image
                                    alt="nutritrix"
                                    src="https://i.ibb.co/T8WLDXL/blogI1.jpg"
                                    width={440}
                                    height={300}
                                    priority
                                    className='inside-blog-image-2'
                                />
                                <p>
                                    <ul className='pointers'>
                                        <li>So we came up with the idea that instead of limiting the lab to a restricted area of ​​the building</li>
                                        <li>We make it quick, easy and convenient for scheduling to save time</li>
                                        <li>Our promise is to be respectful of you and your home as if it were our own</li>
                                        <li>We stand behind our work with a one-year guarantee on all labor</li>
                                    </ul>
                                </p>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </p>
                            </div>
                        </div>
                        <div className='tags-flex'>
                            <p>Energy</p>
                            <p>Fitness</p>
                            <p>Healthy</p>
                            <p>Nutrition</p>
                            <p>Powders</p>
                        </div>
                        <div className='author-box'>
                            <div>
                                <AccountBoxIcon className='author-image' />
                            </div>
                            <div>
                                <h5 className='about-author-heading'>ABOUT AUTHOR</h5>
                                <p>Dolor morbi non arcu risus quis varius. Sit amet est placerat in egestas erat imperdiet. Et magnis dis parturient montes nascetur. Egestas pretium aenean pharetra magna ac placerat vestibulum.</p>
                            </div>
                        </div>
                        <div className='next-prev-blog'>
                            <div className='prev-blog'>
                                <Image
                                    alt="nutritrix"
                                    src="https://i.ibb.co/n6YjkJD/b5.jpg"
                                    width={120}
                                    height={80}
                                    priority
                                    className='main-blog-image'
                                />
                                <div className='prev-title'>
                                    <h6><ArrowBackIosNewIcon /> PREV</h6>
                                    <h5>Honor Earth Day Fourth Annual Ladybug Love Campaign</h5>
                                </div>
                            </div>
                            <div className='next-blog'>
                                <div className='next-title'>
                                    <h6> NEXT<ArrowForwardIosIcon /></h6>
                                    <h5>Honor Earth Day Fourth Annual Ladybug Love Campaign</h5>
                                </div>
                                <Image
                                    alt="nutritrix"
                                    src="https://i.ibb.co/WpXhXKp/b4.jpg"
                                    width={120}
                                    height={80}
                                    priority
                                    className='main-blog-image'
                                />
                            </div>

                        </div>
                    </div>
                    <div className='comments'>
                        <h5 className='num-comments'>3 Commments</h5>
                        <div>
                            <ul className='comments-main-list'>
                                <li>
                                    <div className='comment-content'>
                                        <AccountCircleRoundedIcon className='person-comment-icon' />
                                        <div className='comment-inner-text'>
                                            <div>
                                                <h5>Mike</h5>
                                                <h6>June 8, 2023</h6>
                                                <p>It would be great to try this theme for my businesses</p>
                                            </div>
                                            <div>
                                                <button><ReplyRoundedIcon />Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='comments-inner-list'>
                                        <li>
                                            <div className='comment-content'>
                                                <AccountCircleRoundedIcon className='person-comment-icon' />
                                                <div className='comment-inner-text'>
                                                    <div>
                                                        <h5>Mike</h5>
                                                        <h6>June 8, 2023</h6>
                                                        <p>It would be great to try this theme for my businesses</p>
                                                    </div>
                                                    <div>
                                                        <button><ReplyRoundedIcon />Reply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className='comment-content'>
                                        <AccountCircleRoundedIcon className='person-comment-icon' />
                                        <div className='comment-inner-text'>
                                            <div>
                                                <h5>Mike</h5>
                                                <h6>June 8, 2023</h6>
                                                <p>It would be great to try this theme for my businesses</p>
                                            </div>
                                            <div>
                                                <button><ReplyRoundedIcon />Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <BlogForm/>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog