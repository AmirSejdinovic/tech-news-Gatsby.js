const axios = require("axios");

exports.createPages = async ({actions: {createPage}}) =>{
//fetch data 
//unstructurized data
const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
const posts = res.data

 createPage({
   path: "/posts",
   component: require.resolve("./src/templates/posts.js"),
   context: {posts}
 })
}

exports.sourceNodes = async ({actions, createNodeId, createContentDigest})  =>{
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const posts = res.data

   posts.forEach(post=>{
     const node = {
       title: post.title,
       body: post.body,
       //The node ID must be globally unique
       id: createNodeId(`Post-${post.id}`),
       //ID to the parent Node
       parent: null,
       //ID of chidlern Nodes
       children: [],
       //Internal fields are not usualy interesting for consumers
      //but are very important for Gatsby core
       internal: {
         //globally unique node type
          type: "Post",
          //"Hash" or short digital summary of this node
          contentDigest: createContentDigest(post),
          //Content exposing raw content of this node
          content: JSON.stringify(post)      
       }
     }
     actions.createNode(node);
   })
}
