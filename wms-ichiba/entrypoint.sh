#!/bin/bash
# no verbose
set +x
# config
echo "Check that we have NEXT_PUBLIC_API_URL vars"
#test -n "$NEXT_PUBLIC_API_GATEWAY"
#
echo "Check that we have NEXT_PUBLIC_BASE_URL vars"
#test -n "$NEXT_PUBLIC_BASE_URL"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_API_GATEWAY#$NEXT_PUBLIC_API_GATEWAY#g"
find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_BASE_URL#$NEXT_PUBLIC_BASE_URL#g"

echo "Starting Nextjs"
exec "$@"