#!/bin/bash
address="104.131.79.48"

rsync_opts="\
--recursive \
--compress \
--perms \
--times \
--omit-dir-times \
--progress \
--human-readable \
--exclude=deploy.sh \
--exclude=.git/*** \
--exclude=node_modules/*** \
"

rsync $rsync_opts "$( pwd )/" "kris@$address:~/node-chat-demo/"

echo "Deployed to http://$address:8888"
