FROM node:lts-alpine
ENV NODE_ENV=production
ENV OPENAI_API_KEY="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"
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN npm run build
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
