export const typeDefs = `#graphql
  type Game = {
  id:ID!
  title:string!
  platform:string!}


  type Review = {
  Id:ID!
  title:string!
  content:string!
  }

  type Author = {
  id:ID!
  name:string!
  verified:boolean!}

  type Query {
  reviews:[Review]
  games:[Game]
  authors:[Author]
  }
` 