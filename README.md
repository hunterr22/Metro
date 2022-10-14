Metropolitan Convention Center Project

Component List:

Client App:

•	React App

Authentication Service: 

•	\token
•	\register

Data Service: 

•	\customers

•	\events

•	\registration

Authentication Service: 

•	When accessing the client app, one will need to get a token to get access to the data services. To access the registration in data service, one will need to get a registration authentication service. 

Data Service:

•	Based off of the requirements, in the data services will be broken down into three different pages:

o	Customers 

o	Events

o	Registration 

Work Plan (high level):

•	Create Customer endpoints 

•	Test Customer endpoints

•	Create authentication API’s token endpoint 

•	Test token endpoint

•	Secure the Data API service with filter that checks for JWT tokens

•	Get token and test Customer endpoints including token

•	Test APIs using the React client application

Work Plan (task backlog):

•	Create local git repos

•	Data API Code

•	Auth API Code

•	Implement Data API’s root endpoint

•	Implement the Data API’s Customer GET endpoint

•	Test created endpoints with postman REST tools

•	Implement PUT, POST, and DELETE Customer API endpoints

•	Test created endpoints with Postman

•	Test customer endpoints using React client

•	Implement Events and Registrations endpoints

•	Test created endpoints with Postman

•	Test created endpoints using React client 

•	Create Authentication API

•	Implement token endpoint

•	Test token endpoint using postman

•	Test token endpoint using React client (the client’s login function uses the token endpoint)

•	Add authentication filter to the Data API to require a JWT token to access services

•	Try accessing Data API with authentication filter in place using Postman

•	Test login and access to customers, events, and registrations records using the react client
