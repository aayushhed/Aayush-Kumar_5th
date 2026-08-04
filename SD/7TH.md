# NEUTRAL FUNDAMENTALS


CLIENT  ------> MIDDLEWARE API ------> SERVER----|
   |<-------------|   |<-----------------|


THESE CONNECTION  TWO TYPES:
                            1. WIRED   [CONNETION ORIENTED]
                            2. WIRELESS [CONNECTION-LESS ]


CLIENT USES HTTP       (IN BINARY FORM)

# TCP
                                            It is relaible but not very fast.
TCP 3-Way Handshake
Client                          Server
  |                                |
  | ------ SIG ------------------> |
  |                                |
  | <--- SIG + ACK --------------- |
  |                                |
  | ------ ACK ------------------> |
  |                                |
  |===== Connection Established ===|

# UDP (user datagram protocol)
                                             It is not relaiable as there is no acknowledgement and is fast.
There is no handshake before sending data.

Client                      Server
  |                             |
  | ---- Data ----------------> |
  | ---- Data ----------------> |
  | ---- Data ----------------> |


  # HOW WORKS (DNS RESOLUTION)
  When searching facebook:

        DNS(DOMAIN NAME SERVER)

DNS RESOLUTIN ROLE BASED:

Client (Browser)
      │
      ▼
 DNS Cache
      │
(Cache Miss)
      ▼
DNS Resolver (ISP/Public DNS)
      │
      ▼
Root DNS Server
      │
      ▼
TLD DNS Server (.com, .org, .in)
      │
      ▼
Authoritative DNS Server
      │
      ▼
Returns IP Address
      │
      ▼
Client connects to Website



    
