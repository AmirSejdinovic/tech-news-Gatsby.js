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