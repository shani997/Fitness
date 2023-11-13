import Blog from '../component/Blog/Blog'
import { Carousel } from '../component'
import { cardObjTwo } from '../Data/BlogData';


function BlogPage() {
    return (
        <>
            <Blog {...cardObjTwo} />
            <Carousel />

        </>
    )
}
export default BlogPage