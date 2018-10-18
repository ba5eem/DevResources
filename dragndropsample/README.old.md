# React Kanban
> A digital Kanban board made with React

![kanban_guide_print_kpo_bleed_board2-1024x517](https://cloud.githubusercontent.com/assets/4650739/15059276/3bb2092e-12bd-11e6-9c12-d92747e77bc5.jpg)

> "The Kanban technique emerged in the late 1940s as Toyota’s reimagined approach to manufacturing and engineering. ... The system’s highly visual nature allowed teams to communicate more easily on what work needed to be done and when. It also standardized cues and refined processes, which helped to reduce waste and maximize value." - [via LeanKit.com](http://leankit.com/learn/kanban/kanban-board/)

## Introduction
Build a Digital Kanban board using:
- **React** for building the front-end User-Interface (UI)
- HTML and CSS (via [sass](https://sass-lang.com))
- **Express** as the Server
- **Bookshelf.js** as your ORM for the **Postgresql** Datastore.

## Layout/Style Guide
![screen shot 2016-11-04 at 1 21 12 pm](https://cloud.githubusercontent.com/assets/4650739/20025357/afd23626-a291-11e6-9d34-667a64ead92d.png)


## Specifications

### Card (component)
Cards contain information about a task.

#### Card Properties

A Card has 6 properties:
  1. A unique identifier, e.g. "Card-Id #001".
  1. A Title
  1. A Body (task details)
  1. A priority selection
  1. A status, the status of a card. Should match the column the card can be found in. Columns: "Queue", "In Progress", or "Done".
  1. A "Created by" field. This should display name of the person who created the task.
  1. An "Assigned to field". This should display the name of the person who is currently working on the task.

#### Creating a new Card
There should be a form which is used to create a new Card. When a card is first created we need minimal information, the information needed is:
  - Title (String)
  - Priority (low, Medium, High, Blocker)
  - Created By (Full Name)
  - Assigned To (Full Name)

All other fields are not needed when creating a new Card. The other fields: "Unique Identifier", and "Status" fields will be automatically added by the application.

### Cards in Columns
When a Card appears in a column there should be a way (something clickable?) to move that card to either the next or previous column.


### Columns (component)
Columns contain Cards and each column is a collection of Cards that share the same status.

The board you will building will have **3 columns**:
  - Queue
    - A card will automatically appear in this column after creation.
  - In Progress
    - When a card is being worked on it should be displayed in this column.
  - Done
    - When work has finished on a card it should be displayed in this column.

**caveat: do not try to implement click-and-drag just yet, save it as a stretch goal!**

### Kanban Board (Main Component)
A Kanban board contains multiple Columns (and Columns contain Cards). This is the main application component. It is responsible for retreiving data and *passing it down* to other child components.

### Schemas

## Cards
|Property|Type|Options|
|---|---|---|
|id(Pk)|number|serial, not null, unique|
|title|string(255)|not null|
|body|string(1024)|not null|
|priority_id(Fk)|number|not null|
|status_id(Fk)|number|not null|
|created_by(Fk)|number|not null|
|assigned_to(Fk)|number|nullable|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

## Users
|Property|Type|Options|
|---|---|---|
|id(Pk)|number|serial, not null, unique|
|first_name|string|not null|
|last_name|string|not null|
|email|string|not null|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

## Priorities
|Property|Type|Options|
|---|---|---|
|id(Pk)|number|serial, not null, unique|
|name|string|not null|
|rank|number|not null|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

## Statuses 
|Property|Type|Options|
|---|---|---|
|id(Pk)|number|serial, not null, unique|
|name|string|not null|
|rank|number|not null|
|created_at|TS w/ TZ|not null|
|updated_at|TS w/ TZ|not null|

### Server
Build an Express server which will serve your `index.html` and static assets.

### Database
PostgreSQL and Bookshelf ORM. Create a UML Schema for your database, consider [LucidChart](https://www.lucidchart.com/). Add these diagrams to your project.

### Styles
Make It Pretty!™

### Routes
Your server will have these routes:
  - RESTful API endpoints to create, read, update, and delete kanban cards for your application.
    - Remember to use MVC architechture: Models, Views, Controllers!
  - You will use `react-router` to add FE routes to the application.

|route|action|
|---|---|
|/|Show the kanban board|
|/admin/users|Show a listing of users of the board|
|/admin/users/new|Show a form to add a new user|
|/admin/users/:id|Detail view of user **(Stretch goal)**|
|/admin/users/:id/edit|Show form to let user update information **(Stretch goal)**|

## Stretch Goals

|route|action|
|---|---|
|/admin/priorities/|Show list of current priorities|
|/admin/priorities/new|Show form to add new Priority|
|/admin/priorities/:id/edit|Show form to update selected Priority|
|/admin/statuses/|Show list of current statuses|
|/admin/statuses/new|Show form to add new Status|
|/admin/statuses/:id/edit|Show form to update selected Status|

Add **drag and drop** functionality

#### Responsive Layout
- create a desktop and mobile view. Tablet view is not needed (possible stretch goal).

## References

### Kanban Servies

[Trello](http://www.trello.com)

[Taiga](http://www.taiga.io)

[Asana](http://www.asana.com)
