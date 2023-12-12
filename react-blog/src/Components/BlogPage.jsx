import React, { useEffect, useState } from 'react'
import blogsData from '../assets/blogsData.json';
import BlogCard from './BlogCard';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        setBlogs(blogsData.slice(0,12))
    }, [])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setActiveCategory(category);
        setCurrentPage(1);
        console.log(category)
    }

    return (
        <div>
            {/* category */}
            <div>
                <CategorySelection onSelectedCategory={handleCategoryChange} activeCategory={activeCategory} />
            </div>

            {/* blog card */}
            <div className='flex lg:flex-row flex-col gap-12'>
                {/* <BlogCard /> */}
                <BlogCard blogs={blogs} />

                <SideBar />
            </div>

            {/* blog pagination */}
            <div>
                pagination
            </div>
        </div>
    )
}

export default BlogPage

