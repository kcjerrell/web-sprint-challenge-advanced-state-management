# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
	 Context API helps pass down state and access to it through multiple layers of hierarchical components without needed
	 to pass them from from layer to layer (prop drilling). This improves component reuse and seperation of concerns
	 becuase data doesn't have to be passed down through components that don't need that data themselves.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
	 Redux is built around the concept of a single state (although with mutliple slices), maintaining that state, and providing ways to
	 access or change it that are "pure," reusable, undoable/traceable, and safe from side effects. It operates by defining "actions," which are specifically
	 intended instructions or commands for updating the "store" (or state). These changes are exected by "reducers," which receive the action object from the dispatcher,
	 execute the described actions, and return a new state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
	 thunk allows us to compose our actions in a much more useable, asynchronous way.

4. What is your favorite state management system you've learned about this sprint? Please explain why!
	 What are my options here? Redux and Context? I'm not particularly fond of either one. Thunk makes Redux slightly more bearable,
	 but setting up actions and reducers is more complicated than it needs to be (athough that strategy certainly makes
	 logging/undoing/debugging easier). I have heard of Redux toolkit, and it seems to address many of these issues - but I haven't had
	 a chance to check out yet.