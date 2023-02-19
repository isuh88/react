import { Link } from "react-router-dom";

export const SmallPost = ({post}) => {
    return (
        <div  className="relative group mr-16 border-2 border-white hover:bg-orange-400 hover:text-black hover:border-0 hover:ring-8 hover:ring-orange-200 rounded-xl font-medium">
            <Link to={`/${post.id}`} className="block py-10 px-8 h-60">
                <h1 className="font-extrabold text-2xl">{post.title}</h1>
                <p className="mt-2">{post.summary}</p>
                <div className="flex mt-5">
                    <span className="tag mr-2">#tag1</span>
                    <br />
                    <span className="tag mr-2">#tag2</span>
                    <br />
                    <span className="tag">#tag2</span>
                    <br />
                </div>
                <div className="absolute bottom-0 right-0 bg-orange-400 px-5 py-2 rounded-lg translate-x-5 translate-y-5">
                    <span className="uppercase">detail</span>
                </div>
            </Link>
        </div>
    )
};

export const BigPost = ({post}) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div>
                <span>#tag1</span>
                <br />
                <span>#tag2</span>
                <br />
                <span>#tag2</span>
                <br />
            </div>
        </div>
    )
};
