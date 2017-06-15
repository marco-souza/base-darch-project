NODE_PATH:=.

.PHONY: prod dev test server

all: dev

prod:
	npm run prod

dev:
	npm run dev

server:
	npm run server

# TODO
test:
	npm run test
