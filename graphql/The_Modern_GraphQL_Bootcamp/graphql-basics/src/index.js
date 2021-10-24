import { GraphQLServer } from "graphql-yoga";

const demoUsers = [
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
//Type definition (schema)
const typeDefs = `
  type Query {
   users(query: String): [User!]!
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
  }
`;
//Resolver
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return demoUsers;
      }
      return demoUsers.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
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
    // greeting(parent, args, ctx, info) {
    //   if (args.name && args.job) {
    //     return `Helllllo, ${args.job} ${args.name}`;
    //   } else {
    //     return "umm ?";
    //   }
    // },
    // sumup(parent, args, ctx, info) {
    //   if (args.numbers.length) {
    //     return args.numbers.reduce((pre, cur) => pre + cur);
    //   } else {
    //     return 0;
    //   }
    // },
    // grades(parent, args, ctx, info) {
    //   return [10, 20, 30];
    // },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("the server is up!");
});
