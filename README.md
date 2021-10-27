# Vizsite
https://vizsite.netlify.app/
### Guest login details
#### email : test@vizsite.com
#### password : test@123

### User types

1. **Registered users** -  people who have registered and can edit a website 
2. **Non-registered users** - people who have don't have an account with us (Additional feature)

### Website builder

A website builder is a place where the user will be building a site

a website builder will mainly contain 3 components

1. HTML Container
2. Editor
3. Style editor

**HTML Container**

1. HTML container will contain mainly two sections one is elements and the second one is components both elements and components are drag and droppable.

**Elements** are all basic HTML elements which are

1. div
2. span
3. p
4. button,input,form,textarea
5. h1-h6
6. table,th,tr,td
7. ul,ol,li
8. nav,main,article

**Components** are repetitive website parts that can contain prebuilt HTML elements with CSS

1. Grid
2. Flex
3. Container
4. Form

**Editor**

1. visual editor

    a **visual editor i**s a place where the user will drag and drop the elements and components for building a website.

    This is a droppable component.

    Users should be able to select an item for applying the styles

    Users should be able to remove an item

2. code preview

    In **Code preview, the** user can visualize the code of the drag and drop items

    Code preview should contain the copy button for copying the code

    Code should be styled like in vs code

    **Code generation**

    We will generate the HTML and CSS code from the root object. We will loop through the root object and add elements into the dom.

3. website preview

    In **Web preview,** the user can visualize the website and get an idea about how it will look like a website

4. Hierarchy preview

    The hierarchy of elements like HTML tags will be predefined and will follow a tree-based structure where suppose if we add a tag and there will be the predefined rule where that tag can be moved within tags this confirms a strict hierarchy in code layout of each element implemented

- A Strict format of inter-user of elements is necessary to maintain the correctness of code.
- Integrity level of each element structure design
- An approach towards the more inclined UX experience
- Dynamic Nature of Elements of Website

 

### Style editor

Style editor contains all the CSS styles that can be applied to a selected item in the editor

Following are the CSS styles that we support

1. Color, Background
2. Margin, Padding
3. Border, Border Radius
4. Height, width, min-width,min-height, max-width, max-height
5. Box-shadow
6. Font-size, font-weight, text-transform
7. Position, display
8. Justify-content, align-items

### **Download code**

Users can be able to download the code 

Downloaded code would contain the single CSS and single HTML files 

### List of projects

list of all projects users has built or currently building.

Each project must contain

1. **Name**  -  Name of the project
2. **Started** - created date
3. **Last modified** - updated at the time
4. **Author -** Name of the person who created the project
5. **URL** - if the website is live URL of that website
6. Download 

### Create project

A new project user is going to create it will contain a form. the form contains the following things

1. Name required field

## Tech notes

**Tech stack**

**React** for Frontend, 

**firebase** for authentication, 

**chakra UI** for building the UI components, 

**react dnd** for drag and drop functionality of the editor. Using this library we will the root object when using drag and drop and elements, 

**Node** for backend

**Why Firebase** - Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users. Thus we chose this.

Firestore -  firestore will be the db. why we are using firestore is we will be having all user data in 

**Netlify** for frontend cloud service

**Github** for ci/cd

**Element and component structure:**

Every element or component would have the following structure

1. type of element
2. child items
3. styles

**Type of element** 

Type of element is basic which type of element it is like div, span, or h1

**Child items**

list of objects which are direct child to this element

**Styles**

A style is an object that contains all the styles applied to this element.

**Models**

1. Projects
    1. projectId
    2. ownerId
    3. projectName
    4. url
    5. ownerName
    6. createdAt
    7. updatedAt
    8. siteId
2. Site
    1. siteId
    2. siteObj
3. **Mobile responsive styles :**

    If user accesses the site from mobile, he will be able to view and download his projects, edit his basic info, but we will not provide access to editor as it needs a bigger space.

### Deploy Site(additional feature)

Styles that are applied to a specific item should be saved and when we came back to the same elements applied styles should be shown in the style editor 

Users can be able to deploy the site when he is done with the changes

1. Users should give the unique domain name for which we will add our domain name and deploy it.

### User types

1. **Basic user** -  we only have one type of user

## Tech notes

**Tech stack -** React, Firebase, Node

**Why Firebase** - Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users. Thus we chose this.

**Models**

1. User
    1. id
    2. name
    3. email
    4. mobile
2. Project
    1. id
    2. name
    3. createdById (refers to id in user table)
    4. url
    5. createdAt
    6. updatedAt

## Tech notes

**Tech stack**

**React** for Frontend, 

**firebase** for authentication, 

**chakra UI** for building the UI components, 

**react dnd** for drag and drop functionality of the editor. Using this library we will the root object when using drag and drop and elements, 

**Node** for backend

**Why Firebase** - Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users. Thus we chose this.

Firestore -  firestore will be the db. why we are using firestore is we will be having all user data in 

**Netlify** for frontend cloud service

**Github** for ci/cd
