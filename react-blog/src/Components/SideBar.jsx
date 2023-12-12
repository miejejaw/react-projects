import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import blogsData from '../assets/blogsData.json';


const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        setPopularBlogs(blogsData.slice(0, 5))
    }, [])

    return (
        <div>
            <div className='px-4'>
                <h3 className='text-2xl font-semibold'>Latest Blogs</h3>
                <div>
                    {
                        popularBlogs.map((blog) =>
                            <div className='my-5 border-b-2 border-spacing-2'>
                                <h4 className='font-medium mb-2'>{blog.title}</h4>
                                <Link className='font-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>Read more
                                    <FaArrowRight className='mt-1 ml-2' />
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* popular blogs */}
            <div className='px-4 mt-8'>
                <h3 className='text-2xl font-semibold'>Popular Blogs</h3>
                <div>
                    {
                        popularBlogs.map((blog) =>
                            <div className='my-5 border-b-2 border-spacing-2'>
                                <h4 className='font-medium mb-2'>{blog.title}</h4>
                                <Link className='font-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>Read more
                                    <FaArrowRight className='mt-1 ml-2' />
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar