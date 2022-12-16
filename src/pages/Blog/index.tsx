import { Post } from "./componentes/Post";
import { Profile } from "./componentes/Profile/indes";
import { SearchInput } from "./componentes/SearchInput";
import { PostListContainer } from "./styles";

export function Blog() {
    return (
        <>
            <Profile />
            <SearchInput />
            <PostListContainer>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </PostListContainer>
        </>
    )
}