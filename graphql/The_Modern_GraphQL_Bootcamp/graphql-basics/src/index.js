import { GraphQLServer } from "graphql-yoga";
import uuidv4 from "uuid/v4";

//Scalar types = String, Boolean, Int, Float, ID

// Demo Data
let users = [
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

let posts = [
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

let comments = [
  { id: "101", text: "helloo", author: "123", post: "10" },
  { id: "112", text: "sleepy", author: "123", post: "11" },
  { id: "123", text: "nice to meet ya", author: "000", post: "11" },
  { id: "131", text: "happy coding!", author: "234", post: "12" },
];

//Type definition (schema)
const typeDefs = `
  type Query {
   users(query: String): [User!]!
   posts(query: String): [Post!]!
   comments: [Comment!]!
   me: User!
   post: Post!
  }

  type Mutation {
    createUser(data: CreateUserInput): User!
    deleteUser(id: ID!): User!
    createPost(data: CreatePostInput): Post!
    createComment(data: CreateComment): Comment!
  }
  
  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
  }

  input CreateComment {
    text: String!
    author: String!
    post: ID!
  }

  type User {
      id: ID!
      name: String!
      email: String!
      age: Int
      posts: [Post!]!
      comments: [Comment!]!
  }

  type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
      author: User!
      comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`;
//Resolver
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        // posts in User: users 배열의 0번째부터 마지막까지 순차적으로 진행되며 user id = post author 인 경우를 찾아 객체 배열을 만들어낸다.
        return users;
      }

      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        // individual post will call author function in Post
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
    comments(parent, args, ctx, info) {
      return comments;
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
  Mutation: {
    createUser(parent, args, ctx, info) {
      const { name, email, age } = args;
      const emailTaken = users.some((user) => user.email === args.data.email);
      if (emailTaken) {
        throw new Error("Email already taken");
      }

      const user = {
        id: uuidv4(),
        ...args.data,
      };

      users.push(user);
      return user;
    },
    deleteUser(parent, args, ctx, info) {
      const userIndex = users.findIndex((user) => user.id === args.id);

      if (userIndex === -1) {
        throw new Error("User not found");
      }
      const deletedUsers = users.splice(userIndex, 1);

      posts = posts.filter((post) => {
        const match = post.author === args.id;
        if (match) {
          comments = comments.filter((comment) => comment.post !== post.id);
        }
      });
      comments = comments.filter((comment) => comment.author !== args.id);
      return deletedUsers[0];
    },
    createPost(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);

      if (!userExists) {
        throw new Error("User not found");
      }
      const post = {
        id: uuidv4(),
        ...args.data,
      };

      posts.push(post);
      return post;
    },
    createComment(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);
      const postExists = posts.some(
        (post) => post.id === args.data.post && post.published
      );
      if (!userExists) {
        throw new Error("user not found");
      } else if (!postExists) {
        throw new Error("post not found");
      }
      const comment = {
        id: uuidv4(),
        ...args.data,
      };
      comments.push(comment);
      return comment;
    },
  },
  Post: {
    // parent = Parent Object = post in this case.
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.post === parent.id;
      });
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author === parent.id;
      });
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    post(parent, args, ctx, info) {
      return posts.find((post) => {
        return post.id === parent.post;
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
