import { useGetPostQuery } from '../features/apiThunk/RTKUserApi';

function Post() {
    const { data: posts, error, isLoading } = useGetPostQuery();

    return (
        <div>
            <h2>Post</h2>
            {isLoading && <p>Loading...</p>}
            {(error) && <p>Error loading users!</p>}
            {posts && (<ul>
                {
                    posts.map((post) => <li key={post.id}>{post.title}</li>)
                }
            </ul>)}
        </div>
    )
}

export default Post
