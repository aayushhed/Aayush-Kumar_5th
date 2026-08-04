Client talks to server using these:


        1.json                                                       2.XML
        {                                                              <start>
            name:"abc",                                                <name>:<"abc">                    
            Reg no: 192,                                               <reg no>:<192>
            dob:"xyz"                                                  <dob>:<"xyz">
        }


 Client   --->   Middleware   ---->   Server


 Uses Methods like 
        GET :Used to fetch data
        POST: Create data
        PUT: replace or update
        PATCH:  Partially update 
        DELETE: delete

# Idempotency means:

Performing the same operation multiple times has the same final effect on the server as performing it once.


 
# ✅ GET (Idempotent)
GET /users/1

Call it 1 time or 100 times:

Aayush
Aayush
Aayush

The server data never changes.

# ❌ POST (Not Idempotent)
POST /users
{
  "name": "Aayush"
}

Call it 3 times:

User 1
User 2
User 3

Three different users are created.

# ✅ PUT (Idempotent)
PUT /users/1
{
  "name": "Aayush Kumar"
}

Call it 10 times:

User 1: Aayush Kumar

The final state is the same as after the first request.

# ✅ DELETE (Idempotent)
DELETE /users/1
First call: User is deleted.
Second call: User is already deleted (may return 404 Not Found).

# PATCH (Idempotent)

---------------------------------------------------------------------------------------

# RESPONCE CODE

 **[   1_ _  Informational code    Ex:101  ]**

100 Continue – Continue sending the request.
101 Switching Protocols – Protocol is changing (e.g., HTTP → WebSocket).

**[    2_ _  Success               Ex: 201  ]**

200 OK – Request successful.
201 Created – New resource created (commonly after POST).
202 Accepted – Request accepted and will be processed later.
204 No Content – Success, but no data is returned (commonly after DELETE).

**[  3_ _   Redirection ( as resource is not available  here and redirected to somewhere else)     Ex: 301   ]**

301 Moved Permanently – Resource permanently moved.
302 Found – Temporary redirect.
304 Not Modified – Use cached version.

**[   4_ _ Client error          Ex:404  ]**

400 Bad Request – Invalid request.
401 Unauthorized – Authentication required.
403 Forbidden – Authenticated but not allowed.
404 Not Found – Resource doesn't exist.
405 Method Not Allowed – HTTP method not supported.
409 Conflict – Conflict with current state (e.g., duplicate resource).
422 Unprocessable Entity – Validation failed.

**[   5_ _ Server error          Ex:501   ]**

500 Internal Server Error – Generic server error.
501 Not Implemented – Server doesn't support the functionality.
502 Bad Gateway – Invalid response from another server.
503 Service Unavailable – Server is overloaded or under maintenance.
504 Gateway Timeout – Another server took too long to respond.



----------------------------------------------------------------------------

# CORS (Cross-Origin Resource Sharing)

CORS is a browser security mechanism that controls whether a web page can make requests to a different origin (domain, port, or protocol).

# What is an Origin?

An origin is made up of:

Protocol (http/https)
Domain (example.com)
Port (3000, 5000)

Example:

React App:  http://localhost:3000
API Server: http://localhost:5000

Since the ports are different, these are different origins.

# PREFLIGHT REQUEST:
                A preflight request is an OPTIONS request that the browser automatically sends before the actual request to check whether the server allows the cross-origin request.

                React App
                   |
            OPTIONS (Preflight)
                   |
                 Server
                   |
                Allowed?
              |         |
             Yes        No
             |          |
            POST      Browser blocks request


