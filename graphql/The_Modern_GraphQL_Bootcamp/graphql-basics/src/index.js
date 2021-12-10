import { GraphQLServer } from "graphql-yoga";

const users = [
  {
    id: "123",
    name: "Jay",
    email: "hello@gmail.com",
    age: 30,
  },
  {
    id: "000",
    name: "Kevin",
    email: "K@gmail.com",
    age: 20,
  },
  {
    id: "234",
    name: "Brandon",
    email: "B@gmail.com",
  },
];

const posts = [
  {
    id: "10",
    title: "graphql",
    body: "very fun to learn",
    published: true,
    author: "123",
  },
  {
    id: "11",
    title: "graphql12",
    body: "very fun to play",
    published: true,
    author: "000",
  },
  {
    id: "12",
    title: "graphql123",
    body: "very fun to dance",
    published: true,
    author: "000",
  },
];

//Type definition (schema)
const typeDefs = `
  type Query {
   users(query: String): [User!]!
   posts(query: String): [Post!]!
   me: User!
   post: Post!
  }

  type User {
      id: ID!
      name: String!
      email: String!
      age: Int
  }

  type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
      author: User!
  }
`;
//Resolver
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      console.log(args);

      if (!args.query) {
        return users;
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    me() {
      return {
        id: "jayjay",
        name: "Jay Kim",
        email: "mearak@gmail.com",
      };
    },
    post() {
      return {
        id: "jjjjj",
        title: "hello",
        body: "nice to meet you guys",
        published: true,
      };
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("the server is up!");
});
