import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import SquareIcon from '@mui/icons-material/Square';
import Image from "next/image";
import Header from '@/components/homepage-components/main-header';
import Footer from '@/shared/homepage-shared/footer';
import PaginationRounded from '@/shared/productpage-shared/pagination';
import LeftBlogContent from '@/shared/productpage-shared/left-blog-content';

const Blogs = () => {
  return (
    <div className='blogs'>      
        <Header wishlistCount='2'/>
        <div className='page-distribution-heading'>
        <Link href="/"><h6>Homepage</h6> </Link>
        <span><ArrowForwardIosIcon /></span>
        <h5>Blog</h5>
        </div>
    <div className='blog-content'>
        <LeftBlogContent/>
    <div className='right-blog-content'>
      <div className='right-blog-list'>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/WpXhXKp/b4.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/k8Z6KTn/b7.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/fnjvfQg/b6.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/WpXhXKp/b4.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/n6YjkJD/b5.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/fnjvfQg/b6.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/k8Z6KTn/b7.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/k8Z6KTn/b7.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/k8Z6KTn/b7.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <div className='blog-card'>
          <Image 
            alt="nutritrix"
            src="https://i.ibb.co/k8Z6KTn/b7.jpg"
            width={450}
            height={270}
            priority
          />
          <div className='tag-date'>
            <h5 className='tag-blog'>BUSINESS</h5>
            <h5 className='date-blog'>
            <SquareIcon className='square-icon' /> MARCH 18, 2023
            </h5>
          </div>
          <Link href='/blogs/blog-title'><h6>Denim Trends 2021 Take Kids Fashion To A Whole New Level</h6></Link>
      </div>
      <PaginationRounded/>

      </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Blogs