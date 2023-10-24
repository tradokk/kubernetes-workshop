import { Image } from '@cdktf/provider-docker/lib/image'
import { Construct } from 'constructs'
import {resolve} from 'path'

export class BackendImage extends Image {
  constructor (scope: Construct, name: string, dockerfile: string) {
    super(scope, 'image_' + name, {
      name,
      buildAttribute: {
        context: resolve(__dirname, '..', '..'),
        dockerfile: dockerfile,
        buildArg: {
          path: resolve(__dirname, '..', '..', dockerfile)
        },
        tag: [`${name}:latest`]
      }
    })
  }
}
