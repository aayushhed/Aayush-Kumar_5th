# TCP/IP Model (Transmission Control Protocol / Internet Protocol)

The **TCP/IP Model** is the standard networking model used on the **Internet**. It defines how computers communicate over a network by breaking communication into **4 layers**, where each layer has a specific responsibility.

It was developed by the **United States Department of Defense (DoD)** during the development of **ARPANET**, the predecessor of the Internet.

Unlike the OSI model, which is mainly a **reference model**, the TCP/IP model is a **practical implementation model** used in real-world networking.

---

# Features of TCP/IP Model

- Used by the Internet.
- Consists of **4 layers**.
- Supports communication between heterogeneous systems.
- Highly scalable and reliable.
- Provides end-to-end communication.
- Supports routing across multiple networks.
- Open standard protocol suite.

---

# Layers of TCP/IP Model

|          Layer        |                  Main Function                      |        Common Protocols          | Devices          |
|-----------------------|-----------------------------------------------------|----------------------------------|------------------|
|      Application      | Provides services to user applications              | HTTP, HTTPS, FTP, SMTP, DNS, SSH | Gateway          |
|       Transport       | End-to-end communication, reliability, flow control | TCP, UDP                         | Firewall         |
|        Internet       | Logical addressing and routing                      | IP, ICMP, ARP, IGMP              | Router           |
| Network Access (Link) | Physical transmission of data over network          | Ethernet, Wi-Fi, PPP             | Switch, Hub, NIC |

---

# Layer 4 – Application Layer

The **Application Layer** is the highest layer of the TCP/IP model. It provides network services directly to user applications.

This layer combines the responsibilities of the **Application, Presentation, and Session layers** of the OSI model.

## Functions

- Provides interface between user and network.
- Handles web browsing.
- Email communication.
- File transfer.
- Remote login.
- Name resolution.
- Data formatting.
- Encryption and decryption.
- Session management.

## Common Protocols

| Protocol | Purpose |
|----------|----------|
| HTTP | Access web pages |
| HTTPS | Secure web browsing |
| FTP | File Transfer |
| SMTP | Sending Email |
| POP3 | Receiving Email |
| IMAP | Managing Email |
| DNS | Domain Name Resolution |
| DHCP | Automatic IP assignment |
| SSH | Secure Remote Login |
| Telnet | Remote Login (Not Secure) |

## Example

When you open **www.google.com**:

1. Browser creates an HTTP request.
2. HTTPS encrypts the request.
3. DNS converts the domain name into an IP address.
4. Request is sent to the Transport layer.

---

# Layer 3 – Transport Layer

The **Transport Layer** ensures reliable communication between sender and receiver.

It divides data into smaller pieces called **segments** and guarantees correct delivery.

## Functions

- End-to-end communication.
- Segmentation.
- Error detection.
- Error recovery.
- Flow control.
- Reliability.
- Port addressing.
- Multiplexing.

---

## TCP (Transmission Control Protocol)

TCP is a **connection-oriented** protocol.

Before sending data, it establishes a connection using the **Three-Way Handshake**.

### Features

- Reliable
- Ordered delivery
- Error checking
- Flow control
- Acknowledgement
- Retransmission of lost packets

### Used By

- HTTP
- HTTPS
- FTP
- SMTP
- SSH

---

## UDP (User Datagram Protocol)

UDP is **connectionless**.

It sends data without checking whether packets arrive successfully.

### Features

- Faster
- No acknowledgement
- No retransmission
- No flow control
- Less overhead

### Used By

- Video Streaming
- Online Games
- Live Broadcast
- DNS Queries
- VoIP

---

## TCP vs UDP

| TCP | UDP |
|------|------|
| Connection-oriented | Connectionless |
| Reliable | Unreliable |
| Slow | Fast |
| Error checking | Minimal error checking |
| Ordered delivery | No guaranteed order |
| Used for websites | Used for streaming |

---

# Layer 2 – Internet Layer

