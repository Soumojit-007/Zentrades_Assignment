FROM node:20-bullseye

WORKDIR /app

# Install system dependencies (ffmpeg optional)
RUN apt-get update && \
    apt-get install -y ffmpeg && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json
COPY ../package.json ./

# Install node dependencies
RUN npm install

# Copy project
COPY .. .

CMD ["tail", "-f", "/dev/null"]