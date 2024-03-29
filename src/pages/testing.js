import React from 'react'
import Layout from '../components/Layout'
import {Link, graphql} from 'gatsby';

export default function TestingPage({data}){
  const posts = data.allPost.nodes;
  return(
    <Layout>
      <h1>I am posts page</h1>
      <ul>
      {
       posts.map(post =>
        <li key={post.id}>
         <Link to="/">{post.title}</Link>
        </li>
        )
      }
      </ul>
    </Layout>

  )
}

export const query = graphql`
   query AllPost {
    allPost{
      nodes{
        body
        id
        title
      }
     
    }
   }
`;

