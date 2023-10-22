import { App } from 'cdktf'
import LocalKubernetesStack from './infra/stacks/local-kubernetes-stack'

const app = new App()
new LocalKubernetesStack(app, '5-example-nestjs-terraform-cdk')
app.synth()
