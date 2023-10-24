deploy:
	docker build -t "example-4-nestjs-terraform:latest" .
	helm install example-4-nestjs-terraform ./.helm 

destroy:
	helm uninstall example-4-nestjs-terraform