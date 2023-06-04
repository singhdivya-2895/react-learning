import { useEffect, useState } from "react";
import { CommentsList } from "./CommentsList";

interface Posts {
    userId: number,
    id: number,
    title: string,
    body: string
}
export const PostComponent = (() => {
    const [list, setList] = useState<Posts[]>();
    const [postId, setPostId] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const jsonData: Posts[] = await response.json();
                setList(jsonData)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const handleChange = ((event: any) => {
        setPostId(event.target.value);
    });
    return (<>
        <h1>Post Lists with comments</h1>
        <div className="row">
            <div className="col-md-6 form-group">
                {list && <select id="todos" onChange={handleChange} className="form-control">
                    <option value="-1"></option>
                    {list?.map((item) => (<option key={item.id} value={item.id}>{item.title}</option>))}
                </select>}
            </div>
            <CommentsList postId={postId} />
        </div>
    </>
    )
});



