import React, { useEffect, useState } from "react";

interface CommentDto {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
interface ParentProps {
    postId: number;
}

export const CommentsList = React.memo(({ postId }: ParentProps): JSX.Element => {
    const [commentList, setCommentList] = useState<CommentDto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                const jsonData: CommentDto[] = await response.json();
                setCommentList(jsonData);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, [postId]);

    return (<div>
        <h2>Comments:</h2>
        {commentList.length === 0 && <h3>No Comments avaliable</h3>}
        {commentList.length > 0 &&
            <ul className="list-group">
                {commentList?.map((item) => (
                    <li className="list-group-item" key={item.id}>{item.body}</li>
                    // <li key="1">Item 1</li>
                ))}
            </ul>
        }
    </div>
    )
});