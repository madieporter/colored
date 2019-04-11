When installing create-react-app, I used npx install -
    npx is a tool intended to help round out the experience of using packages from the npm registry. 

SERVER.JS ---------------------------------------

-The calls to my endpoint come from a different origin. 
    -Need to make sure we include the CORS headers
        -(Access-Control-Allow-Origin)
    CORS HEADERS CONCEPT--------------------------
        -Cross-Origin Resource Sharing
        -A mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. 
        -A web application executes a cross-origin HTTP request when it request a resource that has a different origin (domain, protocol, and port) than its own origin.

        -A web application using those APIS can only request HTTP resources from the same origin the application was loaded from, unless the response from the other origin includes the right CORS headers.  

-The dotenv library should be initiated as early as possible. 

-Started the server by running - node server - inside the terminal

-POST in Server
    -The request body will be sent as the data for the triggered Pusher event. The same object will be sent as a response to the user. 

    -The trigger is achieved using the trigger method which takes the trigger identifier(painting), an event name(draw), and a payload.