import { resolve } from 'path'
import { Construct } from 'constructs'
import { Release } from '@cdktf/provider-helm/lib/release'
import { onlyDev } from '../../src/util/environment'

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
    const params = []

    if (process.env.NODE_ENV === 'dev') {
      params[0] = { name: 'dev.enabled', value: true }
      params[0] = {
        name: 'dev.mountPoint',
        value: resolve(__dirname, '..', '..', 'src')
      }
      params
    }

    super(scope, 'chipalert_backend', {
      chart: resolve(__dirname, '..', 'helm'),
      name: 'example-5',
      set: [
        {
          name: 'image.tag',
          value: backendParams.image?.tag ?? 'latest'
        },
        {
          name: 'image.name',
          value: backendParams.image!.name
        },
        ...params
      ]
    })
  }
}
