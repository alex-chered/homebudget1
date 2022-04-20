dev:
	docker-compose -f docker-compose.dev.yml up --build
dev_up:
	docker-compose -f docker-compose.dev.yml up
dev_build:
	docker-compose -f docker-compose.dev.yml build
dev_down:
	docker-compose -f docker-compose.dev.yml down

prod:
	docker-compose -f docker-compose.prod.yml up --build
prod_down:
	docker-compose -f docker-compose.prod.yml down