# SCALING :

# 1. VERTICAL  : 
 EXTENDS THE CAPACITY OF EXISTING TECH (AS 16gb-> 256gb  nor 4 core ->> 32 core)
    

 Advantages
- **Easy to implement** – No major changes to the application architecture are required.
- **Simple management** – Only one server needs to be maintained.
- **Improved performance** – More CPU, RAM, and storage increase the server's processing power.
- **No data synchronization** – All data resides on a single machine.
- **Suitable for small and medium applications** – Provides good performance without adding multiple servers.

 Disadvantages
- **Limited scalability** – Hardware can only be upgraded to a certain limit.
- **Single Point of Failure (SPOF)** – If the server fails, the entire application becomes unavailable.
- **High cost** – Upgrading to high-end hardware is expensive.
- **Downtime during upgrades** – Server may need to be restarted for hardware upgrades.
- **Not suitable for very large applications** – Cannot handle unlimited growth due to hardware limitations.


# 2. HORIZONTAL : 

Horizontal scaling is the process of increasing the capacity of a system by **adding more servers or machines** instead of upgrading an existing server.

### Example
Instead of upgrading one server from **8 GB RAM to 32 GB RAM**, you add more servers:

- Server 1: 8 GB RAM, 4 CPU cores
- Server 2: 8 GB RAM, 4 CPU cores
- Server 3: 8 GB RAM, 4 CPU cores

A **load balancer** distributes incoming requests among these servers.

## Advantages
- **Highly scalable** – New servers can be added as demand grows.
- **High availability** – If one server fails, other servers continue serving users.
- **Better fault tolerance** – No single point of failure.
- **Handles heavy traffic efficiently** – Requests are distributed across multiple servers.
- **Cost-effective growth** – Can add lower-cost servers instead of buying one expensive machine.

## Disadvantages
- **Complex to implement** – Requires distributed architecture.
- **Load balancer is required** – Requests must be distributed across servers.
- **Data synchronization challenges** – Keeping data consistent across servers can be difficult.
- **Higher maintenance** – Multiple servers need monitoring and management.
- **Application changes may be needed** – Some applications must be redesigned to support multiple servers.

## Real-Life Example
A website receives **10,000 users per day** on one server. As traffic grows to **100,000 users per day**, instead of upgrading the server, the company adds **five servers** behind a load balancer. This is **horizontal scaling**.

## Summary

| Vertical Scaling | Horizontal Scaling |
|------------------|--------------------|
| Increase resources of one server | Add more servers |
| Scale Up | Scale Out |
| Easier to implement | More complex to implement |
| Limited by hardware | Nearly unlimited scalability |
| Single point of failure | Better fault tolerance |
| Usually requires downtime | Can often scale with little or no downtime |



STATEFUL        STATELESS

# STATEFUL SERVER
    A **stateful** system stores information (state) about a client's previous interactions. The server maintains session data, so future requests depend on the current session.
This diagram shows why a stateful application can lose the session when a load balancer sends the next request to a different server.

                    ┌──────────────────┐
                    │      Client      │
                    └────────┬─────────┘
                             │ Login Request
                             ▼
                    ┌──────────────────┐
                    │  Load Balancer   │
                    └───────┬──────────┘
                            │
                  Chooses Server A
                            ▼
                  ┌─────────────────┐
                  │    Server A     │
                  │ Session ID:123  │
                  │ User = Aayush   │
                  └─────────────────┘
                           │
                  Session stored here
                           │
        ───────────────────┼──────────────────

Client clicks another page...

                    ┌──────────────────┐
                    │      Client      │
                    │ Session ID:123   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Load Balancer   │
                    └───────┬──────────┘
                            │
                 Chooses Server B
                            ▼
                  ┌─────────────────┐
                  │    Server B     │
                  │ No Session 123  │
                  │ Session Missing │
                  └─────────────────┘
                            │
                            ▼
                  User appears logged out
                  or gets "Invalid Session"
** Why does this happen? **
Server A stored the user's session in its own memory.
Server B has no copy of that session.
The load balancer does not know which server contains the session unless configured to do so.
Therefore, the user may be logged out or asked to log in again.

# SOLUTION 
                 Client
                    │
                    ▼
             Load Balancer
              │         │
              ▼         ▼
         Server A   Server B
              │         │
              └────┬────┘
                   ▼
            Redis Session Store
          Session ID → User Data

Now:

Request 1 → Server A → Redis → Session found ✅
Request 2 → Server B → Redis → Same session found ✅

Any server can handle the request.


