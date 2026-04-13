#!/bin/bash

# Installation helper script for UCT Frontend
# This script helps install dependencies with optimizations for faster downloads

set -e

echo "🚀 UCT Frontend - Dependency Installation Helper"
echo "=================================================="
echo ""

# Check if pnpm is installed
if command -v pnpm &> /dev/null; then
    echo "✅ pnpm detected ($(pnpm --version))"
    echo ""
    echo "Installing dependencies with pnpm..."
    echo "This is the recommended approach for faster installation."
    echo ""
    pnpm install
    echo ""
    echo "✅ Dependencies installed successfully with pnpm!"
    
elif command -v npm &> /dev/null; then
    echo "⚠️  pnpm not found, falling back to npm"
    echo "For faster installation, consider installing pnpm:"
    echo "  npm install -g pnpm@10.4.1"
    echo ""
    echo "Installing dependencies with npm..."
    npm install --legacy-peer-deps
    echo ""
    echo "✅ Dependencies installed successfully with npm!"
    
else
    echo "❌ Neither pnpm nor npm found!"
    echo "Please install Node.js and npm first."
    exit 1
fi

echo ""
echo "📦 Installation complete!"
echo ""
echo "Next steps:"
echo "  1. Development:  pnpm dev"
echo "  2. Build:        pnpm build"
echo "  3. Production:   pnpm start"
echo ""
