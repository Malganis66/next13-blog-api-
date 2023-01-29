import Image from 'next/image'
const fetchComments = async(id) => {
await new Promise(resolve => setTimeout(resolve, 3000))
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    }).then((res) =>
      res.json()
    );
  };

export default async({params})=>{
    const {id} = params
    const comments = await fetchComments(id)
    
    return (
        <ul style={{background: '#444', fontSize: '13px', padding: '6px'}}>
            {comments.map(comment =>{
                return <li key={comment.id}>
                <Image width={50} height={50} alt={comment.name} src={`https://unavatar.io/${comment.email}`} />
                <h4>{comment.name}</h4>
                <small>{comment.body}</small>
            </li>
            })}
        </ul>
    )
}