import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import Image from "next/image";

const Bestsellers = () => {
    return (
        <div>
            <div className='page-distribution-heading'>
                <Link href="/"><h6>Homepage</h6> </Link>
                <span><ArrowForwardIosIcon /></span>
                <Link href="/bestsellers"><h6>Bestsellers</h6></Link>
            </div>
            <div className='bestseller-grid'>
                <div>
                    <Image src="https://i.ibb.co/ZHxd3k1/whey2kg.png" width={600} height={600} alt="whey2kg"/>
                    <h5>Whey Protiens</h5>
                </div>
                <div>
                    <Image src="https://i.ibb.co/3Rvvyg7/mass.webp" width={600} height={600} alt="whey2kg"/>
                    <h5>Mass Gainers</h5>
                </div>
                <div>
                    <Image src="https://i.ibb.co/ZHxd3k1/whey2kg.png" width={600} height={600} alt="whey2kg"/>
                    <h5>Whey Protiens</h5>
                </div>
                <div>
                    <Image src="https://i.ibb.co/ZHxd3k1/whey2kg.png" width={600} height={600} alt="whey2kg"/>
                    <h5>Whey Protiens</h5>
                </div>
                <div>
                    <Image src="https://i.ibb.co/ZHxd3k1/whey2kg.png" width={600} height={600} alt="whey2kg"/>
                    <h5>Whey Protiens</h5>
                </div>
                <div>
                    <Image src="https://i.ibb.co/ZHxd3k1/whey2kg.png" width={600} height={600} alt="whey2kg"/>
                    <h5>Whey Protiens</h5>
                </div>
                <div>
                    <Image src="https://i.ibb.co/ZHxd3k1/whey2kg.png" width={600} height={600} alt="whey2kg"/>
                    <h5>Whey Protiens</h5>
                </div>
                <div>
                    <Image src="https://i.ibb.co/ZHxd3k1/whey2kg.png" width={600} height={600} alt="whey2kg"/>
                    <h5>Whey Protiens</h5>
                </div>
            </div>
        </div>
    )
}

export default Bestsellers;