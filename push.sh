#!/usr/bin/env bash
set -euo pipefail

eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519_work
git push --set-upstream origin main
