---
title: Digit ICS-314 Project
---

<img src="doc/directory/landing.png">

## Overview

Digits is an application that allow users to do a few useful things:

1. Create contacts with corresponding Name, Address, Image and Description.
2. Edit and update contacts as thing change in real time.
3. Add timestamped notes to serve as reminders from meetings, phone calls, etc...

## Installation

First, [install Meteor](https://www.meteor.com/install).

Second, go to [https://github.com/ics-software-engineering/meteor-application-template-react](https://github.com/nicholasbcarr/digits), and click the "Use this template" button. Complete the dialog box to create a new repository that you own that is initialized with this template's files.

Third, go to your newly created repository, and click the "Clone or download" button to download your new GitHub repo to your local file system.  Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Fourth, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

## Running the system

Once the libraries are installed, you can run the application by invoking the "start" script in the [package.json file](https://github.com/ics-software-engineering/meteor-application-template-react/blob/master/app/package.json):

```
$ meteor npm run start
```

The first time you run the app, it will create some default users and data. Here is the output:

```
meteor npm run start

> meteor-application-template-react@ start C:\Users\nickc\Desktop\Github\nickc\digits\app
> meteor --no-release-check --exclude-archs web.browser.legacy,web.cordova --settings ../config/settings.development.json

[[[[[ C:\Users\nickc\Desktop\Github\nickc\digits\app ]]]]]

=> Started proxy.
=> Started MongoDB.
I20211109-16:14:58.307(-10)? Creating the default user(s)
I20211109-16:14:58.314(-10)?   Creating user admin@foo.com.
I20211109-16:14:58.448(-10)?   Creating user john@foo.com.
I20211109-16:14:58.573(-10)? Creating contact data.
I20211109-16:14:58.575(-10)?   Adding: Philip (admin@foo.com)
I20211109-16:14:58.605(-10)?   Adding: Henri (john@foo.com)
I20211109-16:14:58.613(-10)?   Adding: Kim (john@foo.com)
I20211109-16:14:58.680(-10)? Monti APM: completed instrumenting the app
=> Started your app.

=> App running at: http://localhost:3000/
```

### Viewing the running app

If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  You can login using the credentials in [settings.development.json](https://github.com/ics-software-engineering/meteor-application-template-react/blob/master/config/settings.development.json), or else register a new account.

### ESLint

You can verify that the code obeys our coding standards by running ESLint over the code in the imports/ directory with:

```
meteor npm run lint
```

## Walkthrough

The following sections describe the major features of this digits application

### Directory structure

The top-level directory structure is:

```
app/        # holds the Meteor application sources
config/     # holds configuration files, such as settings.development.json
doc/        # holds developer documentation, user guides, etc.
.gitignore  # don't commit IntelliJ project files, node_modules, and settings.production.json
```

This structure separates documentation files (such as screenshots) and configuration files (such as the settings files) from the actual Meteor application.

The app/ directory has this structure:

```
client/
  main.html      # The boilerplate HTML with a "root" div to be manipulated by React.
  main.js        # import startup files.

imports/
  api/           # Define collections
    contacts/       # The Contacts collection definition
    notes/          # The Notes collection definition
  startup/       # Define code to run when system starts up (client-only, server-only, both)
    client/
    server/
  ui/
    layouts/     # Contains top-level layout (<App> component).
    pages/       # Contains components for each page.
    components/  # Contains page elements, some of which could appear on multiple pages.

node_modules/    # managed by npm

public/          # static assets (like images) can go here.

server/
   main.js       # import the server-side js files.
```

#### Landing page

When you retrieve the app at http://localhost:3000, this is what should be displayed:

<img src="doc/directory/landing.png">

The next step is to use the Login menu to either Login to an existing account or register a new account.

#### Login page

Clicking on the Login link, then on the Sign In menu item displays this page:

<img src="doc/directory/login.png">

#### Register page

Alternatively, clicking on the Login link, then on the Sign Up menu item displays this page:

<img src="doc/directory/signup.png">

#### Landing (after Login) page, non-Admin user

Once you log in (either to an existing account or by creating a new one), the navbar changes as follows:

<img src="doc/directory/navbar.png">

You can now add new Contacts, and list the Contacts you have created. Note you cannot see any Contacts created by other users.

#### Add Contacts page

After logging in, here is the page that allows you to add new Contacts:

<img src="doc/directory/add-contact.png">

#### List Contacts page

After logging in, here is the page that allows you to list all the Stuff you have created:

<img src="doc/directory/list-contacts.png">

You click the "Edit" link to go to the Edit Contact page, shown next.

#### Edit Contact page

After clicking on the "Edit" link associated with an item, this page displays that allows you to change and save it:

<img src="doc/directory/edit-contact.png">

#### Landing (after Login), Admin user

You can define an "admin" user in the settings.json file. This user, after logging in, gets a special entry in the navbar:

<img src="doc/directory/admin-navbar.png">

#### Admin page (list all users stuff)

To provide a simple example of a "super power" for Admin users, the Admin page lists all of the Contacts by all of the users:

<img src="doc/directory/admin-page.png">

Note that non-admin users cannot get to this page, even if they type in the URL by hand.

### Collections

The application implements a single Collection called "Stuffs". Each Stuffs document has the following fields: name, quantity, condition, and username.

The Contacts collection is defined in [imports/api/contact/Contact.js](https://github.com/nicholasbcarr/digits/blob/master/app/imports/api/contact/Contacts.js).

The Notes collection is defined in [imports/api/note/Notes.js](https://github.com/nicholasbcarr/digits/blob/master/app/imports/api/note/Notes.js).

The Contacts collection is initialized in [imports/startup/server/Mongo.js](https://github.com/nicholasbcarr/digits/blob/master/app/imports/startup/server/Mongo.js).

### CSS

The application uses the [React implementation of Semantic UI](http://react.semantic-ui.com/).

### Routing

For display and navigation among its four pages, the application uses [React Router](https://reacttraining.com/react-router/).

Routing is defined in [imports/ui/layouts/App.jsx](https://github.com/ics-software-engineering/meteor-application-template-react/blob/master/app/imports/ui/layouts/App.jsx).


### Authentication

For authentication, the application uses the Meteor accounts package.

When the application is run for the first time, a settings file (such as [config/settings.development.json](https://github.com/nicholasbcarr/digits/blob/master/config/settings.development.json)) should be passed to Meteor. That will lead to a default account being created through the code in [imports/startup/server/accounts.js](https://github.com/nicholasbcarr/digits/blob/master/app/imports/startup/server/Accounts.js).

The application allows users to register and create new accounts at any time.

### Authorization

Only logged in users can manipulate Contact documents (but any registered user can manipulate any Contact document, even if they weren't the user that created it.)

#### ESLint

The application includes a [.eslintrc](https://github.com/nicholasbcarr/digits/blob/master/app/.eslintrc) file to define the coding style adhered to in this application. You can invoke ESLint from the command line as follows:

```
PS C:\Users\nickc\Desktop\Github\nickc\digits\app> meteor npm run lint

> meteor-application-template-react@ lint C:\Users\nickc\Desktop\Github\nickc\digits\app
> eslint --quiet --fix --ext .jsx --ext .js ./imports

PS C:\Users\nickc\Desktop\Github\nickc\digits\app>

```

ESLint should run without generating any errors.

It's significantly easier to do development with ESLint integrated directly into your IDE (such as IntelliJ).

