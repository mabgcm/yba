// import React, { useState, useEffect } from 'react';
// import { orderByChild } from 'firebase/database';
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { db } from '../firebase';
// import { excerpt } from "../utility";
// import { FaTrashAlt } from 'react-icons/fa';
// import { FaEdit } from 'react-icons/fa';


// const Searchresult = ({ blogs, user, handleDelete }) => {

    // const [data, setData] = useState({});

    // const userId = user?.uid;

    // const useQuery = () => {
    //     return new URLSearchParams(useLocation().search);
    // }

    // let query = useQuery();
    // let search = query.get('title');

    // console.log("search", search)
    // console.log(orderByChild('title'))

    // useEffect(() => {
    //     searchData();
    // }, [search])

    // const searchData = () => {
    //     db
    //         .child('blogs')
    //         .orderByChild('title')
    //         .equalTo(search)
    //         .on('value', (snapshot) => {
    //             if (snapshot.val()) {
    //                 const data = snapshot.val();
    //                 setData(data);
    //             }
    //         })
    // };




//     return (
//         <>
//             <div className="blog-heading text-start py-2 mb-4">Tablolar</div>
//             {blogs?.map((item) => (
//                 <div className="row pb-4" key={item.id}>
//                     <div className="col-md-5">
//                         <div className="hover-blogs-img">
//                             <div className="blogs-img">
//                                 <img src={item.imgUrl} alt={item.title} />
//                                 <div></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-7">
//                         <div className="text-start">
//                             <h6 className="category catg-color">{item.category}</h6>
//                             <span className="title py-2">{item.title}</span>
//                             <span className="meta-info">
//                                 <p className="author">{item.author}</p> -&nbsp;
//                                 {item.timestamp.toDate().toDateString()}
//                             </span>
//                         </div>
//                         <div className="short-description text-start">
//                             {excerpt(item.description, 120)}
//                         </div>
//                         <Link to={`/detail/${item.id}`}>
//                             <button className="btn btn-read">Detaylı İncele</button>
//                         </Link>
//                         {userId && item.userId === userId && (
//                             <div style={{ float: "right" }}>
//                                 <FaTrashAlt
//                                     name="trash"
//                                     style={{ margin: "15px", cursor: "pointer" }}
//                                     size="25px"
//                                     color='red'
//                                     onClick={() => handleDelete(item.id)}
//                                 />
//                                 <Link to={`/update/${item.id}`}>
//                                     <FaEdit
//                                         name="edit"
//                                         style={{ cursor: "pointer" }}
//                                         size="25px"
//                                         color='orange'
//                                     />
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default Searchresult