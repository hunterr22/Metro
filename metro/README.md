# Metropolitan Convention Center Event Registration App

This application will provide a simple interface for customers to look up events they are interested in, 
and register to the event so that they may attend in the future.

## Component List:
### Frontend client:
  - React App

### Authentication Service: 
  - Service information: 
    - context path = `\account`
    - port = `8081`
  - Endpoints:
    - `\account\token`
    - `\account\register`
    - `\account`
  - Root Endpoint (`\account`):
    - Returns a message confirming that the service is up and running.
  - Token Endpoint:
    - Responds to requests for JWT tokens
    - Takes username and password as parameters
    - Checks that the username exists within customer store
    - Checks that the password matches the one listed for the customer within customer store
    - Returns a JWT token suitable for connecting to the Data Service
  - Register Endpoint:
    - Takes name, email, and password and adds to the Customer data store via the Customer endpoint of the Data Service
  - Security: 
    - A token is not required to access the authentication service endpoints

### Data Service Endpoints: 
  - Service information:
    - context path = `\api`
    - port = `8080`
  - Backend Data:
    - Will use an embedded hsql database
  - Endpoints: 
    - `\account\customers`
    - `\account\events`
    - `\account\registrations`
  - Root Endpoint (`\api`):
    - Returns a message confirming that the service is up and running.
  - Security: 
    - A servlet filter will be used to intercept calls to the api and check requests for JWT tokens
  - Customers Endpoint:
    - Supports CRUD management of Customer records.
    - Supports GET, PUT, POST, and DELETE requests.
    - A JWT token is required for all requests.
  - Events Endpoint:
    - Supports CRUD management of Events records.
    - Supports GET, PUT, POST, and DELETE requests.
    - a JWT token is required for all requests.
  - Registrations Endpoint:
    - Supports CRUD management of Registration records.
    - Allows customers to register for events.
    - Supports GET, PUT, POST, and DELETE requests.
    - A JWT token is required for all requests.

