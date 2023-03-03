# Replace envs in configs
find /etc/nginx/ -type f -name *.conf -print0 | xargs -0 sed -i'' -e 's/${API_GATEWAY_HOST}/'$API_GATEWAY_HOST'/g';

# Remove default nginx default site
rm -f /etc/nginx/conf.d/default.conf

# Start nginx and pm2
exec nginx -g "daemon off;" & /usr/sbin/sshd -e & pm2 start --no-daemon /usr/app/server/index.mjs -i max