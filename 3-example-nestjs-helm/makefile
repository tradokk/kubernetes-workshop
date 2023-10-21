deploy:
	docker build -t "3-example-nestjs-helm:latest" .
	helm install 3-example-nestjs-helm ./helm 

destroy:
	kubectl delete -f ./kube/