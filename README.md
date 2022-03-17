This is a 'Virtual Money' system. Users can send to each other an amount of virtual money. Each user from the beginning has 500 units on his balance. Each transaction is stored in database and can be viewed on '/history' page.

This project demonstrates a way to communicate between backend and frontend being protected by an autorization token. After the login frontend recieves that token and since that moment constantly sends this token in headers in all successive requests.

Backend project uses SQlite through sqlite3 npm package. It starts an express server listening queries from the front. To start it just go to 'backend' folder and input in terminal
```csharp
npm install
npm start
```
You should have python installed to build SQlite binaries.

Frontend project has been created with React, Typescript and MobX as a state manager.
MobX is a consize and compact alternative to Redux. It is capable do same actions making state tracking task more simple.
</br>    
<div style="text-align: center;"><h3>Frontend screenshots</h3></div></br>
 
![Login](login.png)
![LoginCorrect](loginCorrect.png)
![LoginIncorrect](loginIncorrect.png)
![LoginNoServerConnection](loginNoServerConnection.png)
![Transactions](transactions.png)<br/>
      
<br/> <div style="text-align: center;"><h3>Here's backend server API</h3></div>

**Create/Register a user**<br/>
**POST** */users*<br/>
body:<br/>
{username, password, email}<br/>
returns:<br/>
{token}<br/>
errors:<br/>
400: A user with that email already exists<br/>
400: You must send username and password<br/>
example:<br/>
{"username":"John Doo","password":"johnpwd","email":"john@doo.foo"}<br/>
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkFuaW1hbCBQbGFuZXQgVXNlciIsImVtYWlsIjoiMUAxLjEiLCJpZCI6MywiYmFsYW5jZSI6NTAwLCJpYXQiOjE0ODE1ODQ4ODksImV4cCI6MTQ4MTYwMjg4OX0.h4CzCxTOMRk6S8juxM0tRc5pql99XkXlR09pUzVMH9I"}<br/><br/> 

**Login**<br/>
**POST** */sessions/create*<br/>
body:<br/>
{email, password}<br/>
returns:<br/>
{token}<br/>
errors:<br/>
400: You must send email and password.<br/>
401: Invalid email or password.<br/><br/><br/>

**List of logged user transactions**<br/>
**GET** */api/protected/transactions*<br/>
authentication: bearer<br/>
body:<br/>
returns:<br/>
{trans_token:[{id, date, username, amount, balance}]}<br/>
errors:<br/>
401: UnauthorizedError<br/>
401: Invalid user<br/><br/>

**Create a transaction**<br/>
Sender: logged user<br/>
Recipient: name in a body<br/>

**POST** */api/protected/transactions*<br/>
authentication: bearer<br/>
body:<br/>
{name, amount}<br/>
returns:<br/>
{trans_token:{id, date, username, amount, balance}}<br/>
errors:<br/>
400: user not found<br/>
400: balance exceeded<br/>
401: UnauthorizedError<br/><br/>

**Logged user info**<br/>
**GET** */api/protected/userinfo*<br/>
authentication: bearer<br/>
body:<br/>
returns: {id, name, email, balance}<br/>
errors:<br/>
400: user not found<br/>
401: UnauthorizedError<br/><br/> 

**Filtered User list**<br/>
**POST** */api/protected/users/list* <br/>
authentication: bearer<br/>
body:<br/>
{filter}<br/>
returns:<br/>
[{id, name}]<br/>
errors:<br/>
401: UnauthorizedError<br/>
401: No search string<br/>



Points of interest: transactional queries for SQlite. Authetication token in API. MobX instead of Redux.

 
 

