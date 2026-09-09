# OSI Model (Open Systems Interconnection)

The **OSI (Open Systems Interconnection) Model** is a **7-layer reference model** developed by **ISO (International Organization for Standardization)**. It explains how data travels from one device to another over a network. Each layer performs a specific function and communicates only with the layers directly above and below it.

---

## OSI Model Layers

| Layer No. | Layer Name | Main Function | Examples |
| :--- | :--- | :--- | :--- |
| **7** | Application | Provides network services to user applications | HTTP, HTTPS, FTP, SMTP, DNS |
| **6** | Presentation | Data formatting, encryption, decryption, compression | SSL/TLS, JPEG, ASCII |
| **5** | Session | Establishes, manages, and terminates sessions | NetBIOS, RPC |
| **4** | Transport | End-to-end communication, error checking, flow control | TCP, UDP |
| **3** | Network | Routing and logical addressing | IP, ICMP, Routers |
| **2** | Data Link | Framing, MAC addressing, error detection | Ethernet, PPP, Switches |
| **1** | Physical | Transmits raw bits over physical medium | Cables, Hubs, Fiber, Wi-Fi |

---

## Detailed Explanation

### Layer 7 – Application Layer
- Closest to the user.
- Provides network services to applications.
- Handles web browsing, email, and file transfer.

**Protocols:**
- HTTP
- HTTPS
- FTP
- SMTP
- DNS

**Example:** Opening `www.google.com` in Chrome.

---

### Layer 6 – Presentation Layer
- Translates data between application and network format.
- Encrypts and decrypts data.
- Compresses and decompresses data.

**Functions:**
- Encryption
- Compression
- Data conversion

**Examples:**
- SSL/TLS
- JPEG
- PNG
- ASCII

---

### Layer 5 – Session Layer
- Creates and maintains communication sessions.
- Synchronizes communication.
- Ends the session after data transfer.

**Examples:**
- Video calls
- Remote desktop
- NetBIOS

---

### Layer 4 – Transport Layer
- Provides reliable communication.
- Breaks data into segments.
- Performs error detection, recovery, and flow control.

**Protocols:**
- TCP
- UDP

**Devices:**
- Firewall (Layer 4)

---

### Layer 3 – Network Layer
- Determines the best path for data routing.
- Uses logical (IP) addresses.
- Performs routing and packet forwarding.

**Protocols:**
- IPv4
- IPv6
- ICMP

**Device:**
- Router

---

### Layer 2 – Data Link Layer
- Uses physical (MAC) addresses.
- Packages data into frames.
- Detects transmission errors.

**Protocols:**
- Ethernet
- PPP

**Device:**
- Switch

---

### Layer 1 – Physical Layer
- Sends raw binary bits.
- Defines cables, connectors, voltages, and signals.

**Devices:**
- Hub
- Repeater
- Fiber Optic Cable
- Ethernet Cable

---

## Data Encapsulation

| OSI Layer | Data Unit |
| :--- | :--- |
| Application | Data |
| Presentation | Data |
| Session | Data |
| Transport | Segment |
| Network | Packet |
| Data Link | Frame |
| Physical | Bits |

---

## Devices Used in OSI Model

| Device | Layer |
| :--- | :--- |
| Hub | Physical (Layer 1) |
| Repeater | Physical (Layer 1) |
| Switch | Data Link (Layer 2) |
| Bridge | Data Link (Layer 2) |
| Router | Network (Layer 3) |
| Firewall | Transport (Layer 4) / Network (Layer 3) |

---

## Example: Opening a Website

1. **Application** → Browser creates HTTP/HTTPS request.
2. **Presentation** → Encrypts data using HTTPS (SSL/TLS).
3. **Session** → Starts communication session with server.
4. **Transport** → TCP divides data into segments.
5. **Network** → IP finds the destination path.
6. **Data Link** → Frames are created with source and destination MAC addresses.
7. **Physical** → Bits travel through cables or Wi-Fi signals.

*At the destination, this process is reversed (decapsulation).*

---

## OSI vs TCP/IP

| OSI Model | TCP/IP Model |
| :--- | :--- |
| 7 Layers | 4 Layers |
| Reference Model | Practical Internet Model |
| Developed by ISO | Developed by DoD (Department of Defense) |
| Mainly used for theoretical learning | Used practically on the Internet |

---

## Interview Questions

### 1. How many layers are there in the OSI model?
**Answer:** 7

### 2. Which layer is responsible for routing?
**Answer:** Network Layer (Layer 3)

### 3. Which layer uses TCP and UDP?
**Answer:** Transport Layer (Layer 4)

### 4. Which device works at Layer 3?
**Answer:** Router

### 5. Which device works at Layer 2?
**Answer:** Switch

### 6. Which layer uses MAC addresses?
**Answer:** Data Link Layer (Layer 2)

### 7. Which layer provides encryption?
**Answer:** Presentation Layer (Layer 6)

### 8. Which layer transmits bits?
**Answer:** Physical Layer (Layer 1)

### 9. What is the data unit at the Network Layer?
**Answer:** Packet

### 10. What is the data unit at the Data Link Layer?
**Answer:** Frame