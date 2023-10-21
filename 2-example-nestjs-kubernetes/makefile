deploy:
	docker build -t "2-example-nestjs-kubernetes:latest" .
	kubectl apply -f ./kube/

destroy:
	kubectl remove -f ./kube/
	docker image rm "2-example-nestjs-kubernetes:latest"