import { Image } from '@cdktf/provider-docker/lib/image'
import { Construct } from 'constructs'
import path from 'path'

export class BackendImage extends Image {
  constructor (scope: Construct, name: string, dockerfile: string) {
    super(scope, 'image_' + name, {
      name,
      buildAttribute: {
        context: path.resolve(__dirname, '..', '..'),
        dockerfile: dockerfile,
        buildArg: {
          path: path.resolve(__dirname, '..', '..', dockerfile)
        },
        tag: [`${name}:latest`]
      }
    })
  }
}
