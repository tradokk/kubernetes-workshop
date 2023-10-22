import { App } from 'cdktf'
import LocalKubernetesStack from './infra/stacks/local-kubernetes-stack'

const app = new App()
new LocalKubernetesStack(app, 'example-5-nestjs-terraform-cdk')
app.synth()