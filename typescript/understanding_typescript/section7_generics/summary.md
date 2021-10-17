#### Question 1:

When can "Generics" come in very handy?

In cases where you have a type that actually works together with multiple other possible types (e.g. an object which emits data of different types).
Generics help you create data structures that work together or wrap values of a broad variety of types (e.g. an array that can hold any type of data).

#### Question 2:

Would the following usage of a generic type make sense?

```ts
const data = extractData<string>(user, "userId");
```

Yes, probably returns different data based on the arguments you provide.
This would be a perfect example where you might have some utility method that actually doesn't care too much about the data it operators on (it just fetches it after all)

#### Question 3:

What's the idea behind constraints (when talking about generics)?

Constraints allow you to narrow down the concrete types that may be used in a generic function etc.