The **Internet Layer** is responsible for moving packets from the source network to the destination network.

This layer performs routing using logical IP addresses.

## Functions

- Routing
- Logical Addressing
- Packet Forwarding
- Path Selection
- Fragmentation

---

## Important Protocols

### IP (Internet Protocol)

Provides logical addressing.

There are two versions:

- IPv4
- IPv6

Example IPv4:

```
192.168.1.100
```

Example IPv6:

```
2001:0db8:85a3::8a2e:0370:7334
```

---

### ICMP (Internet Control Message Protocol)

Used for:

- Error reporting
- Network diagnostics

Example:

```
ping google.com
```

uses ICMP.

---

### ARP (Address Resolution Protocol)

Converts

```
IP Address → MAC Address
```

Example:

```
192.168.1.5
↓

00:1A:2B:3C:4D:5E
```

---

### IGMP

Used for multicast communication.

---

## Device

**Router**

A router works at the Internet layer by forwarding packets between different networks.

---

# Layer 1 – Network Access Layer (Link Layer)

This is the lowest layer of the TCP/IP model.

It combines the **Physical Layer** and **Data Link Layer** of the OSI model.

It is responsible for actually transmitting data over cables or wireless signals.

---

## Functions

- Framing
- MAC Addressing
- Error Detection
- Physical Transmission
- Access to Physical Media

---

## Protocols

- Ethernet
- Wi-Fi (IEEE 802.11)
- PPP
- Frame Relay

---

## Devices

- Switch
- Hub
- Bridge
- Network Interface Card (NIC)

---

# Data Encapsulation in TCP/IP

| Layer | Data Unit |
|--------|-----------|
| Application | Data |
| Transport | Segment |
| Internet | Packet |
| Network Access | Frame |
| Physical Medium | Bits |

---

# Example: Accessing a Website

Suppose you type:

```
www.google.com
```

### Step 1 – Application Layer

- Browser creates HTTP request.
- DNS finds Google's IP address.

↓

### Step 2 – Transport Layer

- TCP divides the request into segments.
- Adds source and destination port numbers.

↓

### Step 3 – Internet Layer

- IP adds source and destination IP addresses.
- Router determines the best path.

↓

### Step 4 – Network Access Layer

- Ethernet creates frames.
- MAC addresses are added.
- Data is transmitted as bits over cable or Wi-Fi.

At the destination, the process is reversed until the browser displays the webpage.

---

# TCP/IP vs OSI Model

| TCP/IP Layer | OSI Equivalent |
|--------------|----------------|
| Application | Application + Presentation + Session |
| Transport | Transport |
| Internet | Network |
| Network Access | Data Link + Physical |

---

# Advantages of TCP/IP

- Internet standard.
- Platform independent.
- Scalable.
- Reliable communication.
- Supports routing.
- Flexible architecture.
- Open protocol suite.
- Easy to expand.

---

# Disadvantages of TCP/IP

- Does not clearly separate Session and Presentation layers.
- More complex to troubleshoot than OSI.
- No strict layer separation.
- Security depends on implementation rather than the model itself.

---


---

# Common Interview Questions

### 1. How many layers are there in the TCP/IP model?

**Answer:** 4

---

### 2. Which layer performs routing?

**Answer:** Internet Layer

---

### 3. Which protocol is connection-oriented?

**Answer:** TCP

---

### 4. Which protocol is connectionless?

**Answer:** UDP

---

### 5. Which protocol converts domain names into IP addresses?

**Answer:** DNS

---

### 6. Which protocol converts IP addresses into MAC addresses?

**Answer:** ARP

---

### 7. Which protocol is used for error reporting?

**Answer:** ICMP

---

### 8. Which device performs routing?

**Answer:** Router

---

### 9. Which layer combines the OSI Physical and Data Link layers?

**Answer:** Network Access Layer

---

### 10. Which protocol is used for secure web browsing?

**Answer:** HTTPS