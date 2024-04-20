# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Title

ReactJS Full Stack Assignment - Interactive Bookstore Application

## Objective

The application should allow users to browse and search for books, view book details, and books to a shopping cart, and place an order.

## Tech Stack

Use ReactJS, React Router, Redux or React context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.

## Completion Instructions

### Functionality

#### Must Have

- Build a React JS application with multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.
- Implement features such as book search, book filtering, and to cart, remove from cart, and order placement

Pages Page: Home Page Details: Header - links for pages Home, Book List, Cart, Order Banner - Heading, description, and "Explore Books" Button Navigation

page: Book List page Details: Header - links for pages Home, Book List, Cart, Order Book Items (title, subtitle, image, price), Search (by title), Filter (by title) Navigation: "Book List" link in Header, "explore Books" Button, "Back" Button in Book Details page

Page: Book Details Page Details: Book detailed Info (title, subtitle, image, description, price), "Add to Cart" Button, "Back" Button Navigation: Each book in the book list page

Page: Cart page Details: Cart Items (title, subtitle, price, image), "Remove" Button, Checkout Button, Order Summary, Navigation: "Cart" link in Header, "Back" Button in Checkout Page

Page: Checkout Page Details : Back button, Order form (Personal details, Summary, Place Order button) Navigation: Checkout in Cart

    Page: Shipping
    Page Details :
             Address form - First Name, Last Name, City, State, Zip Code, Email, Mobile
    Navigation :
          Link in Payment

    Page: Payment
    Page Details :
           Order Summary, Mutlple Payment Method Option, Back Button
    Navigation:
         Continue to Shopping button in Home Page

#### Nice Have

- implementing user authentication

### Guidelines to develop a project

#### Must have

- Use Github
- Commit code regularly and commit messages should be clear
- Include a README file explaining the project setup, usage instructions, and any addition information
- The repo should be well organised and easy to read.
- The code should be clean, modular, and well-structured
- The application should be visually appealing, and user friendly
- The application should handle all the errors

#### Nice to Have

- Implement unit tests

### Submission Instructions

### Must Have

- Github Repository

#### Nice to Have

- Deploy the application on a hosting platform

## Technical Details

### Routes

| Page         | Route        | Path          |
| ------------ | ------------ | ------------- |
| Home         | Home         | /             |
| Book List    | Book List    | /Book         |
| Book Details | Book Details | /Book/:isbn13 |
| Order        | Order        | /Order        |
| Cart         | Cart         | /Cart         |
| Checkout     | Checkout     | -             |
| Not Found    | Not Found    | /not-found    |
| Shipping     | Shipping     | /shipping     |
| Payment      | Payment      | /Payment      |

### Routes & Components

**Home**

| Component | Details                                                      | State              | API (IT Bookstore) |
| --------- | ------------------------------------------------------------ | ------------------ | ------------------ |
| Home      | Heading, Description, and "ExploreBooks" button              | -                  | -                  |
| Header    | Links for Pages Home, Book List, Cart, Order, SignIN/SignUp  | (Context Consumer) | -                  |

**Book List**

| Component    | Details                                                         | State                             | API (IT Bookstore) |
| ------------ | --------------------------------------------------------------- | --------------------------------- | ------------------ |
| BookList     |                                                                 | apiStatus, booksData, SerachInput | /All               |
| Header       | Links for pages Home, Book List, Cart, Shipping, Order, Payment | (context Consumer)                | -                  |
| SearchInput  | Search (by title), "Search button"                              | searchInputValue                  | /search/{query}    |
| BookItem     | Book Items (title, subtitle, image, price)                      | -                                 | -                  |
| Loader       |                                                                 | -                                 | -                  |
| ErrorMessage |                                                                 | -                                 | -                  |

**Book Details**

| Component    | Details                                                                                         | State                     | API (IT Bookstore) |
| ------------ | ----------------------------------------------------------------------------------------------- | ------------------------- | ------------------ |
| BookDetails  | Book detailed information - image, title, author, price, description, etc, "Add to Cart" Button | apiStatus bookDetailsData | /books/{isbn13}    |
| Header       | Links for pages Home, Book List, Cart, order                                                    | (Context Consumer)        | -                  |
| Loader       |                                                                                                 | -                         | -                  |
| ErrorMessage |                                                                                                 | -                         | -                  |

**Cart**

| Components | Details                                                         | State              | API (IT BookStore) |
| ---------- | --------------------------------------------------------------- | ------------------ | ------------------ |
| Cart       | Cart Items, "Remove" Button, Order Summary, "Checkout" Button   | (Context Consumer) | -                  |
| Header     | Links for pages Home, Book List, Cart, Order                    | (Context Consumer) | -                  |
| CartItem   | Book Detailed Info (image, title, subtitle, price, description) | (Context Consumer) | -                  |

**Shipping**

| Components      | Details                                                                                                                                          | API (IT Bookstore) |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| UserDetailsForm | Order Form - Personal Details - First Name, Last Name, City, State, PinCode, Email, Mobile, Street, "Save" Button, "Processed to Payment" Button | -                  |

**Payment**

| Components       | Details                                                                       | API (IT Bookstore) |
| ---------------- | ----------------------------------------------------------------------------- | ------------------ |
| Payment Method   | Payment Method - Paytm, Google Pay, Phone Pay, Credit/Dedit, Cash on Delivery | -                  |
| Order summary    | Order item - (image, price, title, author, quantity, "increasing" Button)     | -                  |
| Shipping Addrees | Address - Select by User                                                      | -                  |

**Order**

| Components    | Details                                                                                                      | API (IT BookStore) |
| ------------- | ------------------------------------------------------------------------------------------------------------ | ------------------ |
| Order Summary | Order Details Placed by User - (image, quantity, title, author, price, shipping tracker, return policy, etc) | -                  |
| Header        | Links for pages Home, Book List, Cart, Order                                                                 | -                  |

**Not Found**

| Components | Details                                      | State              | API (IT Bookstore) |
| ---------- | -------------------------------------------- | ------------------ | ------------------ |
| NotFound   | -                                            | -                  | -                  |
| Header     | Links for pages Home, Book List, Cart, Order | (Context Consumer) | -                  |

**App**

| Component | Details | State                                                                                   | API (IT Bookstore) |
| --------- | ------- | --------------------------------------------------------------------------------------- | ------------------ |
| App       | -       | CarList (Context Provider), ContextCartList, AddToCart(), deleteFromCart(), resetCart() | -                  |

**SignIn**

| Component    | Details                           | State  API (IT BookStore) |
| ------------ | --------------------------------- | -----| ------------------ |
| Authenticate | UserName, Password, SingIn Button | -    | -                  |

**SignUp**

| Component       | Details                                                  | State | API (IT BookStore) |
| --------------  | -------------------------------------------------------- | ----- | ------------------ |
| SignUp Details  | Name, UserName, Email, Password, Mobile No, SignUp Butto | -     | -                  |

### Design Files

Home, Book List, Book Details, Shopping Cart, Checkout Reference: https://www.envato.com

### APIs

Books, Book Details, Search API reference: api.itbook.store

### Third-Party packages

Icons (react-icons) Loader (react-spinners) Slider (react-slick)

### Future Imporvement

NA
