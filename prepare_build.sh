#!/bin/bash

cleanup() {
    echo "Clearing up after deploying"
    rm -rf node_modules/
}

trap cleanup EXIT

echo "Installing dependencies"
npm install

echo "Creating project build"
npm run build