# PROBLEM WITH SAHRED CACHE
                  Millions of Users
                         │
                         ▼
                  ┌───────────────┐
                  │ Load Balancer │
                  └──────┬────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   ┌─────────┐      ┌─────────┐      ┌─────────┐
   │Server A │      │Server B │      │Server C │
   └────┬────┘      └────┬────┘      └────┬────┘
        │                │                │
        └────────────────┼────────────────┘
                         │
                         ▼
                ┌──────────────────┐
                │  Single Redis     │
                │ Session Cache     │
                │                  │
                │ SID001 → User1   │
                │ SID002 → User2   │
                │ SID003 → User3   │
                │       ...        │
                │ Millions more... │
                └──────────────────┘
                         │
                         ▼
      Eventually becomes a bottleneck:
      ❌ Memory limit
      ❌ High CPU usage
      ❌ Network congestion
      ❌ Single point of failure


Solution: Distributed Cache Cluster
                    Millions of Users
                           │
                           ▼
                    ┌───────────────┐
                    │ Load Balancer │
                    └──────┬────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
     ┌─────────┐      ┌─────────┐      ┌─────────┐
     │Server A │      │Server B │      │Server C │
     └────┬────┘      └────┬────┘      └────┬────┘
          └────────────────┼────────────────┘
                           │
                           ▼
                 ┌──────────────────────┐
                 │   Redis Cluster      │
                 └──────────────────────┘
                    │        │        │
          ┌─────────┘        │        └─────────┐
          ▼                  ▼                  ▼
   ┌────────────┐     ┌────────────┐     ┌────────────┐
   │ Redis Node1│     │ Redis Node2│     │ Redis Node3│
   │SID1-5M     │     │SID5M-10M   │     │SID10M-15M  │
   └────────────┘     └────────────┘     └────────────┘
How it works
Instead of storing all session IDs in one Redis server, sessions are partitioned (sharded) across multiple Redis nodes.
Each Redis node stores only a portion of the sessions.
When a server needs a session, it automatically contacts the correct Redis node.
More Redis nodes can be added as the number of users grows.
Advantages
✅ Handles millions of sessions.
✅ Eliminates the memory bottleneck of a single cache.
✅ Improves throughput by distributing requests.
✅ Provides higher availability using replication and failover.
✅ Easy to scale by adding more cache nodes.



# STATELESS

## Key Characteristics
- The server does **not** maintain client sessions.
- Every request is **independent**.
- Each request contains all required information (e.g., JWT token, API key).
- Any server can process any request.
- Ideal for distributed and cloud-native architectures.

# JWT (JSON Web Token) Structure

A JWT consists of **three parts** separated by dots (`.`):

```text
xxxxx.yyyyy.zzzzz
Header.Payload.Signature
```

Example:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.
eyJ1c2VySWQiOjEwMSwibmFtZSI6IkFheXVzaCIsInJvbGUiOiJBZG1pbiIsImV4cCI6MTc2NTQwMDAwMH0
.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

# 1. Header

The **Header** contains information about the token.

Example:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Fields
- **alg** → Signing algorithm (HS256, RS256, etc.)
- **typ** → Token type (JWT)

---

# 2. Payload

The **Payload** contains the user's information (called **claims**).

Example:

```json
{
  "userId": 101,
  "name": "Aayush",
  "role": "Admin",
  "exp": 1765400000
}
```

### Common Claims

| Claim | Meaning |
|--------|---------|
| `sub` | Subject (User ID) |
| `name` | User Name |
| `email` | User Email |
| `role` | User Role |
| `iat` | Issued At |
| `exp` | Expiration Time |
| `iss` | Issuer |
| `aud` | Audience |

> **Note:** The payload is **Base64URL encoded**, **not encrypted**. Anyone with the token can decode and read it, so never store passwords or sensitive information in the payload.

---

# 3. Signature

The **Signature** verifies that the JWT has **not been modified**.


If someone changes the payload (for example, changing `"role": "User"` to `"role": "Admin"`), the signature becomes invalid and the server rejects the token.

---



A **Refresh Token** is a long-lived token used to obtain a **new Access Token** when the current Access Token expires, without requiring the user to log in again.

- **Access Token** → Short-lived (used to access APIs).
- **Refresh Token** → Long-lived (used only to generate a new Access Token).

---

# Why Do We Need a Refresh Token?

If an **Access Token** never expired, anyone who stole it could use it indefinitely.

Therefore:
- Access Tokens are kept **short-lived** (e.g., 15 minutes).
- Refresh Tokens are **long-lived** (e.g., 7–30 days) and used only to obtain a new Access Token.
