# Pull from a base image
FROM node:14-alpine

# Use app/ as the working directory
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

# Install dependencies (npm ci is similar to npm i, but for automated builds, the yarn version of it is being used here)
# https://stackoverflow.com/questions/58482655/what-is-the-closest-to-npm-ci-in-yarn
# RUN npm ci --only-production
RUN yarn install --frozen-lockfile

COPY . .

# Build production client side React application
# RUN yarn build

# Listen on the specified port
EXPOSE 3000

CMD ["yarn", "docker:start"]