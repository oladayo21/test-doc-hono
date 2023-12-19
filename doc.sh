#!/bin/bash

# Start the server in the background
pnpm run dev &
SERVER_PID=$!

# Wait for the server to start. Adjust the sleep time as needed.
sleep 5

# Call the /api endpoint and save the response
curl http://localhost:8080/openapi-doc > spec.json

# Optionally, you can stop the server after the call
kill $SERVER_PID
