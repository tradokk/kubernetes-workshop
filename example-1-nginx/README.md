# Example 1: Simple Kubernetes Nginx deployment

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Workshop Content](#workshop-content)
4. [Prerequisites](#prerequisites)
5. [Usage](#usage)

## Introduction

In this workshop, you'll learn how to deploy and manage applications in a Kubernetes cluster. Kubernetes is a powerful container orchestration system, and many tools allow you to have a better expirience. In this case, we use just kubernetes

## Getting Started

To get started with the workshop, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `kube` directory to access the Kubernetes manifests and Makefile.
3. Follow the content in this repository to learn about Kubernetes and Makefile usage.

## Workshop Content

The workshop content is organized in the `./kube` directory and includes the following Kubernetes YAML files:

1. `1-namespace.yaml`: Kubernetes namespace definition.
2. `2-pod.yaml`: Kubernetes Pod definition.
3. `3-deployment.yaml`: Kubernetes Deployment definition.
4. `4-service.yaml`: Kubernetes Service definition.
5. `5-ingress.yaml`: Kubernetes Ingress definition.

You can use these resources to practice various Kubernetes concepts.

## Prerequisites

Before diving into the workshop, ensure you have the following prerequisites:

- A basic understanding of Kubernetes concepts.
- A running Kubernetes cluster (local or remote).
- kubectl command-line tool installed.
- Make utility installed on your system.

## Usage

You can use the provided Kubernetes YAML files and Makefile in the `./kube` directory to practice and experiment with Kubernetes and Makefile concepts. Make sure to have your Kubernetes cluster set up and configured properly.

To deploy a resource, you can use the `kubectl apply` command like this:

deploy all kubernetes resources to the cluster (Container Groups)

```shell
kubectl apply -f ./kube/
```

### Commands for presentation

get the running POD's (Container Groups)

```shell
kubectl get pods
```

get the running deployments

```shell
kubectl get deployments
```

get the deployed services (Load Balancers)

```shell
kubectl apply -f ./kube/
```

delete a pod (Container Groups)

```shell
kubectl delete pod <pod-name>
```

for ppl that dont want to work with kubectl

```shell
make deploy  # Deploy the application to kubernete
make destroy # Delete all kubernetes resources
```
