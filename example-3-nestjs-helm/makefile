deploy:
	docker build -t "example-3-nestjs-helm:latest" .
	helm install example-3-nestjs-helm ./.helm 

destroy:
	helm uninstall example-3-nestjs-helm