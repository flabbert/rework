#############################################
##Build Step
#############################################
FROM node:lts-alpine AS build

# Install node
WORKDIR /usr/src/app/

COPY package.json yarn.lock nuxt.config.ts ./

RUN yarn

COPY src src
RUN yarn build




#############################################
## RUN STEP
#############################################
FROM nginx:1.23-alpine AS runtime

EXPOSE 80

RUN apk add --no-cache --update \
    nodejs=18.14.2-r0 \
    npm=9.1.2-r0

# Install and configure SSH
EXPOSE 2222
ENV WEBSITE_SSH_USER "root"
ENV WEBSITE_SSH_PASSWORD "Docker!"
RUN apk --update add --no-cache openssh bash \
    && ssh-keygen -A \
    && echo "$WEBSITE_SSH_USER:$WEBSITE_SSH_PASSWORD" | chpasswd \
    && rm -rf /var/cache/apk/* \
    && echo -e "\
    Port 			2222\n\
    ListenAddress 		0.0.0.0\n\
    LoginGraceTime 		180\n\
    X11Forwarding 		yes\n\
    Ciphers aes128-cbc,3des-cbc,aes256-cbc,aes128-ctr,aes192-ctr,aes256-ctr\n\
    MACs                    hmac-sha1,hmac-sha1-96\n\
    StrictModes 		yes\n\
    SyslogFacility 		DAEMON\n\
    PasswordAuthentication 	yes\n\
    PermitEmptyPasswords 	no\n\
    PermitRootLogin 	yes\n\
    " > /etc/ssh/sshd_config


WORKDIR /usr/app

COPY --from=build /usr/src/app/.output/ ./

# Install PM 2, and fix permissions for dependency
RUN npm install -g pm2@5
RUN pm2 install pm2-server-monit

# Copy Nginx configuration
COPY docker/nginx/ /etc/nginx/

# Copy error pages
COPY docker/static/ /usr/app/static/

# Copy entrypoint into working dir
COPY docker/entrypoint.sh /usr/app/entrypoint.sh

EXPOSE 80

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENTRYPOINT ["/bin/ash", "/usr/app/entrypoint.sh"]