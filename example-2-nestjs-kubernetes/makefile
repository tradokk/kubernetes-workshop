deploy:
	docker build -t "example-2-nestjs-kubernetes:latest" .
	kubectl apply -f ./kube/

destroy:
	kubectl delete -f ./kube/
	docker image rm "example-2-nestjs-kubernetes:latest"