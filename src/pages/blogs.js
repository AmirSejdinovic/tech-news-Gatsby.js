import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function Blogs({data}){

  console.log(data.allFile.nodes)
  return(
    <Layout>
      <ul>
      {
       data.allFile.nodes.map(node =>
         <li key={node.relativePath}>
           <p>{node.relativePath}</p>
           <p>{node.ext}</p>
           <p>{node.birthTime}</p>
           <p>{node.prettySize}</p>
         </li>
        )
      }
      </ul>
    </Layout>
  )
}

//AllFile
export const query = graphql`
  query{
    allFile {
      nodes {
        id
        ext
        relativePath
        birthTime(fromNow: true)
        prettySize
      }
    }
  }
`