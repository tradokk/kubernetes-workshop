import { Construct } from 'constructs'
import LocalKubernetesStack from './local-kubernetes-stack'

export default class EKSStack extends LocalKubernetesStack {
  constructor (scope: Construct, id: string) {
    // Create EKS Cluster
  
    // Set eks kubectl credentials (export kubeconfig)

    super(scope, id) // Deploy to kubernetes

    // Create API Gateway resources
  }
}
