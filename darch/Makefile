NODE_PATH:=.

.PHONY: prod stage dev test docs

all: prod

prod:
	NODE_PATH=${NODE_PATH} NODE_ENV=production gulp

stage:
	NODE_PATH=${NODE_PATH} NODE_ENV=stage gulp

dev:
	NODE_PATH=${NODE_PATH} NODE_ENV=development gulp

devserver:
	node_modules/.bin/webpack-dev-server

test:
	NODE_PATH=${NODE_PATH} NODE_ENV=test gulp

docs:
	NODE_PATH=${NODE_PATH} NODE_ENV=production gulp docs

bash:
	bash
