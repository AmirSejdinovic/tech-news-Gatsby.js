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

exports.createSchemaCustomization = ({actions}) =>{
   const {createTypes} = actions
   const typeDefs = `
   

    type PostJson{
      id: ID
      title: String
      body: String
      
      
    }
   `

   createTypes(typeDefs)
}


exports.createResolvers=({createResolvers})=>{
    const resolvers ={
      Query: {
        allPost:{
          type: ["PostJson"],
          args: {
            filter: "String",
            limit: "Int"
          },
          async resolve(){
           
           const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
           const posts = res.data
           
          return posts;
          
          }
        }
      }
     
    }
    createResolvers(resolvers);
}