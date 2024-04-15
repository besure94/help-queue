# Help Queue

#### An application that allows a user to submit tickets to a queue for troubleshooting technical issues.

#### By Brian Scherner

## Technologies Used

* React
* JavaScript
* JSX
* HTML
* Webpack
* Node Package Manager
* Babel
* ES Lint
* CSS
* Firebase

## Description

**Note: This is for the `main` branch. There are other branches which show the implementation of different features throughout the process of building this application.**

This application presents users with a home page for a help queue for troubleshooting technical issues. Users can select `Add Ticket`, which takes them to a form where they can submit their names, location, and issue they're experiencing. Selecting `Help!` will submit the ticket to the list on the home page.

A user can select a ticket's details by clicking on it. After doing so, they have the option to update (edit) the ticket, or close (delete) it from the queue.

This application features Firebase. When users submit tickets, they are saved to a Firestore database hosted on Firebase.

In order to use this application, users must first sign up for an account and then sign in. Signing out will prevent them from accessing the Help Queue.

To view a diagram of this application to understand its component structure, [click here](./Help_Queue_Diagram.drawio.svg).

## Setup/Installation Requirements

// update setup/installation requirements //

* Select the green `Code` button, and clone this repository to your desktop.
* In your terminal, navigate to this project's folder, and run the command `$ npm install`. This will install relevant packages.
* Run the command `$ npm run start` to start a live development server. This will open the project in your web browser at the URL `localhost:3000`, allowing you to use the application.

## Known Bugs

None.

## License

MIT

Copyright(c) 2024 Brian Scherner


