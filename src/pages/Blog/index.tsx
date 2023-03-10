import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { Post } from "./componentes/Post";
import { Profile } from "./componentes/Profile/indes";
import { SearchInput } from "./componentes/SearchInput";
import { PostListContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
        login: string;
    }
}

export function Blog() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsloading] = useState(true)

    const getPosts = useCallback(async (query: string = "") => {
        try {
            setIsloading(true);
            const response = await api.get(
                `/search/issues?q=${query}%20repo:${username}/${repoName}`
            );
                            
                setPosts(response.data.items);
        } finally {
            setIsloading(false);
        }
    }, [posts]);

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Profile />
            <SearchInput postsLength={posts.length} getPosts={getPosts} />
            {isLoading ? (
                <Spinner />
            ) :
                (
                    <PostListContainer>
                        {posts.map((post) => (
                            <Post key={post.number} post={post} />
                        ))}
               
                    </PostListContainer>
                )
            }
        </>
    )
}