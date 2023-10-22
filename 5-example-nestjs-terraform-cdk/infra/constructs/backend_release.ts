import path from 'path'
import { Construct } from 'constructs'
import { Release } from '@cdktf/provider-helm/lib/release'

export interface BackendReleaseParams {
  image?: {
    name: string
    tag?: string
  }
  imageMigrations?: {
    name: string
    tag?: string
  }
}

export default class BackendRelease extends Release {
  constructor (scope: Construct, backendParams: BackendReleaseParams) {
    super(scope, 'chipalert_backend', {
      chart: path.resolve(__dirname, '..', 'charts', 'backend'),
      name: 'chipalert-cdk-backend',
      namespace: 'pricecrawler-staging',
      set: [
        {
          name: 'image.tag',
          value: backendParams.image?.tag ?? 'latest'
        },
        {
          name: 'image.name',
          value: backendParams.image!.name
        },
      ]
    })
  }
}
