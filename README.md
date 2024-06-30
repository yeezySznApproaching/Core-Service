# Core Service

## Overview

The Core Service acts as an API Gateway for the Hotel Management System. It serves as a single entry point for clients, routing requests to the appropriate microservices (User Service, Room Service, and Booking Service) based on the requested endpoint. The API Gateway helps to decouple the client from individual microservices and provides a centralized point for request handling, load balancing, and security features.

## Features

- **Routing:** Routes incoming HTTP requests to the appropriate microservice based on the URL path.
- **Service Discovery:** Maintains a list of available microservices and their URLs.
- **Load Balancing:** Distributes requests among multiple instances of microservices (if available).
- **Centralized Request Handling:** Acts as a single entry point for all client requests, simplifying the client-side logic.

## Architecture

The Core Service uses the Express framework for handling HTTP requests and Axios for forwarding these requests to the appropriate microservices.

### Microservices

1. **User Service** (`localhost:3001`)
   - Handles user-related operations such as registration, authentication, and profile management.

2. **Room Service** (`localhost:3002`)
   - Manages room-related operations including room availability, pricing, and status updates.

3. **Booking Service** (`localhost:3003`)
   - Manages booking operations such as room reservations, booking status, and history.



PS: This service was done by Jihad Ballout, who's in the team with Grant Ivan Andalajao & Zolboo Duuren

