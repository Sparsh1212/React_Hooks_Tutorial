import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingHooks = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(fetchData, []);

  return (
    <React.Fragment>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default DataFetchingHooks;
