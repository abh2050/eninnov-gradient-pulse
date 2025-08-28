#!/bin/bash

# GitHub Pages Deployment Script for ENINNOV Website

echo "🚀 Starting deployment to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git repo exists and is clean
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository. Please initialize git first."
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes. Please commit them first."
    echo "Continue anyway? (y/n)"
    read -r answer
    if [ "$answer" != "y" ]; then
        echo "Deployment cancelled."
        exit 1
    fi
fi

# Detect package manager
if command -v bun &> /dev/null; then
    PKG_MANAGER="bun"
    echo "📋 Using Bun package manager"
elif command -v npm &> /dev/null; then
    PKG_MANAGER="npm"
    echo "📋 Using npm package manager"
else
    echo "❌ Error: Neither Bun nor npm is installed. Please install one of them first."
    exit 1
fi

# Build the project
echo "📦 Building the project..."
$PKG_MANAGER run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
$PKG_MANAGER run deploy

if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "📱 Your website will be available at: https://abh2050.github.io/eninnov-gradient-pulse/"
    echo "⏰ It may take a few minutes for changes to appear."
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi
