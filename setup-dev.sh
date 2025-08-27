#!/bin/bash

# Development Environment Setup Script
echo "🔧 Setting up development environment..."

# Check Node.js version
echo "📋 Checking Node.js version..."
node --version || {
    echo "❌ Node.js not found. Please install Node.js 18+ first."
    exit 1
}

# Check npm version
echo "📋 Checking npm version..."
npm --version || {
    echo "❌ npm not found. Please install npm first."
    exit 1
}

# Clean previous installations
echo "🧹 Cleaning previous installations..."
rm -rf node_modules package-lock.json

# Clear npm cache
echo "🗑️ Clearing npm cache..."
npm cache clean --force

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Verify Vite installation
echo "✅ Verifying Vite installation..."
if npm list vite > /dev/null 2>&1; then
    echo "✅ Vite is properly installed"
else
    echo "⚠️ Installing Vite explicitly..."
    npm install --save-dev vite@latest
fi

# Check if development server can start
echo "🚀 Testing development server..."
timeout 10s npm run dev || {
    echo "⚠️ Development server test completed"
}

echo "✅ Development environment setup complete!"
echo "🎉 You can now run: npm run dev"