# 01 - Development of a Book List Application

The goal of this test is to design and implement a small web application for a book list using the tools of your choice.

- Test based on [this real test for Juniors](https://discord.com/channels/741237973663612969/848944161448132628/1127729621744500806).

This project aims to test your skills in user interaction handling, state management, data filtering, and code structuring.
![Untitled-2023-03-24-0943 (1)](https://github.com/midudev/pruebas-tecnicas/assets/1561955/a829323d-07e6-4937-91c6-5498481148c5)

## Context

We are a multinational book publishing company. We want to offer our audience a way to view our catalog and save the books they are interested in to a reading list.

To achieve this, we want to develop a web application that allows users to view available books and create a reading list. Keep in mind that:

- We do not know if the framework we use now will be the final one, but we want to reuse as much code as possible.
- The application should be user-friendly and visually appealing.
- We have 80% of users coming from desktop browsers.

Use the `books.json` file to obtain book data. You can add more books if you wish, as long as they follow the same structure.

## Requirements

### Functionality

1. **Display of Available Books**: The application must display a list of available books that the user can review.

2. **Creation of Reading List**: The user should be able to create a reading list from the available books. It should be clear in the UI which books are in the reading list and which are not. It should also be possible to move a book from the reading list to the available list.

3. **Filtering of Books by Genre**: Users should be able to filter the list of available books by genre, and a counter should show the number of available books, the number of books in the reading list, and the number of available books in the selected genre.

4. **State Synchronization**: There should be synchronization of the global state to reflect the number of books in the reading list and the number of books still available. If a book is moved from the available list to the reading list, both counts should be updated accordingly.

5. **Data Persistence**: The application should persist the reading list data in the browser's local storage. When the page is reloaded, the reading list should be retained.

6. **Synchronization between Tabs**: If the user opens the application in two different tabs, changes made in one tab should be reflected in the other without the need for a backend.

7. **Deployment**: The application must be deployed on a free hosting service (Netlify, Vercel, Firebase, etc.) and must be accessible via a public URL. Indicate the URL in the README.

8. **Testing**: The application must have AT LEAST one test. Perform the test you consider most important for your application.

## Code Tips

1. **Code Structure**: The code should be well-organized and easy to read.

2. **HTML Semantics**: HTML should be semantic and accessible.

3. **Team-Friendly**: Prepare your project with the idea that anyone on your team may need to work on it in the future (scripts in package.json, minimal documentation in the README, code comments if necessary, etc.).

4. **Code Formatting**: Ensure your code is consistently formatted. You can use Prettier or any other tool you prefer.

5. **Production-Ready**: Make sure your application is ready for production. Minimize the code, optimize images, etc.

## Additional Challenges

**Want to go further?** Here are some additional challenges you can try:

- Implement a search functionality in the list of available books.
- Add a new filter to filter books by the number of pages.
- Allow reordering of books in the reading list by priority.
- Make your design responsive.

## Interview

If you progress to the next phase, we will ask you to have an interview with us. During the interview, we will ask you to explain your code and make some live changes to it.

- You will need to explain the code you have written and the decisions you have made.
- We will make changes to the JSON, and you will need to adapt the code on the spot.
- We will add a new filter to the application, and you will need to implement it.

Good luck and have fun coding!

## References

- Josh W. Comeau's design for a to-be-read book application: https://twitter.com/JoshWComeau/status/1678893330480898049

- Dribbble with Goodreads redesign: https://dribbble.com/shots/2523654-Books-listing-page-goodreads

- Concept of using drag-and-drop for books: https://dribbble.com/shots/19351938-Mybooks-Page-Board

- Landing page concept for a book application: https://dribbble.com/shots/16279204-Book-Web-Store-Concept
