FROM nginx:1.22.1-alpine

EXPOSE 80

# Install node
RUN apk add --no-cache --update \
    nodejs=16.17.1-r0 \
    npm=8.10.0-r0

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

# Install PM 2, and fix permissions for dependency
RUN npm install -g pm2
RUN pm2 install pm2-server-monit

# Create app directory
WORKDIR /usr/src/app/

# Install application dependencies
COPY src/package.json src/package-lock.json ./
RUN npm ci

# Copy and build application
COPY src .
RUN npm run build

# Copy Nginx configuration
COPY docker/nginx/ /etc/nginx/

# Copy error pages
COPY docker/static/ /usr/src/static/

# Copy entrypoint into working dir
COPY docker/entrypoint.sh /usr/src/entrypoint.sh

EXPOSE 80

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENTRYPOINT ["/bin/ash", "/usr/src/entrypoint.sh"]