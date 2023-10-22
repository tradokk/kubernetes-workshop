import { TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { BackendImage } from '../constructs/backend_image'
import BackendRelease from '../constructs/backend_release'
import { HelmProvider } from '@cdktf/provider-helm/lib/provider'
import { KubernetesProvider } from '@cdktf/provider-kubernetes/lib/provider'
import { DockerProvider } from '@cdktf/provider-docker/lib/provider'

export default class LocalKubernetesStack extends TerraformStack {
  constructor (scope: Construct, id: string) {
    super(scope, id)

    new HelmProvider(this, 'helm', {
      kubernetes: {
        configPath: '~/.kube/config'
      }
    })
    new KubernetesProvider(this, 'kubernetes', {
      configPath: '~/.kube/config'
    })

    new DockerProvider(this, 'docker', {})

    const backendImage = new BackendImage(
      this,
      'example-nestjs-terraform-cdk',
      'Dockerfile'
    )

    new BackendRelease(this, {
      image: {
        name: backendImage.name,
        tag: 'latest'
      }
    })
  }
}
