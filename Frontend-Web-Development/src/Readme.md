## Folder structure
```

├── .babelrc                        # Configures Babel
├── .eslintrc                       # Configures ESLint
├── .gitignore                      # Tells git which files to ignore
├── README.md                       # Readme File
├── dist                            # Folder where the build script places the built app. Use this in prod.
├── package.json                    # Package configuration. The list of 3rd party libraries and utilities
├── src                             # Source code
│   ├── Views                        # Folder where the different user views are stored
│           ├── Buyer                # Buyer user view
│               ├── dashboard.js     # Buyer dashboard with messages and records tab.
│               ├── messages.js      # Seller message window with sent and received messages.
│               ├── profile.js       # Buyer's profile with option to update info.
│               └── records.js       # View records
│           ├── Common               # Common webpage views for all users.
│               ├── error.js         # Response for erroneous transcations.
│               ├── footer.js        # Footer for the webpage.
│               ├── forgot.js        # Email recovery and change in password.
│               ├── header.js        # Header for webpage.
│               ├── home.js          # View for homepage of application.
│               ├── login            # Login page 
│               ├── signup           # Signup Page
│               └── success          # Success page successful login and signup.
│           ├── Connect              # File to establish connection to heroku server
│               └── connect.js       # Connection to heroku server.
│           ├── Seller               # Seller user view
│               ├── dashboard.js     # Seller dashboard with messages and records tab.
│               ├── messages.js      # Seller message window with sent and received messages.
│               ├── profile.js       # Sellers profile with option to update info.
│               └── records.js       # View records
│           ├── user_old             
│               ├── dashboard.js     # Dashboard with messages and records tab.
│               ├── doc_uploads.js   # Webpage to upload documents.
│               ├── documents.js     # Webpage to view and search documents.
│               ├── form.js          # Webapage to enter details of required documents.
│               ├── med_history.js   # View of profile of patient with various medical data.
│               ├── overview.js      # Overview of record owner with basic details.
│               ├── profile.js       # Details profile view with option to update.
│               └── records.js       # View of all the records updated and current status.
│           └── verifier
│               ├── dashboard.js     # Verifiers dashboard with messages and records tab.
│               ├── messages.js      # Verifiers message window with sent and received messages.
│               ├── profile.js       # Verifiers profile with option to update info.
│               └── records.js       # View records
└── webpack.config.js     # Configures webpack for builds
```
## React
React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.
<hr>

## JSX
React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript.

## Commenting in JSX
JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.
To put comments inside JSX, you use the syntax {/* */} to wrap around the comment text.

## Rendering HTML Elements to the DOM
With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.
ReactDOM offers a simple method to render React elements to the DOM.

## Defining an HTML Class in JSX
One key difference in JSX is that you can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className.

## Self-Closing JSX Tags
In HTML, almost all tags have both an opening and closing tag: `<div></div>;` the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.

## Components
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 

## React Components
- ## Stateless Functional Component
        Stateless functional components are created using JavaScript function.Stateless components can receive data and render it, but it can not manage or track changes to that data.
- ## React Components
        A way to define a React component is with the ES6 class syntax.Using a ES6 class which extends the `React.Component` class, the ES6 class now has access to many useful React features, such as local state and lifecycle hooks.

## Props
Arbitrary inputs accepted by javascript functions.

## Default Props
React has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary.

## Override Default Props
The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.

## PropTypes
React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set propTypes on your component to require the data to be of type array. This will throw a useful warning when the data is of any other type.

## this.props
Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with this.

## Stateful Component
One of the most important topics in React is state. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.

## setState()
React provides a method for updating component state called setState. You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data.

## handleChange()
The method handleChange() has a parameter called event. When the method is called, it receives an event object that contains a string of text from the input element. You can access this string with event.target.value inside the method.

## MyForm
The MyForm component is set up with an empty form with a submit handler. The submit handler will be called when the form is submitted.

## Lifecycle Method 
React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. 

## componentWillMount()
This method is only called one time, which is before the initial render. Since this method is called before render() our Component will not have access to the Native UI (DOM, etc.). We also will not have access to the children refs, because they are not created yet.The componentWillMount() is a chance for us to handle configuration, update our state, and in general prepare for the first render.

## componentDidMount()
The last step in the Birth/Mount life cycle phase is our post-mount access via componentDidMount(). This method is called once all our children Elements and our Component instances are mounted onto the Native UI. When this method is called we now have access to the Native UI (DOM, UIView, etc.), access to our children refs and the ability to potentially trigger a new render pass.

## shouldComponentUpdate()
This method allows your Component to exit the Update life cycle if there is no reason to apply a new render. Out of the box, the shouldComponentUpdate() is a no-op that returns true. This means every time we start an Update in a Component, we will re-render.

## && logical operator
the && logical operator can be used to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, return some markup.

## Array.map()
Array.map() is used to Dynamically Render Elements.

## renderToString()
Used to render react elements on the server side.

