import { TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { BackendImage } from '../constructs/backend_image'
import BackendRelease from '../constructs/backend_release'

export default class LocalKubernetesStack extends TerraformStack {
  constructor (scope: Construct, id: string) {
    super(scope, id)

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
