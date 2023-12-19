# Coimex Trading Platform

## Getting Started

1. **Set up MongoDB URI:**
   - Set a valid MongoDB URI as the `MONGODB_URI` environment variable in the `.env` file.

2. **Install Npm Dependencies:**
    - Run the following command to install all npm packages
    ```bash
    npm i
    ```

3. **Seed the Database:**
   - Run the following command to generate and insert random transactions into the "transactions" collection:
     ```bash
     npm run seed {number_of_transactions}
     ```
     Replace `{number_of_transactions}` with the desired number of transactions to be generated.

4. **Build and Start the Server:**
   - Build the TypeScript code and start the server using the following command:
     ```bash
     npm run start:dev
     ```

## Using Docker (Optional)

To run the Coimex Trading Platform using Docker, follow these steps:

1. **Set up MongoDB URI:**
   - Set a valid MongoDB URI as the `MONGODB_URI` environment variable in the docker-compose.yml file

2. **Run Docker Compose:**
   - Run the following command to start the application and MongoDB using Docker Compose:
     ```bash
     docker-compose up
     ```

   This command will start both services defined in the `docker-compose.yml` file.

 3. **Seed the Database:**
    - Run the following command to generate and insert random transactions into the "transactions" collection:
     ```bash
     npm run seed {number_of_transactions}
     ```
     Replace `{number_of_transactions}` with the desired number of transactions to be generated.  

4. **Stop Docker Containers:**
   - To stop the Docker containers, run the following command:
     ```bash
     docker-compose down
     ```

## Testing the APIs

To test the APIs, use the provided [Postman collection](https://elements.getpostman.com/redirect?entityId=29448651-22a75216-6a6d-4512-b313-efa9a781823b&entityType=collection).

1. **Test: Get All Symbols Statistics:**
   - Use the [Get All Symbols Statistics](https://www.postman.com/kashierpayments/workspace/coimex/request/29448651-934eccc8-3765-4faf-9d22-d1c34ef430a0?ctx=documentation) request in the Postman collection.
   - Ensure you are using the local Postman environment.

2. **Test: Get Symbol Statistics By Symbol Name:**
   - Use the [Get Symbol Statistics By Symbol Name](https://www.postman.com/kashierpayments/workspace/coimex/request/29448651-12f730a2-8612-4f9f-8d24-191e87c3ca63?ctx=documentation) request in the Postman collection.
   - Ensure you are using the local Postman environment.

### Examples for Success and Failure with Tests

- The Postman collection includes examples for successful API requests and failure scenarios with corresponding test scripts.

---

Feel free to customize this README file based on your project's specific requirements and additional details.
